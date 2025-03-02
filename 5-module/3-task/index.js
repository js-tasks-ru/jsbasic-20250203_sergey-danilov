function initCarousel() {
  const buttonRight = document.querySelector('.carousel__arrow.carousel__arrow_right');
  const buttonLeft = document.querySelector('.carousel__arrow.carousel__arrow_left');
  const carouselInner = document.querySelector(".carousel__inner");
  const carouselSlide = document.querySelectorAll('.carousel__slide');
  
  buttonLeft.style.display = 'none';
  let currentSlide = 0;
  const totalSlide = 3;
  

  function updateCarousel() {
  const slideWidth = carouselSlide[0].offsetWidth;
  carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  buttonRight.onclick = () => {
    if (currentSlide < totalSlide) {
      currentSlide++;
    }
    if (currentSlide == totalSlide) {
      buttonRight.style.display = 'none';
    } else {
      buttonRight.style.display = '';
      buttonLeft.style.display = '';
    }
    updateCarousel();
  }

  buttonLeft.onclick = () => {
    if (currentSlide > 0) {
      currentSlide--;
    }
    if (currentSlide == 0) {
      buttonLeft.style.display = 'none';
    } else {
      buttonRight.style.display = '';
      buttonLeft.style.display = '';
    }
    updateCarousel();
  }
}

