function off(n) {
  var arr = new Array(n).fill(false);
  for (var i = 1; i < n; i++) {
    for (var j = i; j < n; j += i + 1) {
      arr[j] = !arr[j];
    }
  }
  return convert(arr);
}

function convert(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == false) {
      result.push(i + 1);
    }
  }
  return result;
}

// 1 1 1 1
// 0 0 0 0
// 0 1 0 1
// 0 1 1 1
// 0 1 1 0
