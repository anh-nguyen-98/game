/**
 * Left Player: Left (A), Right (D), Up(W), Attack (Space)
 * Right Player: Left (Arrow Left), Right (Arrow Right)), Up(Arrow Up), Attack (Arrow Down)
 */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')


canvas.width = visualViewport.width - 30;
console.log(canvas.width);
canvas.height = visualViewport.height - 15;

const bar = document.getElementById('bar');
bar.style.width = canvas.width
// ctx.fillStyle = '#00196E';
// ctx.fillRect(0, 0, canvas.width, canvas.height);

const background = new Image(150, 50);
background.src = "images/background.jpg";


const tom = new Warrior({
    name: "Tom",
    position: {
        x: 100,
        y: 0
    },
    speed: {
        x: 10,
        y: 10
    },
    offset: {
        x: 0,
        y: -250
    },
    color: '#FFAD1D',
    imgSrc: "./images/Wizard/Idle.png",
    framesMax: 6,
    scale: 2.5,

    sprites: {
        idle: {
            imageSrc: "./images/Wizard/Idle.png",
            framesMax: 6
        },
        run: {
            imageSrc: "./images/Wizard/Run.png",
            framesMax: 8
        },
        jump: {
            imageSrc: "./images/Wizard/Jump.png",
            framesMax: 2
        },
        attack: {
            imageSrc: "./images/Wizard/Attack1.png",
            framesMax: 8
        },
        hit: {
            imageSrc: "./images/Wizard/Hit.png",
            framesMax: 4
        },

        death: {
            imageSrc: "./images/Wizard/Death.png",
            framesMax: 7
        }

    },
    weapon: new Weapon({
        position: {
            x: 0,
            y: 0
        },
        width: 280,
        height: 230,
        color: 'red',
        offset: {
            x: 210,
            y: -240
        }
    }),
    rectangle: {
        x: 210,
        y: 490,
        width: 130,
        height: 200,
        color: "green",
        offset: {
            x: 210,
            y: -100
        }
    }
});

const jerry = new Warrior({
    name: "Jerry",
    position: {
        x: 800,
        y: 0
    },
    speed: {
        x: 10,
        y: 10
    },
    offset: {
        x: 0,
        y: -200
    },
    color: 'green',
    imgSrc: "./images/Demon/Idle.png",
    framesMax: 6,
    scale: 2,

    sprites: {
        idle: {
            imageSrc: "./images/Demon/Idle.png",
            framesMax: 6
        },
        run: {
            imageSrc: "./images/Demon/Run.png",
            framesMax: 6
        },
        jump: {
            imageSrc: "./images/Demon/Idle.png",
            framesMax: 6
        },
        attack: {
            imageSrc: "./images/Demon/Attack.png",
            framesMax: 8
        },
        hit: {
            imageSrc: "./images/Demon/Hit.png",
            framesMax: 5
        },
        death: {
            imageSrc: "./images/Demon/Death.png",
            framesMax: 8
        }

    },
    weapon: new Weapon({
        position: {
            x: 0,
            y: 0
        },
        width: 180,
        height: 230,
        color: 'white',
        offset: {
            x: 50,
            y: -130
        }
    }),
    rectangle: {
        x: 0,
        y: 0,
        width: 160,
        height: 180,
        color: "purple",
        offset: {
            x: 200,
            y: -80
        }
    }
});

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


i = 0;

function animate() {
    // create infinite loop of frames
    window.requestAnimationFrame(animate);

    ctx.drawImage(background, 0, 0);
    // ctx.fillStyle = '#00196E';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // tom.draw();
    // jerry.draw();

    tom.drawWeapon();
    jerry.drawWeapon();

    tom.updateAnimation();

    jerry.updateAnimation();

    tom.goDown();
    jerry.goDown();
    if (keys.a.pressed) {
        tom.switchSprite('run');
        tom.goLeft();
        
    }
    if (keys.d.pressed) {
        tom.switchSprite('run');
        tom.goRight();
    }
    if (keys.w.pressed) {
        tom.switchSprite('jump');
        tom.jump();
    }

    if (keys.space.pressed) {
        tom.switchSprite('attack');

    }
    if (!keys.a.pressed && !keys.d.pressed  && !keys.w.pressed && !keys.space.pressed) {
        tom.switchSprite('idle');
    }
    if (keys.ArrowLeft.pressed) {
        jerry.switchSprite('run');
        jerry.goLeft();
    }
    if (keys.ArrowRight.pressed) {
        jerry.switchSprite('run');
        jerry.goRight();
    }
    if (keys.ArrowUp.pressed) {
        jerry.switchSprite('idle');
        jerry.jump();
    }
    if (keys.ArrowDown.pressed) {
        jerry.switchSprite('attack');
    } 
    if (!keys.ArrowUp.pressed && !keys.ArrowLeft.pressed  && !keys.ArrowRight.pressed && !keys.ArrowDown.pressed) {
        jerry.switchSprite('idle');
    }
    if (isColliding(tom, jerry) && tom.isAttacking) {
        console.log("colliding true");
        tom.isAttacking = false; 
        tom.score += 20;
        // jerry.takeHit();
        jerry.blood -= 20;
        if (jerry.blood == 0) {
            jerry.numLives -= 1;
            if (jerry.numLives != 0) {
                jerry.blood = full_blood;
            }
        }
        updateStatus();
        if (jerry.numLives == 0) {
            // game over
            jerry.dead = true;
            jerry.offset.y = -300;
            jerry.switchSprite("death");
            
        } else {
            jerry.switchSprite('hit');
        }
    
    }
    if (isColliding(jerry, tom) && jerry.isAttacking) {
        console.log("colliding true");
        jerry.isAttacking = false;
        jerry.score += 20;
        // tom.takeHit();
        tom.blood -= 20;
        if (tom.blood == 0) {
            tom.numLives -= 1;
            if (tom.numLives != 0) {
                tom.blood = full_blood;
            }
        }
        updateStatus();
        if (tom.numLives == 0) {
            // game over
            tom.dead = true;
            tom.offset.y = -250;
            tom.switchSprite("death");

        } else {
            tom.switchSprite('hit');
        }

    }

    if (jerry.dead && jerry.framesCurrent == jerry.framesMax -1) {
        document.getElementById("result").innerHTML = "Game over - Wizard wins";
        clearTimeout(timerId);
    }

    if (tom.dead && tom.framesCurrent == tom.framesMax -1) {
        clearTimeout(timerId);
        document.getElementById("result").innerHTML = "Game over - Demon wins";
    }

}



increaseTimer();
animate();



window.addEventListener('keydown', (event) => {
    if (!tom.dead) {
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
                tom.attack();
                keys.space.pressed = true;
                break;
        }
    }
    if (!jerry.dead) {
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
                console.log("arrow down")
                jerry.attack();
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