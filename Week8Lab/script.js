var c = document.querySelector('canvas');
var context = c.getContext('2d');
var timer = requestAnimationFrame(main);
var gravity = 1;
var asteroids = new Array();
var numAsteroids = 10;
var gameOver = false;

function randomRange(high, low){
    return Math.random() * (high-low) + low
}

//class for the asteroids
function Asteroid(){
    this.radius = randomRange(10,2);
    this.x = randomRange(c.width - this.radius, 0 + this.radius);
    this.y = randomRange(c.height - this.radius, 0 + this.radius) - c.height;
    this.vx = randomRange(-5, -10);
    this.vy = randomRange(10, 5);
    this.color = "white";

    this.draw = function(){
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI,true);
        context.closePath();
        context.fill();
        context.restore();
    }
}

//for loop to create the instances of the asteroids
for(var i = 0; i<numAsteroids; i++){
    asteroids[i] = new Asteroid();
}

//Class for the player ship
function PlayerShip(){
    this.x = c.width/2;
    this.y = c.height/2;
    this.w = 20;
    this.h = 20;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.flamelength = 30;

    this.draw = function(){
        context.save();
        context.translate(this.x, this.y);
        //this draws the flame behind ship
        if(this.up == true){
            context.save();
            //adjust the flame length for a flicker effect
            if(this.flamelength == 30){
                this.flamelength = 10
            }
            else{
                this.flamelength = 30
            }
            context.fillStyle = "orange";
            context.beginPath();
            context.moveTo(0,this.flamelength);
            context.lineTo(5,5);
            context.lineTo(-5,5);
            context.lineTo(0,this.flamelength);
            context.closePath();
            context.fill();
            context.restore();
        }
        context.beginPath();
       
        context.fillStyle = "red";
        context.moveTo(0, -13);
        context.lineTo(10,10);
        context.lineTo(-10,10);
        context.lineTo(0,-13);
        context.closePath();
        context.fill();

        context.restore();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;

        //adds boundaries and keeps ship on screen
        if(this.y > c.height - 20){
            this.y = c.height - 20;
            this.vy = 0;
        }
        //check to see if past the top of canvas
        if(this.y < 0 + 13){
            this.y = 13;
            this.vy = 0;
        }
        //check to see if we're past the right of canvas
        if(this.x > c.width - 10){
            this.x = c.width - 10;
            this.vx = 0;
        }
        //check if we're of the left of the canvas
        if(this.x < 0 + 10){
            this.x = 10;
            this.vx = 0;
        }
    }
}
//create the instance of the shipr for the game
var ship = new PlayerShip();

document.addEventListener('keydown', keyPressDown);
document.addEventListener('keyup', keyPressUp);

function keyPressDown(e){
    //console.log("Key Down" + e.keyCode);
    if(e.keyCode ===38){
        ship.up = true;
    }
    if(e.keyCode ===37){
        ship.left = true;
    }
    if(e.keyCode ===39){
        ship.right = true;
    }
}

function keyPressUp(e){
    //console.log("Key Up" + e.keyCode);
    if(e.keyCode ===38){
        ship.up = false;
    }
    if(e.keyCode ===37){
        ship.left = false;
    }
    if(e.keyCode ===39){
        ship.right = false;
    }
}

function main(){
    context.clearRect(0,0,c.width,c.height);

    //ship.vy += gravity;

    if(ship.up == true){
        ship.vy  =  -10;
    }
    else{
        ship.vy = 3;
    }

    if(ship.left == true){
        ship.vx  =  -3;
    }
    
    else if(ship.right == true){
        ship.vx  =  3;
    }

    else{
        ship.vx = 0;
    }

    for(var i = 0; i<asteroids.length; i++){
        //Using the distance formula to find the distance between the ship and asteroids
        var dx = ship.x - asteroids[i].x;
        var dy = ship.y - asteroids[i].y;
        var dist = Math.sqrt((dx*dx)+(dy*dy));
        
        //checks for collision with asteroid and ends game
        if(detectCollision(dist, (ship.h/2 + asteroids[i].radius))){ 
            //console.log("We collided with Asteroid" + i);
            gameOver = true;
            document.removeEventListener('keydown', keyPressDown);
            document.removeEventListener('keyup', keyPressUp);
        }
        
        //Checks to see it asteroid is off screen
        if(asteroids[i].y > c.height + asteroids[i].radius){
            //reset asterois poition off screen
            asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius)-c.height;
            asteroids[i].x = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius);
        }
        
        if(gameOver == false){
            asteroids[i].y += asteroids[i].vy;
        }        

        asteroids[i].draw();
    }

    ship.draw();
    if(gameOver == false){
        ship.move();
    }
    

    timer = requestAnimationFrame(main);
}

function detectCollision(distance, calcDistance){
    return distance < calcDistance;
}