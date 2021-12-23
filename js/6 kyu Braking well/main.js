function dist(v, mu) {
  const g = 9.81;
  v = (v * 1000) / 3600;
  var d = (v * v) / (mu * g * 2) + v * 1;
  return d;
}

function speed(d, mu) {
  // d is in meters;
  const g = 9.81;
  var v = (-2 * mu * g + Math.sqrt((2 * mu * g) ** 2 + 8 * d * mu * g)) / 2;
  // convert v in km/h
  return (v * 18) / 5;
}

console.log(dist(144, 0.3));
console.log(speed(159, 0.8));
console.log(dist(100, 0.7));
console.log(speed(83.9598760937531, 0.7)); // -> 100
