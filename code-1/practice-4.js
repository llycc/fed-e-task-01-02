const fp = require('lodash/fp');

const cars = [
  {name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true},
  {name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false},
  {name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false},
  {name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false},
  {name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true},
  {name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false},
];

/**
 * 使用flowRight 写一个sanitizeNames()函数，转换数组中的name，例如：
 * sanitizeNames(["Hello World"]) => ["hello_world"]
 * */

const _underscore = fp.replace(/\W+/g, '_');
const sanitizeNames = fp.map(car => fp.flowRight(fp.toLower, _underscore)(car.name));
console.log(sanitizeNames(cars));
