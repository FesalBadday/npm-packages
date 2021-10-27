const colors = require('colors');

const args = process.argv.slice(2);

const userInput = args[0];
const color = args[1];

if (!userInput) {

  console.log('Please type something'.red); // outputs blue text

} else if (!color) {
  console.log('Please choose color'.red); // outputs blue text
} else {

  if (color === 'red') {

    console.log(userInput.red); // outputs red text

  } else if (color === 'green') {

    console.log(userInput.green); // outputs green text

  } else {

    console.log(userInput.blue); // outputs blue text

  }
}