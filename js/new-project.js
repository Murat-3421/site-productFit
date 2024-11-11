const nextBtnProjectSections = document.getElementById("arrow-right");
const prevBtnProjectSections = document.getElementById("arrow-left");

let slidesProjects = [];
for (let i = 1; i <= 6; i++) {
  slidesProjects.push(document.getElementById(`slide-${i}`));
}
let dotsProjects = [];
for (let i = 1; i <= 6; i++) {
  dotsProjects.push(document.getElementById(`dot-${i}`));
}
for(let i = 0; i < dotsProjects.length; i++){
    dotsProjects[i].addEventListener("click", navDotsprojects);
}

nextBtnProjectSections.addEventListener("click", nextSlideProjects);
prevBtnProjectSections.addEventListener("click", prevSlideProjects);

window.setInterval(nextSlideProjects, 7000);

function updateSlideprojects(currentSlide, targetSlide){
    currentSlide.classList.remove("active-slide");
    targetSlide.classList.add("active-slide"); 
}
function updateDotsProjects(currentDot, targetDot){
    currentDot.classList.remove("active-nav-dot");
    targetDot.classList.add("active-nav-dot");
}
function nextSlideProjects(){
    const currentSlide = document.querySelector(".active-slide");
    let nextSlide = currentSlide.nextElementSibling; 
    const currentDot = document.querySelector(".active-nav-dot");
    let nextDot = currentDot.nextElementSibling; 
    if (!nextSlide) {
        nextSlide = slidesProjects[0];
        nextDot = dotsProjects[0];
    }
    updateSlideprojects(currentSlide, nextSlide); 
    updateDotsProjects(currentDot, nextDot);  
};

function prevSlideProjects(){
    const currentSlide = document.querySelector(".active-slide");
    let prevSlide = currentSlide.previousElementSibling;
    const currentDot = document.querySelector(".active-nav-dot");
    let prevDot = currentDot.previousElementSibling;
    if (!prevSlide) {
        prevSlide = slidesProjects[slidesProjects.length - 1];
        prevDot = dotsProjects[dotsProjects.length - 1];
    }
    updateSlideprojects(currentSlide, prevSlide);
    updateDotsProjects(currentDot, prevDot);
};

function navDotsprojects (e){
    const targetDot = e.target.closest("button");
    if(!dotsProjects){
        return;
    };
    const currentSlide = document.querySelector(".active-slide");
    const currentDot = document.querySelector(".active-nav-dot"); 
    const targetIndex = dotsProjects.findIndex(dot => dot === targetDot);
    const targetSlide = slidesProjects[targetIndex];
    updateDotsProjects(currentDot, targetDot);
    updateSlideprojects(currentSlide, targetSlide, currentDot);
}