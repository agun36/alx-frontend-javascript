// 7-airport.js

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for the name attribute
  get name() {
    return this._name;
  }

  // Getter for the code attribute
  get code() {
    return this._code;
  }

  // Override the default toString method
  toString() {
    return `[${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}
