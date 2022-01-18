var mp = [];
function sum(n) {
  mp[0] = n + 1;
  devNum(n, 1);
  return 0;
}
function print(length) {
  for (var i = 1; i < length; i++) {
    console.log(mp[i], "+", mp[length], "\n");
    // console.log(mp[length], "\n");
  }
}

function devNum(n, pos) {
  if (0 == n) {
    print(pos - 1);
  } else {
    for (var k = n; k >= 1; k--) {
      mp[pos] = k;
      if (mp[pos] <= mp[pos - 1]) {
        devNum(n - k, pos + 1);
      }
    }
  }
}
console.log(sum(4)); // ->42

// #include <stdio.h>
// #define MAXN 100

// const unsigned n = 7;
// unsigned mp[MAXN + 1];

// void print(unsigned length)
// { unsigned i;
//  for (i = 1; i < length; i++)
//  printf("%u+", mp[i]);
//  printf("%u\n", mp[length]);
// }

// void devNum(unsigned n, unsigned pos)
// {
//  if (0 == n)
//  print(pos-1);
//  else {
//  unsigned k;
//  for (k = n; k >= 1; k--) {
//  mp[pos] = k;
//  if (mp[pos] <= mp[pos-1])
//  devNum(n-k, pos+1);
//  }
//  }
// }
// int main() {
//  mp[0] = n+1;
//  devNum(n, 1);
//  return 0;

//\\\\\\\\\\\\/

var arr[];

//\\\\\\\\\\\\/
#include <stdio.h>
#define MAX 100
unsigned long M[MAX][MAX]; /* Целева функция */
const unsigned n = 10;
/* Намира броя на представянията на n като сума от естествени числа */
unsigned long getNum(unsigned n)
{ 
  unsigned i, j;
  for (i = 1; i <= n; i++)
    for (j = 1; j <= n; j++)
      if (1 == j)
        M[i][j] = 1;
      else if (1 == i)
        M[i][j] = 1;
      else if (i < j)
        M[i][j] = M[i][i];
      else if (i == j)
        M[i][j] = 1 + M[i][i - 1];
      else
        M[i][j] = M[i][j - 1] + M[i - j][j];
  return M[n][n];
}
int main()
{ printf("Броят представяния на %u като сума от естествени числа е: %lu",
 n, getNum(n));
 return 0;
