// All variables
const prevBtnOrder = document.getElementById('prev-btn');
const nextBtnOrder = document.getElementById('next-btn');

let items = [];
for (let i = 1; i <= 8; i++) {
  items.push(document.getElementById(`item-${i}`));
}
let currentIndex = 0;
let itemCount = items.length;


// Events for buttons
prevBtnOrder.addEventListener('click', nextSlide);
nextBtnOrder.addEventListener('click', prevSlide);

// Carousel animation
function nextSlide() {
  currentIndex = (currentIndex + 1) % itemCount;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + itemCount) % itemCount;
  updateCarousel();
}

function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  const gap = 19;
  items.forEach((item, index) => {
    let offset = (index - currentIndex + itemCount) % itemCount;
    item.style.transform = `translateX(${offset * (itemWidth + gap)}px)`;
  });
}

window.setInterval(nextSlide, 5000);
window.addEventListener('resize', updateCarousel);
updateCarousel();