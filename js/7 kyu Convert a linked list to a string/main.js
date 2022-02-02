function stringify(list) {
  if (list === null) return "null";
  result = "";
  while (list !== null) {
    result += list.data + " -> ";
    list = list.next;
  }
  return result + "null";
}
