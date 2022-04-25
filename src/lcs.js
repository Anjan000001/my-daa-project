

const lcs = ({ x, y }) => {

  let ans = [];
  let m = x.length
  let n = y.length;
  let dp = {}

  for (let i = 0; i <= m; i++) {
    dp[i] = [];
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {

      if (i == 0 || j == 0) {
        dp[i][j] = 0;
      }
      else if (x[i - 1] == y[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  let i = m, j = n;
  let str = ""
  while (i > 0 && j > 0) {

    if (x[i - 1] == y[j - 1]) {

      str += x[i - 1];
      i--;
      j--;

    }


    else if (dp[i - 1][j] > dp[i][j - 1])
      i--;
    else
      j--;
  }
  // console.log(str)
  str = str.split('').reverse().join('');
  return [dp[m][n], str];
}

console.log(lcs({ x: 'abcd', y: 'abcd' }));
export { lcs };
