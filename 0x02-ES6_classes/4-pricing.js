import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateNumber(amount, 'Amount');
    this._currency = this.validateCurrency(currency, 'Currency');
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this.validateNumber(newAmount, 'Amount');
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = this.validateCurrency(newCurrency, 'Currency');
  }

  displayFullPrice() {
    const { name, code } = this._currency;
    return `${this._amount} ${name} (${code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  validateNumber(value, attribute) {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || typeof parsedValue !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return parsedValue;
  }

  validateCurrency(value, attribute) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attribute} must be an instance of Currency`);
    }
    return value;
  }
}
