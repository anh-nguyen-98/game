/**
 * Left Player: Left (A), Right (D), Up(W), Attack (Space)
 * Right Player: Left (Arrow Left), Right (Arrow Right)), Up(Arrow Up), Attack (Arrow Down)
 */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')


canvas.width = visualViewport.width - 30;
canvas.height = visualViewport.height - 15;

const bar = document.getElementById('top-bar');
bar.style.width = canvas.width;
const background = new Image(150, 50);
background.src = "images/background.jpg";


const player1 = new Wizard();
const player2 = new Demon();

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    space: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    }
}


function animate() {
    window.requestAnimationFrame(animate);

    ctx.drawImage(background, 0, 0);

    player1.updateInternal();
    player2.updateInternal();

    if (player1.dead && player1.image !== player1.status.death.image) {
        player1.switchStatus("death");
    }

    if (player2.dead && player2.image !== player2.status.death.image) {
        player2.switchStatus("death");
    }

    if (!(player1.dead && player1.framesCurrent == player1.framesMax - 1)) {
        player1.updateAnimation();
    } else {
        player1.drawCurrentFrame();
    }
    
    if (!(player2.dead && player2.framesCurrent == player2.framesMax - 1)) {
        player2.updateAnimation();
    } else {
        player2.drawCurrentFrame();
    }

    player1.goDown();
    player2.goDown();

    if (keys.a.pressed) {
        player1.switchStatus('run');
        player1.goLeft();
    }
    if (keys.d.pressed) {
        player1.switchStatus('run');
        player1.goRight();
    }
    if (keys.w.pressed) {
        player1.switchStatus('jump');
        player1.jump();
    }

    if (keys.space.pressed) {
        player1.switchStatus('attack');
    }
    if (!keys.a.pressed && !keys.d.pressed  && !keys.w.pressed && !keys.space.pressed) {
        player1.switchStatus('idle');
    }
    if (keys.ArrowLeft.pressed) {
        player2.switchStatus('run');
        player2.goLeft();
    }
    if (keys.ArrowRight.pressed) {
        player2.switchStatus('run');
        player2.goRight();
    }
    if (keys.ArrowUp.pressed) {
        player2.switchStatus('idle');
        player2.jump();
    }
    if (keys.ArrowDown.pressed) {
        player2.switchStatus('attack');
    } 
    if (!keys.ArrowUp.pressed && !keys.ArrowLeft.pressed  && !keys.ArrowRight.pressed && !keys.ArrowDown.pressed) {
        player2.switchStatus('idle');
    }

    if (player1.collides(player2) && player1.isAttacking) {
        player1.isAttacking = false; 
        player1.score += 20;
        player2.getAttack();
        updateScoreLives(); 
    }
    if (player2.collides(player1) && player2.isAttacking) {
        player2.isAttacking = false;
        player2.score += 20;
        player1.getAttack();
        updateScoreLives();
    }

    if (player2.dead && player2.framesCurrent == player2.framesMax -1) {
        document.getElementById("result").innerHTML = "Game over - Wizard wins";
        clearTimeout(timerId);
    }

    if (player1.dead && player1.framesCurrent == player1.framesMax -1) {
        clearTimeout(timerId);
        document.getElementById("result").innerHTML = "Game over - Demon wins";
    }

}


window.addEventListener('keydown', (event) => {
    if (!player1.dead) {
        switch (event.key) {
            case 'd':
                keys.d.pressed = true;
                break;
            case 'a':
                keys.a.pressed = true;
                break;
            case 'w':
                keys.w.pressed = true;
                break;
            case ' ':
                player1.attack();
                keys.space.pressed = true;
                break;
        }
    }
    if (!player2.dead) {
        switch(event.key) {
            case 'ArrowLeft':
                keys.ArrowLeft.pressed = true;
                break;      
            case 'ArrowRight':
                keys.ArrowRight.pressed = true;
                break;
            case 'ArrowUp':
                keys.ArrowUp.pressed = true;
                break;
            case 'ArrowDown':
                player2.attack();
                keys.ArrowDown.pressed = true;
                break;
        }
    }  

})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false;
            break;      
        case 'a':
            keys.a.pressed = false;
            break;
        case 'w':
            keys.w.pressed = false;
            break;
        case ' ':
            keys.space.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;      
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowUp':
            keys.ArrowUp.pressed = false;
            break;
        case 'ArrowDown':
            keys.ArrowDown.pressed = false;
    }
})

increaseTimer();
animate();
