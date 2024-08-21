const input = '8\n1 abc\n3 3\n2 3\n1 xy\n3 2\n4\n4\n3 1'

// 8
// 1 abc
// 3 3
// 2 3
// 1 xy
// 3 2
// 4
// 4
// 3 1

function processData(input)
{
  //Enter your code here
  let s = '';
  let history = [];

  const arrayOfInput = input.split('\n');
  arrayOfInput.shift();

  for (let i = 0; i < arrayOfInput.length; i++) {
      const operation = arrayOfInput[i].split(' ');
      const type = parseInt(operation[0]);

      if (type === 1) {
          const appendText = operation[1];
          s += appendText;
          history.push({type: 1, text: appendText});
      } else if (type === 2) {
          const count = parseInt(operation[1]);
          const deleteText = s.slice(-count);
          s = s.slice(0, -count);
          history.push({type: 2, text: deleteText});
      }   else if (type === 3) {
          const index = parseInt(operation[1]) - 1;
          console.log(s[index]);
      } else if (type === 4) {
          if (history.length > 0) {
              const lastOperation = history.pop();
              if (lastOperation.type === 1) {
                  s = s.slice(0, -lastOperation.text.length);
              } else if (lastOperation.type === 2) {
                  s += lastOperation.text;
              }
          }
      }
  }
}

processData(input);
