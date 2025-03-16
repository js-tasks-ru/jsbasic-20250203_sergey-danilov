import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  elem = null;
  product = {};
  #name = '';
  #price = 0;
  #category = '';
  #image = ''
  #id = '';
  

  constructor(product) {
    this.#name = product.name || this.#name;
    this.#price = product.price || this.#price;
    this.#category = product.category || this.#category;
    this.#image = product.image || this.#image;
    this.#id = product.id || this.#id;

    this.elem = this.#render();
    this.#mouseClick();
  }

#template() {
    return `
      <div class="card">
    <div class="card__top"> 
        <img src="/assets/images/products/${this.#image}" class="card__image" alt="product">
        <span class="card__price">€${this.#price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.#name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>
`;}

#mouseClick() {
  const addButton = this.elem.querySelector('.card__button');

  addButton.addEventListener('click', () => {
    this.elem.dispatchEvent(
      new CustomEvent("product-add", { 
        detail: this.#id, 
        bubbles: true 
      })
    );
  });

} 
   
#render() {
  this.elem = createElement(this.#template());
  return this.elem;
}
}

