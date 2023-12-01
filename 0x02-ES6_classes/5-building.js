// 5-building.js

export default class Building {
  constructor(sqft) {
    this._sqft = this.validateNumber(sqft, 'Square Feet');
  }

  // Getter for the sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method to be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  // Validation function for numbers
  validateNumber(value, attribute) {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || typeof parsedValue !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return parsedValue;
  }
}
