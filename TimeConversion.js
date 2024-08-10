function timeConversion(s) {
  // Write your code here
  let hours = +s.slice(0, 2);
  const minutesAndSeconds = s.slice(2, 8);
  const period = s.slice(8);
  
  if (period == 'AM' && hours === 12) {
      hours = 0;
  } else if (period == 'PM' && hours !== 12) {
      hours += 12;
  }
  
  return hours.toString().padStart(2, '0').concat(minutesAndSeconds);
}

// OR

function timeConversion(s) {
  // Write your code here
  if (s.includes('PM')) {
      const removedPM = s.slice(0, -2);
      const arrayFromString = removedPM.split('');
      
      if (arrayFromString[0] == 1 && arrayFromString[1] == 2) {
          return arrayFromString.join('');
      }
      arrayFromString[0] = +arrayFromString[0] + 1;
      arrayFromString[1] = +arrayFromString[1] + 2;
      return arrayFromString.join('');
  }
  
  if (s.includes('AM')) {
      const removedAM = s.slice(0, -2);
      const arrayFromString = removedAM.split('');
      
      if (arrayFromString[0] == 1 && arrayFromString[1] == 2) {
          arrayFromString[0] = 0;
          arrayFromString[1] = +arrayFromString[1] - 2;
      }
          return arrayFromString.join('');
  }
}