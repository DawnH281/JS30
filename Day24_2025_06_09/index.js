const track = document.getElementById('track');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateSlide(index) {
  const slideWidth = window.innerWidth;
  track.style.transform = `translateX(-${index * slideWidth}px)`;

  dots.forEach(dot => dot.classList.remove('select'));
  dots[index].classList.add('select');
}

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % dots.length;
  updateSlide(currentIndex);
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  updateSlide(currentIndex);
};

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.dataset.index);
    updateSlide(currentIndex);
  });
});

window.addEventListener('resize', () => {
  updateSlide(currentIndex);
});

updateSlide(0);
