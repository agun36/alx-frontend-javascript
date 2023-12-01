import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateNumber(amount, 'Amount');
    this._currency = this.validateCurrency(currency, 'Currency');
  }

  /*Getter and setter for the amount attribute*/
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this.validateNumber(newAmount, 'Amount');
  }

  /*Getter and setter for the currency attribute*/
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = this.validateCurrency(newCurrency, 'Currency');
  }

  /* Method to display the full price format*/
  displayFullPrice() {
    const { name, code } = this._currency;
    return `${this._amount} ${name} (${code})`;
  }

  /*Static method to convert the price based on conversion rate*/
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  /* Validation function for numbers*/
  validateNumber(value, attribute) {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || typeof parsedValue !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return parsedValue;
  }

  /*Validation function for Currency objects*/
  validateCurrency(value, attribute) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attribute} must be an instance of Currency`);
    }
    return value;
  }
}
