const n = '9875';
const k = 4;

function superDigit(n, k)
{
  // Write your code here
  let sumN = n.split('').reduce((acc, cV) => acc + parseInt(cV), 0);
  let totalSum = sumN * k;

  if (totalSum < 10)
  {
    return totalSum;
  } else
  {
    return superDigit(totalSum.toString(), 1);
  }
}

superDigit(n, k);
