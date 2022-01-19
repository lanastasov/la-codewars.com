function count(digit) {
  var arr = [];
  while (digit != 0) {
    arr[(digit % 10) - 1] += 1;
    digit = digit / 10;
  }
  return arr;
}

console.log(count(123));
