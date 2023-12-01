// 3-currency.js

export default class Currency {
  constructor(code, name) {
    this._code = this.validateString(code, 'Code');
    this._name = this.validateString(name, 'Name');
  }

  // Getter and setter for the code attribute
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = this.validateString(newCode, 'Code');
  }

  // Getter and setter for the name attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName, 'Name');
  }

  // Method to display the full currency format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Validation function for strings
  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }
}
