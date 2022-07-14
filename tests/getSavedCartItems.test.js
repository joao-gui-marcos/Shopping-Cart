const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('getItem');


describe('4 - Teste a função getSavedCartItems', () => {
  it('getSavedCartItems should call localStorage.getItem', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledTimes(1)
  })

  it('getSavedCartItems should call localStorage.getItem with cartItems as parameter', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  })
});
