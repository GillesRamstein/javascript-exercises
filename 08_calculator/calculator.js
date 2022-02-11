const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
  return a - b 
};

const sum = function(array) {
	return array.reduce((j, i) => i+j, 0)
};

const multiply = function(array) {
  return array.reduce((j, i) => i * j, 1)
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(a) {
  let result = a > 0 ? a : 1
  while (a > 1) {
    result *= --a
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
