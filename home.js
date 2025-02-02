const slides = document.querySelectorAll(".slide");
let count = 0;

// Set the initial position of each slide
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Navigate to the next slide
const goNext = () => {
    if (count < slides.length - 1) {
        count++;
        slideImage();
    }
    else{
        count=0;
        // slideImage();
    }
};

// Navigate to the previous slide
const goPrev = () => {
    if (count > 0) {
        count--;
        slideImage();
    }
    else{
        
        count=4;
        // slideImage();
    }
};
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const home1 = document.querySelector(".home1");
        home1.style.display = "block";   
    }, 2000); // Adjust the timeout duration as needed
});
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const home2 = document.querySelector(".he11");
        const home3 = document.querySelector(".bike");
        home2.style.display = "none";
        home3.style.display = "none"; 
    }, 2000); // Adjust the timeout duration as needed
});
document.querySelector(".fa-desktop")?.addEventListener("click", () => {
    resizeIframe("fa-desktop");
});
document.querySelector(".fa-mobile-screen-button")?.addEventListener("click", () => {
    resizeIframe("fa-mobile-screen-button");
});
document.querySelector(".fa-tablet-screen-button")?.addEventListener("click", () => {
    resizeIframe("fa-tablet-screen-button");
});
document.querySelector(".xmasrk")?.addEventListener("click",()=>{
    document.querySelector(".Header1").style.display="none"
    document.querySelector("#iframe1").style.marginTop="0rem"
    document.querySelector("#iframe1").style.height="99vh"
})
function resizeIframe(device) {
    const iframe = document.querySelector("#iframe1");
    if (!iframe) return;

    switch (device) {
        case "fa-mobile-screen-button":
            iframe.style.width = "480px";
            // document.querySelector(".ful").style.positionRight="35%";
            if(iframe.style.marginLeft == "0%"){
                iframe.style.marginLeft = "30%";
              }
              else{
                  iframe.style.marginLeft = "30%";
              }
            break;
        case "fa-tablet-screen-button":
            iframe.style.width = "768px";
            if(iframe.style.marginLeft == "0%"){
              iframe.style.marginLeft = "20%";
            }
            else{
                iframe.style.marginLeft = "20%";
            }
            
            break;
        case "fa-desktop":
            iframe.style.width = "100%";
            if(iframe.style.marginLeft != "0%"){
                iframe.style.marginLeft = "0%";
              }

              
            break;
        default:
            iframe.style.width = "100%";
    }
}

// Update the slide's position
const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
};

// Hide the scrollbar

// Handle burger menu functionality
const classSelector = document.querySelectorAll(".home11");
document.querySelector(".cross").addEventListener("click",()=>{
    document.querySelector(".ful").style.display="none"
    document.querySelector(".cross").style.display="none"
    document.querySelector("#tra1").style.display="flex"

    classSelector.forEach((elem) => {
        elem.style.display = "block";
    });
})
document.querySelector(".fa-bars")?.addEventListener("click", () => {
    document.querySelector(".cross").style.display="block"
    const fulMenu = document.querySelector(".ful");
    if (fulMenu) fulMenu.style.display = "flex";

    classSelector.forEach((elem) => {
        elem.style.display = "none";
    });
    document.querySelector("#tra1").style.display="none"


    // const pgElement = document.querySelector(".pg100");
    // if (pgElement) pgElement.style.height = "0";
});

// Simulate loading process

