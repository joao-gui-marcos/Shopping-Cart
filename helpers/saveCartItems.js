const saveCartItems = (myCart, itemObj) => {
  if (itemObj != null) {
    myCart.push(itemObj);
  }
  localStorage.setItem('cartItems', JSON.stringify(myCart));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
