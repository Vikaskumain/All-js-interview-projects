let currentIndex = 0;
const slides = document.getElementById('carouselSlide');

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex === slides.children.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = slides.children.length - 1;
  }

  const translateValue = -currentIndex * 100 + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';
}


