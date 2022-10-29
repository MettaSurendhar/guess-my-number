'use strict';

let secretNumb = Math.floor(Math.random() * 20 + 1);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highscore = 0;

// Check button

document.querySelector('.check').addEventListener('click', function () {
  let guess;
  guess = Number(document.querySelector('.guess').value);

  // when input is empty
  if (!guess) {
    displayMessage('no number !!!');
  }
  // when input matches
  else if (guess === secretNumb) {
    displayMessage('Correct Number ');
    document.querySelector('.number').textContent = secretNumb;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }
  // when input does not match
  else if (guess !== secretNumb) {
    if (score > 1) {
      displayMessage(guess > secretNumb ? 'too high :|' : 'too low :|');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game :(');

      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }

  // Again button

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    secretNumb = Math.floor(Math.random() * 20 + 1);
    displayMessage('start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
  });
});
