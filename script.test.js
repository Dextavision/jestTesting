const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'disney.com',
  'dognice.com',
  'dogareverynice.com'
];

describe('googleSearch', () => {
  it('this is a test', () => {
    expect('hello').toBe('hello');
  })
  
  it('searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dognice.com','dogareverynice.com']);
  })
  
  it('work with undefindes and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  })
  
  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  })
})
