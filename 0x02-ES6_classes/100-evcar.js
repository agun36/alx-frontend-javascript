// 100-evcar.js

import Car from './10-car.js';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  get range() {
    return this[_range];
  }

  cloneCar() {
    const carClone = new Car();
    Object.getOwnPropertyNames(this).forEach((prop) => {
      carClone[prop] = undefined;
    });
    return carClone;
  }
}
