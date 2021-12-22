function dist(v, mu) {
  const g1 = 9.81;

  v = (v * 1000) / 3600;
  var d = (v * v) / (mu * g1 * 2) + v * 1;
  return d;
}

function speed(d, mu) {
  // suppose reaction time is 1
  // your code
  // d is in meters;
  const g1 = 9.81;
  var d = d;
  var v = (-2 * mu * g1 + Math.sqrt((mu * g1) ** 2 + 8 * d * mu)) / 2;
  return v;
}

// console.log(dist(144, 0.3));
// console.log(speed(159, 0.8));
console.log(dist(100, 0.7));
console.log(speed(83.9598760937531, 0.7)); // -> 100
