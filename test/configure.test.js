import assert from 'assert';
import each from 'lodash.foreach';
import after from 'lodash.after';
import {initRecurly} from './support/helpers';
import {fixture} from './support/fixtures';
import {Recurly} from '../lib/recurly';

describe('Recurly.configure', function () {
  beforeEach(function () {
    if (this.currentTest.ctx.fixture) fixture(this.currentTest.ctx.fixture);
    this.recurly = new Recurly;
  });

  describe('when options.publicKey is not given', function () {
    const examples = [
        {}
      , { invalid: 'parameter' }
      , { currency: 'USD' }
      , { currency: 'AUD', api: 'https://localhost' }
      , { currency: 'USD', api: 'https://localhost', required: ['postal_code'] }
    ];

    it('throws', function () {
      examples.forEach(opts => {
        assert.throws(this.recurly.configure.bind(this.recurly, opts));
      });
    });

    it('Recurly.configured remains false', function () {
      examples.forEach(opts => {
        try {
          this.recurly.configure(opts);
        } catch (e) {
          assert(this.recurly.configured === false);
        }
      });
    });
  });

  describe('when options.publicKey is given', function () {
    const examples = [
        { publicKey: 'foo' }
      , { publicKey: 'foo', currency: 'USD' }
      , { publicKey: 'foo', currency: 'AUD', api: 'https://localhost' }
      , { publicKey: 'foo', currency: 'AUD', api: 'https://localhost', cors: true }
      , { publicKey: 'foo', currency: 'USD', api: 'https://localhost', required: ['country'] }
      , { publicKey: 'foo', currency: 'USD', api: 'https://localhost', required: ['postal_code', 'country'] }
    ];

    it('sets Recurly.config to the options given', function () {
      examples.forEach((opts) => {
        this.recurly.configure(opts);
        each(opts, (val, opt) => assert(this.recurly.config[opt] === val));
      });
    });

    it('sets default values for options not given', function () {
      examples.forEach(opts => {
        this.recurly.configure(opts);
        each(this.recurly.config, (val, opt) => {
          if (opts[opt]) {
            assert(opts[opt] === val);
          } else {
            assert(val !== undefined);
            assert(val !== opts[opt]);
          }
        });
      });
    });

    describe('when options.api is given', function () {
      it('sets Recurly.config.api to the given api', function () {
        this.recurly.configure({ publicKey: 'foo', api: 'http://localhost' });
        assert(this.recurly.config.api === 'http://localhost');
      });
    });

    describe('when options.cors is given', function () {
      it('sets Recurly.config.cors to the given value', function () {
        this.recurly.configure({ publicKey: 'foo', cors: true });
        assert(this.recurly.config.cors === true);
      });
    });

    describe('as a string parameter', function () {
      it('sets the publicKey', function () {
        this.recurly.configure('bar');
        assert(this.recurly.config.publicKey === 'bar');
      });
    });
  });

  describe('when falsey options are given', function () {
    var examples = [0, '', null, false, undefined];

    it('sets default values instead', function () {
      examples.forEach(function (falsey) {
        this.recurly.configure({
          publicKey: 'foo',
          currency: falsey,
          api: falsey,
          timeout: falsey,
          cors: falsey
        });

        assert(this.recurly.config.currency === 'USD');
        assert(this.recurly.config.timeout === 60000);
        assert(this.recurly.config.api === 'https://api.recurly.com/js/v1');
      });
    });
  });

  describe('when reconfiguring', function () {
    this.ctx.fixture = 'multipleForms';

    it('resets and reinstantiates', function (done) {
      configureRecurly(this.recurly, 1, () => {
        assert(document.querySelector('#number-1 iframe') instanceof HTMLIFrameElement);
        assert(document.querySelector('#number-2 iframe') === null);
        configureRecurly(this.recurly, 2, () => {
          // console.log(global.document.querySelector('#dom-testbed'));
          assert(document.querySelector('#number-1 iframe') === null);
          assert(document.querySelector('#number-2 iframe') instanceof HTMLIFrameElement);
          done();
        });
      });
    });

    function configureRecurly (recurly, index, done) {
      initRecurly(recurly, {
        fields: {
          number: `#number-${index}`,
          month: `#month-${index}`,
          year: `#year-${index}`,
          cvv: `#cvv-${index}`
        }
      });
      console.log(recurly.config.fields);
      assert(recurly.configured === true);
      recurly.ready(done);
    }
  });
});
