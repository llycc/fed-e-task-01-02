/**
 * 使用maybe重写ex4，不要有if语句
 * */
const fp = require('lodash/fp');
const { Maybe, Container} = require('./support');

let ex4 = function(n) {
  if (n) {
    return parseInt(n);
  }
};

const newEx4 = function(n) {
  const maybe = Maybe.of(n);
  return maybe.map(parseInt);
};
