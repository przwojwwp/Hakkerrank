// Expected:
// "    1
//    2 3
//   1 2 3
//  1 2 3 1
// 2 3 1 2 3
//     |
// "

const expectedOutput = '    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n';

const ornaments = '123';
const height = 5;

function createChristmasTree(ornaments, height)
{
  let result = '';
  const treeLevelsArray = [];
  let currentOrnament = 0;

  for (let i = 1; i <= height; i++)
  {
    let treeLevel = '';
    for (let j = 0; j < i; j++)
    {
      treeLevel += ornaments[currentOrnament];
      currentOrnament += 1;
      if (currentOrnament > ornaments.length - 1)
      {
        currentOrnament = 0;
      }
    }
    treeLevelsArray.push(treeLevel);
    treeLevel = '';
  }

  for (let i = 0; i < treeLevelsArray.length; i++)
  {
    treeLevelsArray[i] = treeLevelsArray[i].split('').join(' ');
    result += treeLevelsArray[i].padStart(height + i, ' ') + '\n';
  }

  const trunk = '|'

  result += trunk.padStart(height, ' ') + '\n';

  return console.log(result === expectedOutput);
}

createChristmasTree(ornaments, height);
