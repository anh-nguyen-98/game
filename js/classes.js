class Weapon {
    constructor({position, width, height, color, offset}) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.color =  color;
        this.offset = offset;
    }

}

const gravity = 0.5;
const full_blood = 100;


 
class Character {
    constructor({position, imgSrc, scale=1, framesMax = 1, offset = {x: 0, y: 0}}) {
        this.position = position;
        // this.height = 100;
        // this.width = 50;
        this.image = new Image();
        this.image.src = imgSrc;
        this.scale = scale;
        this.framesMax = framesMax;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 5;
        this.offset = offset;
        this.dead = false;
    }

    draw() {
        ctx.drawImage(
            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x + this.offset.x, 
            this.position.y + this.offset.y, 
            (this.image.width/ this.framesMax) * this.scale, 
            this.image.height * this.scale
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
        this.draw();
        if (!(this.dead && this.framesCurrent == this.framesMax - 1))  {this.loadNextFrame()};

    }

}

class Warrior extends Character {
    constructor({name, position, speed, weapon, color, imgSrc, scale=1, framesMax=1, offset = {x: 0, y:  0}, sprites, rectangle }) {
        super({position, imgSrc, scale, framesMax, offset })
        this.name = name;
        this.speed = speed;
        this.width = 100;
        this.height = 150;
        this.blood = full_blood;
        this.numLives = 3;
        this.score = 0;
        this.weapon = weapon;
        this.isAttacking = false;
        this.color = color;
        this.sprites = sprites;
        this.rectangle = rectangle;
        this.dead = false;
        for (const sprite in this.sprites) {
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc;
        }

    }
 
    // draw() {
    //     // ctx.fillStyle = this.color;
    //     // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        
    //     if (this.isAttacking) {
    //         ctx.fillStyle = this.weapon.color;
    //         this.weapon.position = {
    //             x: this.position.x + this.offset.x,
    //             y: this.position.y
    //         }
    //         ctx.fillRect(this.weapon.position.x, this.weapon.position.y, this.weapon.width, this.weapon.height);    
    //     }
     
    // }

    drawWeapon() {
        // super.weapon.position = {
        //     x: super.position.x + super.offset.x,
        //     y: super.position.y
        // }
        ctx.fillStyle = this.rectangle.color;
        this.rectangle.x = this.position.x + this.rectangle.offset.x;
        this.rectangle.y = this.position.y + this.rectangle.offset.y;
        // ctx.fillRect(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);
        this.weapon.position.x = this.position.x + this.weapon.offset.x;
        this.weapon.position.y = this.position.y + this.weapon.offset.y;
        ctx.fillStyle = this.weapon.color;
        // ctx.fillRect(this.weapon.position.x, this.weapon.position.y, this.weapon.width, this.weapon.height); 
        
    }
    goDown() {
        let bottom = this.position.y + this.height;
        if (bottom < canvas.height) {
            if (bottom + this.speed.y <= canvas.height) {
                this.position.y += this.speed.y;
            } else if (bottom + gravity <= canvas.height) {
                this.position.y += gravity;
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
        }, 10)
    }

    takeHit() {
        this.blood -= 20;
        if (this.blood == 0) {
            this.numLives -= 1;
            if (this.numLives != 0) {
                this.blood = full_blood;
            }
        }
        
    }

    switchSprite(status) {
        if (this.image === this.sprites.death.image) {
            return;
        }
        if (this.image === this.sprites.attack.image && this.framesCurrent < this.framesMax -1){
            return;
        }

        if (this.image === this.sprites.hit.image && this.framesCurrent < this.framesMax -1) {
            return;
        }

        switch (status){
            case 'idle':
                if (this.image !== this.sprites.idle.image) {
                    this.image = this.sprites.idle.image;
                    this.framesMax = this.sprites.idle.framesMax;
                    this.framesCurrent = 0;   
                    this.framesHold = 5;                

                }
                break;

            case 'run':
                if (this.image !== this.sprites.run.image) {
                    this.image = this.sprites.run.image;
                    this.framesMax = this.sprites.run.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 5;
                }
                break;
                            
            case 'jump':
                if (this.image !== this.sprites.jump.image) {
                    this.image = this.sprites.jump.image;
                    this.framesMax = this.sprites.jump.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 5;
                    
                }
                break;

            case 'attack':
                if (this.image !== this.sprites.attack.image) {
                    this.image = this.sprites.attack.image;
                    this.framesMax = this.sprites.attack.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 5;
                    
                }
               
                break;
            case 'hit':
                if (this.image !== this.sprites.hit.image) {
                    this.image = this.sprites.hit.image;
                    this.framesMax = this.sprites.hit.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 3;
                    
                }
                
                break;
            case 'death':
                if (this.image !== this.sprites.death.image) {
                    this.image = this.sprites.death.image;
                    this.framesMax = this.sprites.death.framesMax;
                    this.framesCurrent = 0;
                    this.framesHold = 10;
        
                    
                }
                
                break;
        }

    }

}