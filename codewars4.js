function filter_list(l) {
  return l.filter((x) => typeof x === "number");
  return l;
}

console.log(filter_list([1, 2, "a", "b"]));
