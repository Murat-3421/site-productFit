let slides = [];
for (let i = 1; i <= 3; i++) {
  slides.push(document.getElementById(`slide-${i}`));
}
let dots = [];
for (let i = 1; i <= 3; i++) {
  dots.push(document.getElementById(`dot-${i}`));
}
for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener("click", navDotsNews);
}

const prevBtnSliderNews = document.getElementById("prev-btn");
const nextBtnSliderNews = document.getElementById("next-btn");

prevBtnSliderNews.addEventListener("click", prevSlideBtnNews);
nextBtnSliderNews.addEventListener("click", nextSlideBtnNews);

window.setInterval(nextSlideBtnNews, 7000);


function updateSlideNews(currentSlide, targetSlide){
    currentSlide.classList.remove("active");
    targetSlide.classList.add("active"); 
}

function updateDotsNews(currentDot, targetDot){
    currentDot.classList.remove("active-dot");
    targetDot.classList.add("active-dot");
}

function nextSlideBtnNews(){
    const currentSlide = document.querySelector(".active");
    let nextSlide = currentSlide.nextElementSibling; 
    const currentDot = document.querySelector(".active-dot");
    let nextDot = currentDot.nextElementSibling; 
    if (!nextSlide) {
        nextSlide = slides[0];
        nextDot = dots[0];
    }
    updateSlideNews(currentSlide, nextSlide); 
    updateDotsNews(currentDot, nextDot);  
};

function prevSlideBtnNews(){
    const currentSlide = document.querySelector(".active");
    let prevSlide = currentSlide.previousElementSibling;
    const currentDot = document.querySelector(".active-dot");
    let prevDot = currentDot.previousElementSibling;
    if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
        prevDot = dots[dots.length - 1];
    }
    updateSlideNews(currentSlide, prevSlide);
    updateDotsNews(currentDot, prevDot);
};

function navDotsNews (e){
    const targetDot = e.target.closest("button");
    if(!dots){
        return;
    };
    const currentSlide = document.querySelector(".active");
    const currentDot = document.querySelector(".active-dot"); 
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    updateDotsNews(currentDot, targetDot);
    updateSlideNews(currentSlide, targetSlide, currentDot);
}

const prevBtnAboutNews = document.getElementById("prev-btn-about-news");
const netxBtnAboutNews = document.getElementById("next-btn-about-news");
prevBtnAboutNews.addEventListener("click", prevSlideAboutNews);
netxBtnAboutNews.addEventListener("click", nextSlideAboutNews);

let aboutNewsItems = [];
for (let i = 1; i <= 3; i++) {
  aboutNewsItems.push(document.getElementById(`item-${i}`));
}

let delays = [0, -6, -12];
let animation_delay = 6;

function updateAnimationDelays() {
    for (let i = 0; i < aboutNewsItems.length; i++) {
      aboutNewsItems[i].style.animationDelay = `${delays[i]}s`;
    }
}
updateAnimationDelays();

function prevSlideAboutNews() {
    delays = delays.map(delay => delay + animation_delay); 
    updateAnimationDelays();
}
  

function nextSlideAboutNews() {
    delays = delays.map(delay => delay - animation_delay); 
    updateAnimationDelays();
}
