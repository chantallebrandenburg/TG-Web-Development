const ul = document.querySelector(".carousel_ul");
console.log(ul)
const slides = Array.from(ul.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const dotsNav  =  document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);

const slidesWidth = slides[0].getBoundingClientRect().width;

console.log(slidesWidth)


//Arrange the slides next to each other.

const setSlidesPosititon = (slides, index) => {
    slides.style.left = slidesWidth * index + "px";
};

slides.forEach(setSlidesPosititon);


    const moveToSlide = (ul, currentSlide, targetSlide)=>{
    ul.style.transform = "translateX(-"+ targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

const updateDots = (currentDot, targetDot) => {
currentDot.classList.remove('current-slide');
targetDot.classList.add('current-slide');
}

// when i click left move slides to left

prevButton.addEventListener("click", e => {
    const currentSlide = ul.querySelector(".current-slide")
    const prevSlide = currentSlide.previousElementSibling;

    
    const currentDot = dotsNav.querySelector(".current-slide")
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(ul, currentSlide, prevSlide)
    updateDots(currentDot, prevDot)
})


// when i click right move slides to right
nextButton.addEventListener("click", e => {
    const currentSlide = ul.querySelector(".current-slide")
    const nextSlide = currentSlide.nextElementSibling;
    

    const currentDot = dotsNav.querySelector(".current-slide")
    const nextDot = currentDot.nextElementSibling;
    //move the slide
    moveToSlide(ul, currentSlide, nextSlide)
    updateDots(currentDot, nextDot)
})

// when i clikc navigator move to that slide
dotsNav.addEventListener("click", e => {
    //what indicator was clicked on?
    const targetDot = e.target.closest("button");
    
    if(!targetDot)return;

    const currentSlide = ul.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex]

    moveToSlide(ul, currentSlide, targetSlide);


    updateDots(currentDot, targetDot)

})
