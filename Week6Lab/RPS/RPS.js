//Array of  choices
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
    var cpuChoice = Math.floor(Math.random()*2.9999);

    //example of switch case
    switch(playersChoice){
        case 0:
            if(cpuChoice === 0){
                alert("Cpu Chose Rock, You Tied!");
            }
            else if(cpuChoice === 1){
                alert("Cpu choses paper, You Lose!");
            }
            else{
                alert("Cpu choses Scissors, You Win!");
            }
        break;
        case 1: 
        if(cpuChoice === 0){
            alert("Cpu Chose Rock, You Win!");
        }
        else if(cpuChoice === 1){
            alert("Cpu choses paper, You Tied!");
        }
        else{
            alert("Cpu choses Scissors, You Lose!");
        }
        break;
        case 2:  
        if(cpuChoice === 0){
            alert(" Computer Chose Rock, You Lose");
        }
        else if(cpuChoice === 1){
            alert("Cpu choses paper, You Win!");
        }
        else{
            alert("Cpu choses Scissors, You Tie!");
        }
        break;
    }
}
