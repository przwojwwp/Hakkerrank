const q = [2, 1, 5, 3, 4];

function minimumBribes(q)
{
  // Write your code here
  let bribesSum = 0;

  for (let i = 0; i < q.length; i++)
  {
    if (q[i] - [i + 1] > 2)
    {
      console.log('Too chaotic');
      return;
    }

    for (let j = Math.max(0, q[i] - 2); j < i; j++)
    {
      if (q[j] > q[i])
      {
        bribesSum++;
      }
    }
  }
  console.log(bribesSum);
}

minimumBribes(q);
