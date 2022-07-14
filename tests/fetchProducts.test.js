require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

  it(`fetchProducts should be a function`, () => {
    expect.assertions(1)
    expect(typeof(fetchProducts)).toBe('function')
  })
  
  it('fetchProducts(computador) should call fetch', async () => {
    expect.assertions(1)
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('fetchProducts(computador) should call fetch with correct endpoint', async () => {
    expect.assertions(1)
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(endpoint)
  })

  it('fetchProducts(computador) should return an object equal to computadorSearch', async () => {
    expect.assertions(1)
    await expect(fetchProducts('computador')).resolves.toEqual(computadorSearch)
  })

  it('fetchProducts() should return an error with a message', async () => {
    expect.assertions(1)
    const error = 'You must provide an url'
    await expect(fetchProducts()).rejects.toThrow(error)
  })
  
});
