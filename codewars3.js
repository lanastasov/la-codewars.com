function solution(a) {
  var min = a.length;
  for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] == a[j]) {
        if (j < min) min = j;
      }
    }
  }
  if (min < a.length) {
    return a[min];
  } else {
    return -1;
  }
}

console.log(solution([2, 1, 3, 5, 3, 2]));
