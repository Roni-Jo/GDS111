var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
var timer = requestAnimationFrame(main)


function GameObject(){
    this.radius = Math.random()*3+2;
    this.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    this.x = Math.random() * 800;
    this.y = Math.random() * 600;
    this.vx = Math.random() * (10 - -10) + -10;
    this.vy = this.radius;

    this.drawCircle = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.fill();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;

        if(this.y > c.height - this.radius){
            //this.y = 0 - this.radius;
            this.y = c.height;
            this.vy = -this.vy *0.67
        }
    }
}

//[] = new Array()//
var particles = new Array();
var numOfParticles = 1000;
var gravity = 1

//sets up the particles//
 for(var i = 0; i<numOfParticles; i++){
        particles[i] = new GameObject();
        particles[i].drawCircle();
        console.log(i);
    }

function main(){
    //clear canvas//
    ctx.clearRect(0,0,c.width,c.height);
   //loop through the particles and make them move//
   for(var i = 0; i<particles.length; i++){
       particles[i].vy += gravity;
       particles[i].move();
       particles[i].drawCircle();
   }
    timer = requestAnimationFrame(main);
}