function plusMinus(arr)
{
  // Write your code here
  const n = arr.length;
  let positiveOccurances = 0;
  let negativeOccurances = 0
  let zeroOccurances = 0;

  for (const number of arr)
  {
    if (Math.sign(number) === 1)
    {
      positiveOccurances += 1;
    } else if (Math.sign(number) === -1)
    {
      negativeOccurances += 1;
    } else
    {
      zeroOccurances += 1;
    }
  }

  const positiveProportion = (positiveOccurances / n).toFixed(6);
  const negativeProportion = (negativeOccurances / n).toFixed(6);
  const zeroProportion = (zeroOccurances / n).toFixed(6);

  console.log(positiveProportion);
  console.log(negativeProportion);
  console.log(zeroProportion);
}
