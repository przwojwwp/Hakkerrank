const matrix = [
  [2499, 4090, 1951, 1693, 3751, 4096, 4034, 2024, 3831, 1992],
  [587, 1513, 1843, 3359, 3655, 3125, 875, 2288, 1284, 3642],
  [2649, 2171, 4027, 3480, 3768, 2749, 2185, 1699, 3569, 2656],
  [3541, 2735, 3469, 3555, 2749, 1211, 3168, 2947, 2698, 3317],
  [3322, 2225, 2725, 1495, 2534, 3542, 1923, 2814, 3143, 4086],
  [2960, 514, 748, 2935, 1438, 3782, 2505, 1819, 1986, 2259],
  [2888, 2497, 3970, 1504, 3093, 3180, 3906, 3821, 1619, 4082],
  [3749, 1927, 1806, 2060, 2555, 3088, 1960, 570, 3091, 6],
  [3859, 2917, 4038, 1271, 4093, 2948, 3171, 2629, 1925, 1634],
  [1953, 1673, 4088, 2671, 3633, 3782, 1806, 4090, 1371, 3556]
];

function flippingMatrix(matrix)
{
  // Write your code here
  let result = 0;

  for (let i = 0; i < matrix.length; i++)
  {
    for (let j = 0; j < matrix.length / 2; j++)
    {
      if (matrix[i][j] < matrix[i][matrix.length - 1 - j])
      {
        [matrix[i][j], matrix[i][matrix.length - 1 - j]] = [matrix[i][matrix.length - 1 - j], matrix[i][j]];
      }
    }
  }

  for (let i = 0; i < matrix.length / 2; i++)
  {
    for (let j = 0; j < matrix.length; j++)
    {
      if (matrix[i][j] < matrix[matrix.length - 1 - i][j])
      {
        [matrix[i][j], matrix[matrix.length - 1 - i][j]] = [matrix[matrix.length - 1 - i][j], matrix[i][j]];
      }
    }
  }

  for (let i = 0; i < matrix.length / 2; i++)
  {
    for (let j = 0; j < matrix.length / 2; j++)
    {
      result += matrix[i][j];
    }
  }
  console.log(result);
  return result;
}

const result = flippingMatrix(matrix);
