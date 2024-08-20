const input = '10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2';

// FIFO
// 10 - number of queries
// 1 42 - 1 x: Enqueue element x
// 2 - Dequeue the element at the front of the queue
// 1 14
// 3
// 1 28
// 3
// 1 60
// 1 78
// 2
// 2

function processData(input) {
  //Enter your code here
  const arrayOfInput = input.split('\n');
  arrayOfInput.shift();

  const result = [];

  for (let i = 0; i < arrayOfInput.length; i++) {
      const command = arrayOfInput[i];

      if (command.startsWith('1 ')) {
          result.push(command.slice(2));
      } else if (command == 2) {
          result.shift();
      } else if (command == 3) {
          console.log(result[0]);
      }
  }
}

processData(input);
