class Weapon {
    constructor({position, width, height, color, offset}) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.color =  color;
        this.offset = offset;
    }

    setPosition(xPos, yPos) {
        this.position.x = xPos;
        this.position.y = yPos;
    }

}

class Stick extends Weapon {
    constructor() {
        super({
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
        })
    }
}

class Sword extends Weapon {
    constructor() {
        super({
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
        })
    }
}

 
class Animation {
    constructor({position, offset = {x: 0, y: 0}, imgSrc, scale=1, framesMax = 1,  framesHold = 5}) {
        this.position = position;
        this.offset = offset;
        this.image = new Image();
        this.image.src = imgSrc;
        this.scale = scale;
        this.framesMax = framesMax;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = framesHold;
    }

    drawCurrentFrame() {
        ctx.drawImage(this.image,
            this.framesCurrent * (this.image.width / this.framesMax), 0, this.image.width / this.framesMax, this.image.height,
            this.position.x + this.offset.x, this.position.y + this.offset.y, (this.image.width/ this.framesMax) * this.scale, this.image.height * this.scale
        );
    }

    loadNextFrame() {
        this.framesElapsed++;
        if (this.framesElapsed % this.framesHold == 0) {
            this.framesCurrent++;
            this.framesCurrent %= this.framesMax;
        }
    }

    updateAnimation() {
        this.drawCurrentFrame();
        this.loadNextFrame();
    }

}

class Warrior extends Animation {
    full_blood = 100;
    gravity = 0.5;
    constructor({name, position, speed, weapon, color, imgSrc, scale=1, framesMax=1, offset = {x: 0, y:  0}, status, rectangle }) {
        super({position, imgSrc, scale, framesMax, offset })
        this.name = name;
        this.speed = speed;
        this.width = 100;
        this.height = 150;
        this.blood = this.full_blood;
        this.numLives = 3;
        this.score = 0;
        this.weapon = weapon;
        this.isAttacking = false;
        this.color = color;
        this.status = status;
        this.rectangle = rectangle;
        for (const stat in this.status) {
            status[stat].image = new Image();
            status[stat].image.src = status[stat].imageSrc;
        }

    }
 

    updateInternal() {
        this.rectangle.x = this.position.x + this.rectangle.offset.x;
        this.rectangle.y = this.position.y + this.rectangle.offset.y;
        this.weapon.setPosition (this.position.x + this.weapon.offset.x, this.position.y + this.weapon.offset.y);
    }

    goDown() {
        let bottom = this.position.y + this.height;
        if (bottom < canvas.height) {
            if (bottom + this.speed.y <= canvas.height) {
                this.position.y += this.speed.y;
            } else if (bottom + this.gravity <= canvas.height) {
                this.position.y += this.gravity;
            } else {
                this.position.y += canvas.height - bottom;
            }
  
        }
    }

    jump() {
        this.position.y -= 5 * this.speed.y;

    }

    goLeft() {
        this.position.x -= this.speed.x;
    }
    
    goRight() {
        this.position.x += this.speed.x;
    }

    attack() {
        this.isAttacking = true;
        setTimeout(() => {
            this.isAttacking = false;
        }, 100)
    }

    getAttack() {
        this.blood -= 20;
        if (this.blood == 0) {
            this.numLives -= 1;
            if (this.numLives == 0) {
                // game over
                this.dead = true;
                this.offset.y = -250;
                this.switchStatus("death");
                return;
            } 
            this.blood = this.full_blood;
            
        } 
        this.switchStatus('hit');
         
    }

    

    switchStatus(status) {
        if (this.image === this.status.death.image) {
            return;
        }
        if (this.image === this.status.attack.image && this.framesCurrent < this.framesMax -1){
            return;
        }

        if (this.image === this.status.hit.image && this.framesCurrent < this.framesMax -1) {
            return;
        }

        switch (status){
            case 'idle':
                if (this.image !== this.status.idle.image) {
                    this.image = this.status.idle.image;
                    this.framesMax = this.status.idle.framesMax;
                    this.framesCurrent = 0;   
                    this.framesHold = 5;                

                }
                break;

            case 'run':
                if (this.image !== this.status.run.image) {
                    this.image = this.status.run.image;
                    this.framesMax = this.status.run.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 5;
                }
                break;
                            
            case 'jump':
                if (this.image !== this.status.jump.image) {
                    this.image = this.status.jump.image;
                    this.framesMax = this.status.jump.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 5;
                    
                }
                break;

            case 'attack':
                if (this.image !== this.status.attack.image) {
                    this.image = this.status.attack.image;
                    this.framesMax = this.status.attack.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 5;
                    
                }
               
                break;
            case 'hit':
                if (this.image !== this.status.hit.image) {
                    this.image = this.status.hit.image;
                    this.framesMax = this.status.hit.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 3;
                    
                }
                
                break;
            case 'death':
                if (this.image !== this.status.death.image) {
                    this.image = this.status.death.image;
                    this.framesMax = this.status.death.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 10;
             
                }
                
                break;
        }

    }

    collides (player) {
        let x_min = Math.min(this.weapon.position.x, player.rectangle.x);
        let x_max = Math.max(this.weapon.position.x, player.rectangle.x);
        let width = x_min == this.weapon.position.x ? this.weapon.width: player.rectangle.width;

        let y_min =  Math.min(this.weapon.position.y, player.rectangle.y);
        let y_max =  Math.max(this.weapon.position.y, player.rectangle.y);
        let height = y_min == this.weapon.position.y ? this.weapon.height: player.rectangle.height;

        return (x_min < x_max && x_max < x_min + width)
            && (y_min < y_max && y_max < y_min + height);
    }

}

class Wizard extends Warrior {
    constructor() {
        super({
            name: "Wizard",
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
            status: {
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
            weapon: new Stick(),
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

    }
}

class Demon extends Warrior {
    constructor() {
        super ({
            name: "Demon",
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

            status: {
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
            weapon: new Sword(),
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
        })
    }
}