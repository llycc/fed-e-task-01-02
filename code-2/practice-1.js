/**
 * 使用fp.add(x,y)和fp.map(f,x) 创建一个能让functor里的值增加的函数ex1
 * */

const fp = require('lodash/fp');
const { Maybe, Container} = require('./support');

let maybe = Maybe.of([5,6,1]);
const ex1 = (n) => maybe.map(fp.map(value => fp.add(value, n)));

console.log(ex1(1));
