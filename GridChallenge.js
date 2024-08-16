const grid = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv']

function gridChallenge(grid)
{
  // Write your code here
  const n = grid.length;
  const sortedGrid = grid.map(string => string.split('').sort().join(''));

  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n; j++) {
          if (sortedGrid[i][j] > sortedGrid[i + 1][j]) {
              return 'NO';
          }
      }
  }

  return 'YES';
}

gridChallenge(grid);
