const slides = document.querySelectorAll(".slide")
var count=0;
slides.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)
const goNext=()=>{
    count++;
    slideimage()
}
const goPrev=()=>{
    count--;
    slideimage()
}
const slideimage=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${count*100}%)`
    })
}