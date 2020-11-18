
var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");


var rps =[];
rps[0] = "Rock";
rps[1] = "paper";
rps[2] = "Scissors";

//array of buttons
var btn = document.querySelectorAll('a');
btn[0].innerHTML = rps[0];
btn[1].innerHTML = rps[1];
btn[2].innerHTML = rps[2];

//when button is clicked play game
//event listener Rock
btn[0].addEventListener('click', function(e){
    play(0);
})

//event listener Paper
btn[1].addEventListener('click', function(e){
    play(1);
})

//event listener for Scissors
btn[2].addEventListener('click', function(e){
    play(2);
})


function play(playersChoice){
    ctx.clearRect(0,0,c.clientWidth,c.height);
    var cpuChoice = Math.floor(Math.random()*2.9999);
 
    ctx.font  = "40px Arial";
    ctx.fillStyle = "#78dcde";
    ctx.textAlign = "center";


    //example of switch case
    switch(playersChoice){
        case 0:
            if(cpuChoice === 0){
                ctx.fillText("Player chose Rock", c.width/2,c.height/2-100);
                ctx.fillText("Computer chose Rock, You Tied!", c.width/2,c.height/2);
            }
            else if(cpuChoice === 1){
                ctx.fillText("Player chose Rock", c.width/2,c.height/2-100);
                ctx.fillText("Computer chose paper, You Lose!", c.width/2,c.height/2);
            }
            else{
                ctx.fillText("Player chose Rock", c.width/2,c.height/2-100);
                ctx.fillText("Computer chose Scissors, You Win!", c.width/2,c.height/2);
            }
        break;
        case 1: 
        if(cpuChoice === 0){
            ctx.fillText("Player chose Paper", c.width/2,c.height/2-100);
            ctx.fillText("Computer chose , You Win!", c.width/2,c.height/2);
        }
        else if(cpuChoice === 1){
            ctx.fillText("Player chose Paper", c.width/2,c.height/2-100);
            ctx.fillText("Computer chose paper, You Tied!", c.width/2,c.height/2);
        }
        else{
            ctx.fillText("Player chose Paper", c.width/2,c.height/2-100);
            ctx.fillText("Computer chose Scissors, You Lose!", c.width/2,c.height/2);
        }
        break;
        case 2:  
        if(cpuChoice === 0){
            ctx.fillText("Player chose Scissors", c.width/2,c.height/2-100);
            ctx.fillText("Computer chose Rock, You Lose!", c.width/2,c.height/2);
        }
        else if(cpuChoice === 1){
            ctx.fillText("Player chose Scissors", c.width/2,c.height/2-100);
            ctx.fillText("Computer chose paper, You Win!", c.width/2,c.height/2);
        }
        else{
            ctx.fillText("Player chose Scissors", c.width/2,c.height/2-100);
            ctx.fillText("Computer chose Scissors, You Tied!", c.width/2,c.height/2);
        }
        break;
    }
}
