
/**
 *  实现一个函数ex2，能够使用fp.first获取列表的第一个元素
 * */
const fp = require('lodash/fp');
const { Maybe, Container} = require('./support');

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
let ex2 = (functor) => functor.map(fp.first);

console.log(ex2(xs));
