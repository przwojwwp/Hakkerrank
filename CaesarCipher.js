const s = 'www.abc.xy';
const k = 87;
function caesarCipher(s, k)
{
  // Write your code here
  const result = [];

  const originalAlphabet = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
  const originalAlphabetArray = originalAlphabet.split('');

  const messageArray = s.split('');

  for (const letter of messageArray)
  {
    let letterIndex = originalAlphabetArray.indexOf(letter);
    if (letterIndex >= 0)
    {
      let newLetterIndex =
        letterIndex + 2 * k < originalAlphabetArray.length
          ? letterIndex + 2 * k
          : ((letterIndex + 2 * k) % originalAlphabetArray.length);

      result.push(originalAlphabetArray[newLetterIndex]);
    } else
    {
      result.push(letter);
    }

    console.log(result);
  }

  return result.join('');
}

caesarCipher(s, k);
