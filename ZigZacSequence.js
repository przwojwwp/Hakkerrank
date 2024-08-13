const input = '1 2 3 4 5 6 7';

function processData(input)
{
  //Enter your code here
  const extractedIntegers = input.slice();

  const stringIntoArray = extractedIntegers.split(' ');
  const n = stringIntoArray.length;
  const middleOfArray = Math.floor(n / 2);
  const secondPartArray = stringIntoArray.slice(middleOfArray);
  const reversedSecondPartArray = secondPartArray.reverse();
  const firstPartOfArray = stringIntoArray.slice(0, middleOfArray);
  const zigZagArray = firstPartOfArray.concat(reversedSecondPartArray);

  const result = zigZagArray.join(' ');

  console.log(result);
}

processData(input);
