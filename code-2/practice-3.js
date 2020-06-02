/**
 *实现一个函数ex3，使用safeProp和fp.first找到user的名字和首字母
 * */

const fp = require('lodash/fp');
const { Maybe, Container} = require('./support');

let safeProp = fp.curry(function(x, o) {
  return Maybe.of(o[x])
});
let user = {id: 2, name: 'Albert'};
const ex3 = (data) => safeProp('name', data).map(fp.first);;

console.log(ex3(user));
