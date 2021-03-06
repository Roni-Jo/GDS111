//JavaScript goes here//

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

var mario = new Image();
mario.src = 'Images/Mario.png';

var timer = requestAnimationFrame(draw);

function draw(){

    timer = requestAnimationFrame(draw);
    ctx.clearRect(0,0, c.width, c.height);

    ctx.strokeStyle = 'green'
    //draw a line//
    ctx.moveTo(0,0);
    ctx.lineTo(800, 600);
    ctx.stroke();

    ctx.moveTo(800,0);
    ctx.lineTo(0,600);
    ctx.stroke();
    //draw a box//
    ctx.fillStyle = 'red';
    ctx.fillRect(200,100, 200, 200);

    //draw a circle//
    ctx.fillStyle = 'blue'
    ctx.strokeStyle = 'orange'
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, 20,0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.drawImage(Mario, 0, 0);
}

draw()