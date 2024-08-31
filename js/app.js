
const puppaps = Array.from(document.querySelectorAll(".puppap"))
const photoGelary =document.querySelector(`.photoGelary`)

let imagePosition = null

const openGelery =(index,event) =>{
   imagePosition = index

   photoGelary.querySelector("img").src = event.target.src
   photoGelary.classList.add("active")
}

puppaps.map((puppap,index)=> puppap.addEventListener(`click`,()=> openGelery(index, event)))


const cancleBtn = photoGelary.querySelector(`.cancleBtn`)

const  closeGelary =() =>{
    photoGelary.classList.remove(`active`)
}

cancleBtn.addEventListener(`click`, closeGelary)


const rightArrow = photoGelary.querySelector(`.rightArrow`)
const nextPhoto =()=>{
    if(imagePosition ==(puppaps.length - 1)){
        imagePosition = 0
        photoGelary.querySelector("img").src = puppaps[imagePosition].src
    } else{
        photoGelary.querySelector("img").src = puppaps[imagePosition + 1].src
    }
   
   imagePosition = imagePosition+1
}
rightArrow.addEventListener(`click`, nextPhoto)

 const leftArrow = photoGelary.querySelector(`.leftArrow`)
const afterPhoto =()=>{
     if(imagePosition ==(puppaps.length + 1)){
         imagePosition = 0
        photoGelary.querySelector("img").src = puppaps[imagePosition].src
     } else{
         photoGelary.querySelector("img").src = puppaps[imagePosition - 1].src
     }
   
    imagePosition = imagePosition-1
 }
 leftArrow.addEventListener(`click`, afterPhoto)


 const faqs = Array.from(document.querySelectorAll(`.faq`))
 const faqToggle =() =>{
    const currentTaget = event.currentTarget

    if(currentTaget.classList.contains("active")){
        faqs.map(faq => faq.classList.remove(`active`))
    }else{
        faqs.map(faq =>faq.classList.remove(`active`))

     currentTaget.classList.add(`active`)
    }

    
     
 } 
 faqs.map(faq  =>faq.addEventListener(`click` , faqToggle))