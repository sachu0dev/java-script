let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateMovestElement();
updateScoreElement();
updateResultElement();
function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`; 
}

function resetScore(){
score.wins = 0;
score.losses = 0;
score.ties = 0;
localStorage.removeItem('score');
}
function game(userMove){
let randomNumber = Math.random();
let computerMove = '';
let result = '';

if (randomNumber >= 0 && randomNumber < 1/3){
  computerMove = 'Rock';
} else if(randomNumber >= 1/3 && randomNumber < 2/3){
  computerMove = 'Paper';
} else{
  computerMove = 'Scissors';
}

if(computerMove === userMove){
  score.ties += 1;
  result = 'Tie.'
} else if((userMove === 'Rock' && computerMove === 'Scissors') || (userMove === 'Paper' && computerMove === 'Rock') || (userMove === 'Scissors' && computerMove === 'Paper')){
  score.wins += 1;
  result = 'You win.'
} else{
  score.losses += 1;
  result = 'You lose.'
}
localStorage.setItem('score', JSON.stringify(score));
document.querySelector('.js-score')
updateMovesElement();
updateScoreElement();
updateResultElement();
function updateResultElement(){
document.querySelector('.js-result').innerHTML = result;
}

function updateMovesElement(){
document.querySelector('.js-moves')
  .innerHTML = `      You
<img src="${userMove}-emoji.png" class="emojis">
<img src="${computerMove}-emoji.png" class="emojis">
computer`;
}
}