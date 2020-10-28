const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people', () => {
  // assertion is really important with async tests so it matches our tests
  // also we need to return the async code OR use the done parameter and call done() after our expects to ensure our async code is done
  expect.assertions(1)
  return swapi.getPoeple(fetch).then(data => {
    expect(data.count).toEqual(82);
  })
})

it('calls swapi to get people with a promise', () => {
  expect.assertions(2)
  return swapi.getPoeple(fetch).then(data => {
    expect(data.count).toEqual(82)
    expect(data.results.length).toBeGreaterThan(5)
  })
})


// MOCK: Simulate the behaviour of a function which is really helpfull for async tests so we dont need to wait for async tasks to finish
// which saves us time and capacity
it('getPeople return count and results', () => {
  const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      count: 82,
      results: [0,1,2,3,4,5]
    })
  }))

  expect.assertions(4);
  return swapi.getPoeplePromise(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people/');
    expect(data.count).toEqual(82)
    expect(data.results.length).toBeGreaterThan(5)
  })
})