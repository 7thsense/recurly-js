import {testBed} from './helpers';

const minimal = opts => `
  <form action="#" id="test-form">
    <div data-recurly="number"></div>
    <div data-recurly="month"></div>
    <div data-recurly="year"></div>
    <div data-recurly="cvv"></div>
    <input type="text" data-recurly="first_name" value="${opts.first_name || ''}">
    <input type="text" data-recurly="last_name" value="${opts.last_name || ''}">
    <input type="hidden" data-recurly="token" name="recurly-token">
  </form>
`;

const all = opts => `
  <form action="#" id="test-form">
    <div data-recurly="number"></div>
    <div data-recurly="month"></div>
    <div data-recurly="year"></div>
    <div data-recurly="cvv"></div>
    <input type="text" data-recurly="first_name" value="${fetch(opts, 'first_name', '')}">
    <input type="text" data-recurly="last_name" value="${fetch(opts, 'last_name', '')}">
    <input type="text" data-recurly="address1" value="${fetch(opts, 'address1', '')}">
    <input type="text" data-recurly="address2" value="${fetch(opts, 'address2', '')}">
    <input type="text" data-recurly="city" value="${fetch(opts, 'city', '')}">
    <input type="text" data-recurly="state" value="${fetch(opts, 'state', '')}">
    <input type="text" data-recurly="postal_code" value="${fetch(opts, 'postal_code', '')}">
    <input type="text" data-recurly="phone" value="${fetch(opts, 'phone', '')}">
    <input type="text" data-recurly="vat_number" value="${fetch(opts, 'vat_number', '')}">
    <input type="text" data-recurly="country" value="${fetch(opts, 'country', '')}">
    <input type="hidden" name="recurly-token" data-recurly="token">
  </form>
`;

const bank = opts => `
  <form action="#" id="test-form">
    <input type="text" data-recurly="name_on_account" value="${fetch(opts, 'name_on_account', '')}">
    <input type="text" data-recurly="routing_number" value="${fetch(opts, 'routing_number', '')}">
    <input type="text" data-recurly="account_number" value="${fetch(opts, 'account_number', '')}">
    <input type="text" data-recurly="account_number_confirmation" value="${fetch(opts, 'account_number_confirmation', '')}">
    <input type="text" data-recurly="account_type" value="${fetch(opts, 'account_type', '')}">
    <input type="text" data-recurly="address1" value="${fetch(opts, 'address1', '')}">
    <input type="text" data-recurly="address2" value="${fetch(opts, 'address2', '')}">
    <input type="text" data-recurly="city" value="${fetch(opts, 'city', '')}">
    <input type="text" data-recurly="state" value="${fetch(opts, 'state', '')}">
    <input type="text" data-recurly="postal_code" value="${fetch(opts, 'postal_code', '')}">
    <input type="text" data-recurly="country" value="${fetch(opts, 'country', '')}">
    <input type="text" data-recurly="phone" value="${fetch(opts, 'phone', '')}">
    <input type="text" data-recurly="vat_number" value="${fetch(opts, 'vat_number', '')}">
    <input type="hidden" name="recurly-token" data-recurly="token">
    <button>submit</button>
  </form>
`;

const pricing = opts => `
  <div id="test-pricing">
    <input type="text" data-recurly="plan" value="${fetch(opts, 'plan', '')}">
    <input type="text" data-recurly="plan_quantity" value="${fetch(opts, 'plan_quantity', '')}">
    <input type="text" data-recurly="coupon" value="${fetch(opts, 'coupon', '')}">
    <input type="text" data-recurly="gift_card" value="${fetch(opts, 'giftcard', '')}">
    ${opts.addon ? `<input type="text" data-recurly="addon" data-recurly-addon="${fetch(opts.addon, 'code')}" value="${fetch(opts.addon, 'quantity')}">` : ''}
    <input type="text" data-recurly="currency" value="${fetch(opts, 'currency', 'USD')}">
    <input type="text" data-recurly="country" value="${fetch(opts, 'country', 'US')}">
    <input type="text" data-recurly="postal_code" value="${fetch(opts, 'postal_code', '')}">
    <input type="text" data-recurly="tax_code" value="${fetch(opts, 'tax_code', '')}">
    <input type="text" data-recurly="vat_number" value="${fetch(opts, 'vat_number', '')}">

    <span data-recurly="total_now"></span>
    <span data-recurly="subtotal_now"></span>
    <span data-recurly="addons_now"></span>
    <span data-recurly="discount_now"></span>
    <span data-recurly="setup_fee_now"></span>
    <span data-recurly="tax_now"></span>

    <span data-recurly="total_next"></span>
    <span data-recurly="subtotal_next"></span>
    <span data-recurly="addons_next"></span>
    <span data-recurly="discount_next"></span>
    <span data-recurly="setup_fee_next"></span>
    <span data-recurly="tax_next"></span>

    <span data-recurly="currency_code"></span>
    <span data-recurly="currency_symbol"></span>
  </div>
`;

const FIXTURES = {minimal, all, bank, pricing};

export function applyFixtures () {
  beforeEach(function () {
    const ctx = this.currentTest.ctx;
    if (ctx.fixture) fixture(ctx.fixture, ctx.fixtureOpts);
  });

  afterEach(function () {
    if (this.currentTest.ctx.fixture) fixture();
  });
}

export function fixture (name, opts = {}) {
  const tpl = FIXTURES[name] || (() => {});
  testBed().innerHTML = tpl(opts);
}

/**
 * fetches a value on an object or returns an alternative
 * @param  {Object} object
 * @param  {String} prop
 * @param  {[Mixed]} def default value
 * @return {Mixed} value of property on object or default if none found
 */
function fetch (object, prop, def = '') {
  return object.hasOwnProperty(prop) ? object[prop] : def;
}
