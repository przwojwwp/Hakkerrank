const k = 2;
const arr = [1, 5, 3, 4, 2]

function pairs(k, arr)
{
  // Write your code here
  let counter = 0;
  let elements = new Set(arr);

  for (let i = 0; i < arr.length; i++) {
      if (elements.has(arr[i] + k)) {
          counter++;
      }
  }

  return counter;
}

pairs(k, arr);
