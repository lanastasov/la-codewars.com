function sum(num) {
  n = num + 1;
  var M = new Array(n);
  for (var i = 0; i < M.length; i++) {
    M[i] = new Array(n);
  }
  return getNum(num, M);
}

function getNum(n, M) {
  for (var i = 1; i <= n; i++)
    for (var j = 1; j <= n; j++)
      if (1 == j) M[i][j] = 1;
      else if (1 == i) M[i][j] = 1;
      else if (i < j) M[i][j] = M[i][i];
      else if (i == j) M[i][j] = 1 + M[i][i - 1];
      else M[i][j] = M[i][j - 1] + M[i - j][j];
  return M[n][n];
}
