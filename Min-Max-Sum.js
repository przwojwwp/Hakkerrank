function miniMaxSum(arr) {
  // Write your code here
  const sortedArr = arr.sort((a, b) => a - b);
  
  const forMin = sortedArr.slice(0, -1);
  const forMax = sortedArr.slice(1);
  
  const minValue = forMin.reduce((accumulator, currentValue) => accumulator + currentValue,
  0,)
  
  const maxValue = forMax.reduce((accumulator, currentValue) => accumulator + currentValue,
  0,)

  console.log(minValue + ' ' + maxValue);
}
