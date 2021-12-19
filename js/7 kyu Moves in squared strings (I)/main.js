function vertMirror(strng) {
  strng = strng.split("\n");
  result = "";
  for (var i = 0; i < strng.length; i++) {
    result += strng[i].split("").reverse().join("");
    if (i != strng.length - 1) {
      result += "\n";
    }
  }
  return result;
}
function horMirror(strng) {
  return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
  return fct(s);
}
