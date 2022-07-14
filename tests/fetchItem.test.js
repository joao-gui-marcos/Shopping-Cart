require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('fetchItem should be a function', () => {
    expect(typeof fetchItem).toBe('function')
  })

  it('fetchItem("MLB1615760527") should call fetch', async () => {
    expect.assertions(1)
    await fetchItem("MLB1615760527")
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('fetchItem("MLB1615760527") should call fetch with correct endpoint', async () => {
    expect.assertions(1)
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem("MLB1615760527")
    expect(fetch).toHaveBeenCalledWith(endpoint)
  })

  it('fetchItem("MLB1615760527") should return an object equal to item', async () => {
    expect.assertions(1)
    await expect(fetchItem("MLB1615760527")).resolves.toEqual(item)
  })

  it('fetchItem() should return an error with a message', async () => {
    expect.assertions(1)
    const error = 'You must provide an url'
    await expect(fetchItem()).rejects.toThrow(error)
  })
});
