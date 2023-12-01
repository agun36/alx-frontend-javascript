// 6-sky_high.js

import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the constructor of the parent class
    this._floors = this.validateNumber(floors, 'Floors');
  }

  // Getter for the floors attribute
  get floors() {
    return this._floors;
  }

  // Override the method in the parent class
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
