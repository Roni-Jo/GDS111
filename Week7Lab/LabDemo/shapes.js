window.onload=function(){
    //code hear//
    var c = document.querySelector('canvas');
    var ctx = c.getContext("2d");
    var timer = requestAnimationFrame(draw);
    var deg = 45;

    //this is game object class, used to draw shapes
    function GameObject(){

    }


    //This is where we draw stuff for example
    function draw(){
        ctx.clearRect(0,0,c.width,c.height);
        ctx.fillStyle = "blue" ;
        ctx.save();
        ctx.translate(c.width/2,c.height/2);
        ctx.rotate(deg+=1 * Math.PI/180);
        ctx.fillRect(0-100,0-100,200,200);
        ctx.restore();

        ctx.fillRect(100,100,20,20);
        timer = requestAnimationFrame(draw);
    }


    draw();

}