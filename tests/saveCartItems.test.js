const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('saveCartItems should call localStorage.setItem', () => {
    saveCartItems()
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  })

  it('saveCartItems should call localStorage.setItem with 2 parameters', () => {
    const myCart = []
    const itemObj = {id: 'MLB1607748387', title: "Pc Computador Cpu Intel Core I5 + Ssd 240gb, 8gb Memória Ram", thumbnail: "http://http2.mlstatic.com/D_816481-MLB50613803762_072022-I.jpg"}
    saveCartItems(myCart, itemObj)
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify(myCart))
  })
});
