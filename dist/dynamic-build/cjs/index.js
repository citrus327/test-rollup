'use strict';

var lodash = require('lodash');
var lodashEs = require('lodash-es');

var version = "1.0.0";

function index () {
  console.log(lodash.get);
  console.log(lodashEs.get);
  Promise.resolve().then(function () { return require('./foo-73cc9439.js'); }).then((res) => {
    console.log(res);
  });
  console.log(version);
}

module.exports = index;
