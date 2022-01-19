function solution(arr) {
  var result = "";
  for (var j = 0; j <= 8; j++) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][j] != undefined) {
        result += arr[i][j];
      }
    }
  }
  return result;
}

arr = ["Daisy", "Rose", "Hyacinth", "Poppy"];
console.log(solution(arr));
