import {
  assert
} from 'chai';
import {
  Animal,
  Mammal,
  Bird
} from '../src/app';


describe('Test superclass methods', () => {
  const animal = new Animal('Dinosaur', 4, 5);

  it('test identify method', () => {
    assert.equal(animal.identify(), 'Dinosaur');
  });

  it('test speak method', () => {
    assert.equal(animal.speak(), 'A sound 4 times');
  });
});