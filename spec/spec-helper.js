// JSDOM stuff fixes error:
// Error: It looks like you called `mount()` without a global document being loaded.

require('babel-register')();
var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];

import app from 'ampersand-app';
import chai from 'chai';
// import chaiEnzyme from 'chai-enzyme'
import sinon from 'sinon';
// import sinonChai from 'sinon-chai'
import _ from 'lodash';
import xhr from 'xhr';

require('es6-promise').polyfill();

// const sinon = window.sinon;

// jsdom config
global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

// chai config
// chai.use(chaiEnzyme());
// chai.use(sinonChai);

global.chai = chai;
global.expect = chai.expect;
global._ = global._ || _;

// sinon config
var fakeServer = _.assign({}, sinon.fakeServer, {
  create: function() {
    xhr.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
    return sinon.fakeServer.create.call(fakeServer);
  }
});

var useFakeXMLHttpRequest = sinon.useFakeXMLHttpRequest.bind(sinon);

global.sinon = {
  stub: function() {
    throw new Error('call this.sinon.stub instead');
  },

  spy: function() {
    throw new Error('call this.sinon.spy instead');
  },

  useFakeXMLHttpRequest, fakeServer
};

beforeEach(function() {
  this.sinon = sinon.sandbox.create();
});

afterEach(function() {
  this.sinon.restore();
});

global.def = function(name, func) {
  beforeEach(function() {
    this[name] = func.call(this, this);
  });
};

var context = require.context('../spec', true, /.+[_.-]spec\.jsx?$/);

context.keys().forEach(context);
module.exports = context;
