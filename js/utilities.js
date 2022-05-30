function isColliding (player1, player2) {
    let x_min = Math.min(player1.weapon.position.x, player2.rectangle.x);
    let x_max = Math.max(player1.weapon.position.x, player2.rectangle.x);
    let width = x_min == player1.weapon.position.x ? player1.weapon.width: player2.rectangle.width;

    let y_min =  Math.min(player1.weapon.position.y, player2.rectangle.y);
    let y_max =  Math.max(player1.weapon.position.y, player2.rectangle.y);
    let height = y_min == player1.weapon.position.y ? player1.weapon.height: player2.rectangle.height;

    return (x_min < x_max && x_max < x_min + width)
        && (y_min < y_max && y_max < y_min + height);
}

let timer = 0;
let timerId;
function increaseTimer() {
    timerId = setTimeout(() => {
        timer++;
        document.getElementById("timer").innerHTML = timer;
        increaseTimer();
    }, 1000);
}

function updateStatus() {
    document.querySelector("#playerScore").innerHTML = tom.score;
    document.getElementById("enemyLives").innerHTML = jerry.numLives;
    document.querySelector("#enemyBlood").style.width = jerry.blood + '%';
    document.querySelector("#enemyScore").innerHTML = jerry.score;
    document.getElementById("playerLives").innerHTML = tom.numLives;
    document.querySelector("#playerBlood").style.width = tom.blood + '%';
}