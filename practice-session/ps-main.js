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

    /*============== Practice Session Ex 1 ==============*/

    // 1. Get the score
    let finalScore = score;

    // 2. Create a timestamp
    let timeStamp = new Date().toLocaleString();

    // 3. Store the score using the timestamp as the key
    localStorage.setItem(timeStamp, finalScore);

    // 4. Show the score and timestamp
    gameOver.innerHTML = `
        <p>Game Over</p>
        <p>Score: ${finalScore}</p>
        <p>${timeStamp}</p>
        <p>Refresh to play again</p>
    `;

    gameOver.style.display = "block";

    // Update scoreboard
    showHighestScores();
}

setTimeout(end, 60000);

/*============== Lesson 05 Practice Session Exercise 2 ==============*/

function showHighestScores() {

    // 2. Get all the keys
    let keys = Object.keys(localStorage);

    // 3. Get the total keys
    let total = keys.length;

    // 4. Create empty array
    let highestThree = [];

    // 5. Check if there are scores
    if (total > 0) {

        // 6. Loop through keys
        for (let key of keys) {
            let score = parseInt(localStorage.getItem(key));
            highestThree.push(score);
        }

        // 7. Sort and keep top 3
        highestThree.sort((a, b) => b - a);
        highestThree = highestThree.slice(0, 3);

        // 8. Clear the list
        highestScores.innerHTML = "";

        // 9. Add scores to the page
        for (let score of highestThree) {
            let li = document.createElement("li");
            li.textContent = score;
            highestScores.appendChild(li);
        }
    }
}

// 10. Show scores on page load
showHighestScores();