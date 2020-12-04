var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var rps =[];
rps = "Start game";

btn.addEventListener('click', function(e){
    play(0);
})

function play(playersChoice){
    ctx.clearRect(0,0,c.clientWidth,c.height);
    var cpuChoice = Math.floor(Math.random()*2.9999);
 
    ctx.font  = "40px Arial";
    ctx.fillStyle = "#78dcde";
    ctx.textAlign = "center";

}
