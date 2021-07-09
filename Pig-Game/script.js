'use strict';

const dices = [
  "",
  "12Rvx2hr-r-OC_nfi4qdoYgbHp7-RnZ5c",
  "1IFYgQX8eAooEfvDi7ZX1so8CrlegFLlB",
  "1P19p8m9R3IGv5XktyBVLWCWcQWNGB3Ta",
  "1OUHAqAEfwL7jUZe83ugFfHSmQZWBX5_m",
  "1wAm0UW874cr8v9jHZ_GHBGcsWVjJcGS6",
  "1NMnAZ1kPanL-Up0RGYON5c1_tmIB_fc0"
];

const playerActive = 'player-active';
const playerWinner = 'player-winner';

const player0 = document.querySelector('.player-0'); 
const player1 = document.querySelector('.player-1');
const score0 = document.getElementById('score-0'); 
const score1 = document.getElementById('score-1'); 
const scoreCurrent0 = document.getElementById('current-score-0'); 
const scoreCurrent1 = document.getElementById('current-score-1');

const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

const dice = document.querySelector('.dice');

let scores, currentScore, activePlayer, playing;

const init = () => {
  scores = [0,0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  
  score0.textContent = 0;
  score1.textContent = 0;
  scoreCurrent0.textContent = 0;
  scoreCurrent1.textContent = 0;
  
  dice.classList.add('hidden');
  
  player0.classList.add(playerActive);
  player1.classList.remove(playerActive);
  
  player0.classList.remove(playerWinner);
  player1.classList.remove(playerWinner);
};
init();

const switchPlayer = () =>{
  currentScore = 0;
  document.getElementById(`current-score-${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer ? 0 : 1;
 player0.classList.toggle(playerActive);
  player1.classList.toggle(playerActive);
};

btnRoll.addEventListener('click', function(){
  if(playing){
    const diceRandom = Math.floor(Math.random() * 6 + 1);
    dice.classList.remove('hidden');
    dice.src = `https://docs.google.com/uc?id=${dices[diceRandom]}`;

    if(diceRandom !== 1){
      currentScore += diceRandom;
      document.getElementById(`current-score-${activePlayer}`).textContent = currentScore;
    }else{
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', ()=>{
  if(playing){
    scores[activePlayer] += currentScore;
    score0.textContent = scores[0];
    score1.textContent = scores[1];
    if(scores[activePlayer] >= 20){
      document.querySelector(`.player-${activePlayer}`).classList.add(playerWinner);
    playing = false;
    }else{
         switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);