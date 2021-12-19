function printerError(s) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] > "m") count += 1;
  }
  return count + "/" + s.length;
}
