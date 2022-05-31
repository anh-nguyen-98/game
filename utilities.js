let timer = 0;
let timerId;
function increaseTimer() {
    timerId = setTimeout(() => {
        timer++;
        document.getElementById("timer").innerHTML = timer;
        increaseTimer();
    }, 1000);
}

function updateScoreLives() {
    document.getElementById("player1Score").innerHTML = player1.score;
    document.getElementById("player2Lives").innerHTML = player2.numLives;
    document.getElementById("player2Blood").style.width = player2.blood + '%';
    document.getElementById("player2Score").innerHTML = player2.score;
    document.getElementById("player1Lives").innerHTML = player1.numLives;
    document.getElementById("player1Blood").style.width = player1.blood + '%';
}