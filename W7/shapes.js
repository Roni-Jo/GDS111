window.onload=function(){
    
    var c = document.querySelector('canvas');
    var ctx = c.getContext("2d");
    var timer = requestAnimationFrame(draw);
    
    

    function GameObject(){
        this.radius = 67;
        this.x = 0;
        this.y = 0;
        this.w = 100;
        this.h = this.w;
        this.vx = 1;
        this.vy = 1;
        this.color = "pink";
        this.a = 87,648;
        this.b = 279,550;

        this.drawBox = function(){
            ctx.strokeStyle = "black";
            ctx.lineWidth = 5;
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.fillRect(85,302,this.w,this.h);
            ctx.restore();
            ctx.strokeRect(85,302,this.w,this.h);
        }
      
        this.drawCircle = function(){
            ctx.strokeStyle = "red";
            ctx.lineWidth = 5;
            ctx.beginPath()
            ctx.fillStyle =  this.color;
            ctx.arc(386, 442, this.radius, 0, 2* Math.PI, true);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        this.drawLine = function(){
            ctx.strokeStyle = "rgb(255,0,0)"
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(87,681);
            ctx.lineTo(279,550);
            ctx.stroke();
        }

        this.drawStar = function(){
    
            ctx.fillStyle =this.color;
            ctx.strokeStyle = "rgb(32,32,32)";
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(636,495);
            ctx.lineTo(668,554);
            ctx.lineTo(735,567);
            ctx.lineTo(689,617);
            ctx.lineTo(697,683);
            ctx.lineTo(637,655);
            ctx.lineTo(574,685);
            ctx.lineTo(583,617);
            ctx.lineTo(537,567);
            ctx.lineTo(604,553);
            ctx.lineTo(635,495);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        this.drawPentagon = function(){
            ctx.fillStyle = this.color;
            ctx.strokeStyle = "00ffff";
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(558,309);
            ctx.lineTo(668,284)
            ctx.lineTo(725,380)
            ctx.lineTo(650,466)
            ctx.lineTo(548,421)
            ctx.closePath(558,309);
            ctx.fill();
            ctx.stroke();
        }

    }


    var box = new GameObject();
    box.x = 0;
    box.y = 300;
    box.color =  "yellow";
    
    var circle = new GameObject();
    circle.color = "#ffff00";

    var star = new GameObject();
    star.color = "#ffff00";
    

    var line = new GameObject();
    line.color = "rgb(255,0,0)";

    var pentagon = new GameObject();
    pentagon.color  = "#ff00ff";

    function draw(){
        ctx.clearRect(0,0,c.width,c.height);
        box.drawBox();
        circle.drawCircle();
        star.drawStar();
        line.drawLine();
        pentagon.drawPentagon();
    }
    

}