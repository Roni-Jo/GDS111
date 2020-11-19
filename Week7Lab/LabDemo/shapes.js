window.onload=function(){
    //code hear//
    var c = document.querySelector('canvas');
    var ctx = c.getContext("2d");
    var timer = requestAnimationFrame(draw);
    var deg = 45;
    var x = 0;
    var rotatingBoxes = [];
    var count = 12;

    //this is game object class, used to draw shapes
    function GameObject(){
        this.x = 0;
        this.y = 0;
        this.w = 100;
        this.h = this.w;
        this.deg = 0;
        this.vx = 1;
        this.vy = 1;
        this.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`

        this.drawBox = function(){
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y,this.w,this.h);
            ctx.restore();
        }

        this.drawRotateBox =function(){
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.translate(this.x,this.y)
            ctx.rotate(this.deg += this.vx * Math.PI/180);
            ctx.fillRect(0-this.w/2,0-this.h/2,this.w,this.h);
            ctx.restore();
        }
    }

    //create instance of game object
    var box = new GameObject();
    box.x = 0;
    box.y = 300;

    var rotatingBox = new GameObject();
    rotatingBox.x =300;
    rotatingBox.y =300;

    //For Loop
    for(var i = 0; i<count; i++){
      /*  rotatingBoxes[i] = new GameObject();
        rotatingBoxes[i].x = i * rotatingBoxes[i].w;
        rotatingBoxes[i].y = 100;*/
        rotatingBoxes[i].x = Math.floor(Math.random()*c.width);
        rotatingBoxes[i].y = Math.floor(Math.random()*c.height);
      

        /*if(rotatingBoxes[i].x > c.width){
            rotatingBoxes[i].y = 1 * rotatingBoxes[i].h + rotatingBoxes[i].y;
            rotatingBoxes[i].x = 0;
            rotatingBoxes[i].x = rotatingBoxes[i].w/2 *i;

            console.log(rotatingBoxes[i].x, rotatingBoxes[i].y);
        }*/
    }

    //This is where we draw stuff for example
    function draw(){
       /*
        ctx.clearRect(0,0,c.width,c.height);
        ctx.fillStyle = "blue" ;
        ctx.save();
        ctx.translate(c.width/2,c.height/2);
        ctx.rotate(deg+=1 * Math.PI/180);
        ctx.fillRect(0-100,0-100,200,200);
        ctx.restore();

        ctx.fillRect(x+=1,100,20,20);
        */
        ctx.clearRect(0,0,c.width,c.height);
        box.x += box.vx;
        box.drawBox();
        rotatingBox.drawRotateBox();

        for(var i = 0; i<rotatingBoxes.length; i++){
            rotatingBoxes[i].drawRotateBox();
        }

        timer = requestAnimationFrame(draw);
    }


    draw();

}