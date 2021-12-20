function present(x, y) {
  if (x == "goodpresent") {
    return String.fromCharCode(
      ...x.split``.map((element) => element.charCodeAt(0) + y)
    );
  }
  if (x == "crap") {
    return "acpr";
  }
  if (x == "empty") {
    return "empty";
  }
  if (x == "bang") {
    return x.split``
      .map((element) => element.charCodeAt(0) - y)
      .reduce((a, b) => a + b);
  }
  if (x == "badpresent") {
    return "Take this back!";
  }
  if (x == "dog") {
    return `pass out from excitement ${y} times`;
  }
  return 0;
}

console.log(present("goodpresent", 9));
console.log(present("crap", 10));
console.log(present("bang", 1));
