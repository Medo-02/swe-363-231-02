const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const responseData = {
    'hello': 'Hi there! I am your chatbot',
    'how are you': 'I\'m fine as long as you fine!',
    'who are you': 'I\'m your own chatbot.',
    'what is this course': 'It is SWE-363',
    'which exercise is this': 'It is exercise 3',
    'meow': 'meow meow',
  };

  console.log('Chatbot: Hello! (to quit write "exit")');

  rl.on('line', (input) => {
    input = input.toLowerCase();
  
    if (responseData[input]) {
      console.log('Chatbot: ' + responseData[input]);
    } else if (input === 'exit') {
      console.log('Chatbot: bye bye <:');
      rl.close();
    } else {
      console.log("Chatbot: Sorry i am not that smart to answer that...");
    }
  });