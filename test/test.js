import chai from 'chai'
import app from '../src/testapp';
let assert = chai.assert;

describe('app to test as', () => {
  let result = app();
  it('app should return hello', () => {

    assert.equal(result, 'hello')
  }); // we put app() becos we checking for app()----goto terminal type npm run test

  it('it should be a string', () => {
    assert.typeOf(result, 'string')
  });
});