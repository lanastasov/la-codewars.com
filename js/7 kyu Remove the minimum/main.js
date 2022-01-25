function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  array = numbers.slice();
  array.splice(array.indexOf(Math.min(...array)), 1);
  return array;
}
