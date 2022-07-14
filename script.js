const itemsSection = document.getElementsByClassName('items');
const cart = document.querySelector('.cart__items');
const myCart = getSavedCartItems();
const totalButton = document.querySelector('.total-price');
const emptyCart = document.querySelector('.empty-cart');
console.log(myCart);
//
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const calculateTotalPrice = () => {
  const total = myCart.reduce((acc, elem) => acc + elem.price, 0);
  totalButton.innerHTML = `${total}`;
};

const emptyCartFunc = () => {
  myCart.splice(0, myCart.length);
  cart.innerHTML = '';
  saveCartItems(myCart);
  calculateTotalPrice();
  console.log(myCart);
};

emptyCart.addEventListener('click', emptyCartFunc);

const createLoadingElement = () => {
  const loading = document.createElement('div');
  loading.innerHTML = 'carregando...';
  loading.classList.add('loading');
  cart.appendChild(loading);
};

const createLoadingElementOnItemsSection = () => {
  const loading = document.createElement('div');
  loading.innerHTML = 'carregando...';
  loading.classList.add('loading');
  itemsSection[0].appendChild(loading);
};

const killLoadingElement = () => {
  const loading = document.querySelector('.loading');
  loading.remove();
};

const cartItemClickListener = (event) => {
  const index = Array.from(cart.children).indexOf(event.target);
  myCart.splice(index, 1);
  event.target.remove();
  saveCartItems(myCart);
  console.log(myCart);
  calculateTotalPrice();
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addToCart = async (event) => {
  createLoadingElement();
  const itemObj = await fetchItem(event.target.id);
  const cartItem = createCartItemElement(itemObj);
  cart.appendChild(cartItem);
  saveCartItems(myCart, itemObj);
  console.log(myCart);
  calculateTotalPrice();
  killLoadingElement();
};

const createCustomElement = (element, className, innerText, id) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (element === 'button') {
    e.addEventListener('click', addToCart);
    e.id = id;
  }
  return e;
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!', id));

  return section;
};

window.onload = async () => {
  createLoadingElementOnItemsSection();
  const { results } = await fetchProducts('computador');
  results.forEach((element) => {
    const newItem = createProductItemElement(element);
    itemsSection[0].appendChild(newItem);
  });
  myCart.forEach((element) => {
    cart.appendChild(createCartItemElement(element));  
  });
  calculateTotalPrice();
  killLoadingElement();
};
