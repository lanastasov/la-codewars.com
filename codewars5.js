function solution(a, m, k) {
  var result = [];
  var counter = 0;
  for (var i = 0; i <= a.length - m; i++) {
    for (var j = i; j < i + m; j++) {
      result.push(a[j]);
    }
    console.log("result=", result);
    for (var m = 0; m < result.length; m++) {
      for (l = m + 1; l < result.length; l++) {
        if (result[m] + result[l] == k) {
          counter += 1;
          console.log("-->", result[m], result[l]);
        }
      }
    }
    result = [];
    console.log("\n");
  }
  return counter;
}

console.log(solution([2, 4, 7, 5, 3, 5, 8, 5, 1, 7], 4, 10));
// console.log(solution([15, 8, 8, 2, 6, 4, 1, 7], 2, 8));
