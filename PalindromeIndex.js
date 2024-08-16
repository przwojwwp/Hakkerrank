const s = 'aaab';
// const s = 'baa';
// const s = 'aaa';

function isPalindrome(s)
{
  for (let i = 0; i < s.length / 2; i++)
  {
    if (s[i] !== s[s.length - 1 - i])
    {
      return false;
    }
  }

  return true;
}


function palindromeIndex(s)
{
  for (let i = 0; i < s.length; i++)
  {
    if (s[i] !== s[s.length - 1 - i])
    {
      if (isPalindrome(s.slice(i + 1, s.length - i)))
      {
        return i;
      }
      if (isPalindrome(s.slice(i, s.length - 1 - i)))
      {
        return s.length - 1 - i;
      }
    }
  }
  return -1;
}

console.log(palindromeIndex(s));
