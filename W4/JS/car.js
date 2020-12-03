//JavaScript goes here//

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

var mario = new Image();
mario.src = 'Images/Mario.png';

var timer = requestAnimationFrame(draw);

function draw(){

    timer = requestAnimationFrame(draw);
    ctx.clearRect(0,0, c.width, c.height);

    ctx.drawImage(Mario, 0, 0);
}

draw()