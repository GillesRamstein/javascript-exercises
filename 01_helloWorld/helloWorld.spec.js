const helloWorld = require('./helloWorld');

describe('Hello World', () => {
  test('says "Hello, World!"', () => {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
