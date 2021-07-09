'use strict';

let myNumber = Math.floor((Math.random() * 20) +1);
let score = 20;
let myHighscore = 0;

const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const messageScore = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

const verifyGuess = (number) => {
    if(number === myNumber){
        if(score > myHighscore) myHighscore = score;
            highscore.textContent = myHighscore;
        document.querySelector('.number').textContent = myNumber;
        message.textContent = 'Correct Number';
        document.body.style.backgroundColor = "#059862";
        document.querySelector('.number').style.width = '30rem';
    }else{
        if(number !== myNumber){
            if(score >= 1){
                attScore(--score);
                message.textContent = number > myNumber ? 'Too high' : 'Too low';
            }else{
                message.textContent = 'You lose this game';
            }
        }
    }    
}

const attScore = (score) => messageScore.textContent = score;


document.querySelector('.check').addEventListener
('click', function(){
    const number = Number(guess.value)
    if(number){
        if(number <= 0) message.textContent = 'Negative number!';
        else if(number > 20) message.textContent = 'Big number!';
        else verifyGuess(number);
    }else{
        message.textContent = 'No Number!';
    }
    console.log(myNumber);
});

document.querySelector('.again').addEventListener(
    'click', function(){
        score = 20;
        myNumber = Math.floor((Math.random() * 20))+1;
        document.querySelector('.number').textContent = '?';
        guess.value = '';
        messageScore.textContent = score;
        message.textContent = 'Start guessing...';
        document.body.style.backgroundColor = "#222";
        document.querySelector('.number').style.width = '15rem';
    }
)

