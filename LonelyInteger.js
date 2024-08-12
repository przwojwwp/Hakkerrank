function lonelyinteger(a) {
  // Write your code here
  const counter = {};
  
  for (const integer of a) {
      console.log(integer);
      if (!counter[integer]) {
          counter[integer] = 1
      } else {
          counter[integer] += 1;
      }
  }
  
  for (const key in counter) {
      if (counter[key] === 1) return parseInt(key);
  }
}
