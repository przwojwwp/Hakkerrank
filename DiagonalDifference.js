function diagonalDifference(arr) {
  // Write your code here
  let leftToRightDiagonal = 0;
  let rightToLeftDiagonal = 0;
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
      leftToRightDiagonal += arr[i][i];
      rightToLeftDiagonal += arr[i][n - 1 - i]
  }
  
  return Math.abs(leftToRightDiagonal - rightToLeftDiagonal);
}
