import createElement from '/assets/lib/create-element.js';

export default class Carousel {
  elem = null;
  slides = [];

  constructor(slides) {
    this.slides = slides || this.slides;
    this.elem = this.#render();

    this.#initCarousel();
    
  }

  #template() {
     return `
    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
    ${this.slides.map(slide => `
        <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
     `).join('')}
     </div>
    </div>
     `;
  }



  #render(){
    this.elem = createElement(this.#template());

    return this.elem;

  }

  #initCarousel(){

  const buttonRight = this.elem.querySelector('.carousel__arrow.carousel__arrow_right');
  const buttonLeft = this.elem.querySelector('.carousel__arrow.carousel__arrow_left');
  const carouselInner = this.elem.querySelector(".carousel__inner");
  
  const addButton = this.elem.querySelector('.carousel__button');
  
  
  addButton.addEventListener('click', (event) => {
      const button = event.target.closest('.carousel__button');
      const slide = button.closest('.carousel__slide');
      this.elem.dispatchEvent(
        
        new CustomEvent("product-add", { // имя события должно быть именно "product-add"
        
        detail: slide.dataset.id, // Уникальный идентификатора товара из объекта товара
        bubbles: true // это событие всплывает - это понадобится в дальнейшем
        })
      );
   });



  buttonLeft.style.display = 'none';
  let currentSlide = 0;
  const totalSlide = this.slides.length;
  console.log(totalSlide);

  function updateCarousel() {
  const slideWidth = carouselInner.children[0].offsetWidth;
  carouselInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  buttonRight.onclick = () => {
    if (currentSlide < totalSlide) {
      currentSlide++;
    }
    if (currentSlide == totalSlide - 1) {
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

  }



