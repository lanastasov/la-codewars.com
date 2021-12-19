function cake(x, y) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var result = 0;
  for (var i = 0; i < y.length; i += 2) {
    result += y.charCodeAt(i);
  }
  for (var j = 1; j <= y.length; j += 2) {
    result += alphabet.indexOf(y[j]) + 1;
  }
  return result >= 0.7 * x ? "Fire!" : "That was close!";
}

console.log(cake(900, "abcdef"));
