
var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

var mario = new Image()
mario.src = ''

var timer = requestAnimationFrame(draw);
ctx.clearRect(0,0, c.width, c.height);

var x = 0;

//Fuel value
var startFuel = 702;
var fuel = startFuel

var barFullWidth = 300;

var sec = 3;
var fps = 60;
var frames = fps;

var car  = new Car;
//instance of car
var car= Car()
car.w = 100;
car.h = 45;
car.y = 400;
car.color = 'green';


var car2 = new car();
car2.w = 75;
car2.h = 60;
car2.y = 300;

var car3 = new car();
car3.w = 100;
car3.h = 100;
car3.y = 150;

console.log(car.x, car.y)

//console.log(car.x, car.y)

function daw(){
    ctx.fillStyle = 'blue';
    ctx.lineWidth = 1;
    ctx.font = '50px Arial';
    ctx.textAlign = 'center';
    ctx.fillText("Week 4 'Lab'", c.width / 2, 50);
    ctx.strokeText("week 4 'Lab'", c.width)

    drawBox('blue',start, 100, 10, 400);
    drawBox('orange', finish, 100, 10, 400);
    //drawCar();
    drawFuelDar();
    drawFuelText();

    car.y = 500;
    car.x = x;
    car.w = 45;
    car.draw();

    car2.x = x;
    car2.draw();

    car3.x = x;
    car3.drawSprite();

    if(sec > 0){
        runStartTimer();
        drawStartTimer();
    }

else{
    if(fuel > 0){
        x += 1;
        fuel -= 1;
    }
}
}