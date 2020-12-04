var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");


var rps =[];
rps[0] = "Air";
rps[1] = "Earth";
rps[2] = "Water";
rps[3] = "Fire";
rps[4] = "Random";




var btn = document.querySelectorAll('a');
btn[0].innerHTML = rps[0];
btn[1].innerHTML = rps[1];
btn[2].innerHTML = rps[2];
btn[3].innerHTML = rps[3];
btn[4].innerHTML = rps[4];




btn[0].addEventListener('click', function(e){
    play(0);
})
btn[1].addEventListener('click', function(e){
    play(1);
})
btn[2].addEventListener('click', function(e){
    play(2);
})
btn[3].addEventListener('click', function(e){
    play(3);
})
btn[4].addEventListener('click', function(e){
    play(4);
})


function play(playersChoice){
    ctx.clearRect(0,0,c.clientWidth,c.height);
    var cpuChoice = Math.floor(Math.random()*2.9999);
    var random = Math.floor(Math.random()*2.9999);

    ctx.font  = "40px Arial";
    ctx.fillStyle = "#78dcde";
    ctx.textAlign = "center";


    
    switch(playersChoice){
        
        case 0: 
        if(cpuChoice === 0){
            ctx.fillText("Player chose Air", c.width/2,c.height/2+100);
            ctx.fillText("Computer chose Air, You Tied!", c.width/2,c.height/2+200);
        }
        else if(cpuChoice === 1){
            ctx.fillText("Player chose Air", c.width/2,c.height/2+100);
            ctx.fillText("Computer chose Earth, You Tied!", c.width/2,c.height/2+200);
        }
        else if(cpuChoice === 2){
            ctx.fillText("Player chose Air", c.width/2,c.height/2+100);
            ctx.fillText("Computer chose Water, You Win!", c.width/2,c.height/2+200);
        }
        else{
            ctx.fillText("Player chose Air", c.width/2,c.height/2+100);
            ctx.fillText("Computer chose Fire, You Lose!", c.width/2,c.height/2+200);
        }
        break;
       
        case 1:  
        if(cpuChoice === 0){
            ctx.fillText("Player chose Earth", c.width/2,c.height/2+100);
            ctx.fillText("Computer chose Air, You Win!", c.width/2,c.height/2+200);
        }
        else if(cpuChoice === 1){
            ctx.fillText("Player chose Earth", c.width/2,c.height/2+100);
            ctx.fillText("Computer chose Earth, You Tied!", c.width/2,c.height/2+200);
        }
        else if(cpuChoice === 2){
            ctx.fillText("Player chose Earth", c.width/2,c.height/2+100);
            ctx.fillText("Computer chose Water, You Tied!", c.width/2,c.height/2+200);
        }
        else{
            ctx.fillText("Player chose Earth", c.width/2,c.height/2+100);
            ctx.fillText("Computer chose Fire, You Win!", c.width/2,c.height/2+200);
        }
        break;
         case 2:  
        if(cpuChoice === 0){
            ctx.fillText("Player chose Water", c.width/2,c.height/2+100);
            ctx.fillText("Computer chose Air, You Lose!", c.width/2,c.height/2+200);
        }
        else if(cpuChoice === 1){
            ctx.fillText("Player chose Water", c.width/2,c.height/2+100);
            ctx.fillText("Computer chose Earth, You Lose!", c.width/2,c.height/2+200);
        }
        else if(cpuChoice === 2){
            ctx.fillText("Player chose Water", c.width/2,c.height/2+100);
            ctx.fillText("Computer chose Water, You Tied!", c.width/2,c.height/2+200);
        }
        else{
            ctx.fillText("Player chose Water", c.width/2,c.height/2+100);
            ctx.fillText("Computer chose Fire, You Win!", c.width/2,c.height/2+200);
        }
        break;
        case 3:
            if(cpuChoice === 0){
                ctx.fillText("Player chose Fire", c.width/2,c.height/2+100);
                ctx.fillText("Computer chose Air, You Win!", c.width/2,c.height/2+200);
            }
            else if(cpuChoice === 1){
                ctx.fillText("Player chose Fire", c.width/2,c.height/2+100);
                ctx.fillText("Computer chose Earth, You Lose!", c.width/2,c.height/2+200);
            }
            else if(cpuChoice === 2){
                ctx.fillText("Player chose Fire", c.width/2,c.height/2+100);
                ctx.fillText("Computer chose Water, You Lose!", c.width/2,c.height/2+200);
            }
            else{
                ctx.fillText("Player chose Fire", c.width/2,c.height/2+100);
                ctx.fillText("Computer chose Fire, You Tied!", c.width/2,c.height/2+200);
            }
        break;
        case 4:
            if(random ===0){
                if(cpuChoice === 0){
                    ctx.fillText("Player chose Air", c.width/2,c.height/2+100);
                    ctx.fillText("Computer chose Air, You Tied!", c.width/2,c.height/2+200);
                }
                else if(cpuChoice === 1){
                    ctx.fillText("Player chose Air", c.width/2,c.height/2+100);
                    ctx.fillText("Computer chose Earth, You Tied!", c.width/2,c.height/2+200);
                }
                else if(cpuChoice === 2){
                    ctx.fillText("Player chose Air", c.width/2,c.height/2+100);
                    ctx.fillText("Computer chose Water, You Win!", c.width/2,c.height/2+200);
                }
                else{
                    ctx.fillText("Player chose Air", c.width/2,c.height/2+100);
                    ctx.fillText("Computer chose Fire, You Lose!", c.width/2,c.height/2+200);
                }
            }
            else if(random === 1){
                if(cpuChoice === 0){
                ctx.fillText("Player chose Earth", c.width/2,c.height/2+100);
                ctx.fillText("Computer chose Air, You Win!", c.width/2,c.height/2+200);
                }
                else if(cpuChoice === 1){
                ctx.fillText("Player chose Earth", c.width/2,c.height/2+100);
                ctx.fillText("Computer chose Earth, You Tied!", c.width/2,c.height/2+200);
                }
                else if(cpuChoice === 2){
                ctx.fillText("Player chose Earth", c.width/2,c.height/2+100);
                ctx.fillText("Computer chose Water, You Tied!", c.width/2,c.height/2+200);
                }
                else{
                ctx.fillText("Player chose Earth", c.width/2,c.height/2+100);
                ctx.fillText("Computer chose Fire, You Win!", c.width/2,c.height/2+200);
                }
            } 
            else if(random === 2){
                if(cpuChoice === 0){
                ctx.fillText("Player chose Water", c.width/2,c.height/2+100);
                ctx.fillText("Computer chose Air, You Lose!", c.width/2,c.height/2+200);
                }
                else if(cpuChoice === 1){
                ctx.fillText("Player chose Water", c.width/2,c.height/2+100);
                ctx.fillText("Computer chose Earth, You Lose!", c.width/2,c.height/2+200);
                }
                else if(cpuChoice === 2){
                ctx.fillText("Player chose Water", c.width/2,c.height/2+100);
                ctx.fillText("Computer chose Water, You Tied!", c.width/2,c.height/2+200);
                }
                else{
                ctx.fillText("Player chose Water", c.width/2,c.height/2+100);
                ctx.fillText("Computer chose Fire, You Win!", c.width/2,c.height/2+200);
                }
           }
            else{
                if(cpuChoice === 0){
                    ctx.fillText("Player chose Fire", c.width/2,c.height/2+100);
                    ctx.fillText("Computer chose Air, You Win!", c.width/2,c.height/2+200);
                }
                else if(cpuChoice === 1){
                    ctx.fillText("Player chose Fire", c.width/2,c.height/2+100);
                    ctx.fillText("Computer chose Earth, You Lose!", c.width/2,c.height/2+200);
                }
                else if(cpuChoice === 2){
                    ctx.fillText("Player chose Fire", c.width/2,c.height/2+100);
                    ctx.fillText("Computer chose Water, You Lose!", c.width/2,c.height/2+200);
                }
                else{
                    ctx.fillText("Player chose Fire", c.width/2,c.height/2+100);
                    ctx.fillText("Computer chose Fire, You Tied!", c.width/2,c.height/2+200);
                }
            }
            break;
        
    }
    
}

/*function draw(){
    ctx.drawImage(images[0], 300, 200);
    ctx.drawImage(images[1], 400, 200);
    ctx.drawImage(images[2], 500, 200);
    ctx.drawImage(images[3], 500, 200);
}*/