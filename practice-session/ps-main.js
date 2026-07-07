let score = 0;
const firefly = document.querySelector('#firefly');
const scoreText = document.querySelector('#score');
const gameOver = document.querySelector('#game-over');
const highestScores = document.querySelector('#highest-scores');

console.log(firefly);

function scoring() {
    score = score + 1;
    scoreText.textContent = score;
}

firefly.addEventListener('click', scoring);

const fireflyImages = ['firefly-1.png', 'firefly-2.png', 'firefly-3.png'];

function flyFirefly() {
    let randomNumTop = Math.random() * 600;
    let randomNumLeft = Math.random() * 1200;
    let randomPicNum = Math.floor(Math.random() * 3);
    firefly.src = fireflyImages[randomPicNum];
    let newPosition = `top: ${randomNumTop}px; left: ${randomNumLeft}px`;
    firefly.style.cssText = newPosition;
}

let interval = setInterval(flyFirefly, 1000);

function end() {
    clearInterval(interval);
    firefly.removeEventListener('click', scoring);
    //Practice Session Ex 1
 
    gameOver.style.display = "block";
    
}

setTimeout(end, 60000);

/*============== Lesson 05 Practice Session Exercise 2 ==============*/

