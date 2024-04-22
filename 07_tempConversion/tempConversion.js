const convertToCelsius = function(num) {
  let temp = (num - 32) * (5/9);
  let rounded = Math.round(temp * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(num) {
  let temp = ((num * 9) / 5 + 32);
  let rounded = Math.round(temp * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
