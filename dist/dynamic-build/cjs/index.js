'use strict';

var version = "1.0.0";

function index () {
  Promise.resolve().then(function () { return require('./foo-56b1cac8.js'); }).then((res) => {
    console.log(res);
  });
  console.log(version);
}

module.exports = index;
