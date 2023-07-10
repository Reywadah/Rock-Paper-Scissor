/* CPU chooses a randomly funciton*/
function getComputerChoice(){
    let CpuChoice = Math.floor(Math.random() * 3);
    switch(CpuChoice){
    case 0: {return "rock"}
    case 1: {return "paper"}
    case 2: {return "scissor"}
}}

// Compare CPU and your result, and decide a winner function
function compareResults(myChoice,hisChoice){
    switch(myChoice){
        case "rock": if (hisChoice == myChoice){
                        return "Draw"}
                    else if (hisChoice == "paper"){
                        return "You lose! Paper beats Rock."}
                    else{
                        return "You win!"} 
        break;
        case "paper":  if (hisChoice == myChoice){
                        return "Draw"}
                    else if (hisChoice == "scissor"){
                        return "You lose! Scissor beats Paper."}
                    else{
                        return "You win!"}
        break;
        case "scissor":  if (hisChoice == myChoice){
                        return "Draw"}
                    else if (hisChoice == "paper"){
                        return "You lose! Rock beats Scissor."}
                    else{
                        return "You win!"}
        break;
        default:{return "Something went horribly wrong!"}
}}

//input function. if the user returns null, send a default answer (stuck in this hell)
function DecideMyFate(){let deciderOfFate = 10;
deciderOfFate = prompt("Please write in your final answer!","rock");
if(deciderOfFate == null){return "rock";}
return deciderOfFate.toLowerCase();}

//shorted function since the original one is too big
function shortFunc(){
    return (compareResults(DecideMyFate(), getComputerChoice()));
}
//final result to announce the winner
function announcement(W,L){
    if (W > L){return "YOU WIN!";}
    else{return "You lose.";}
}
//game
function game(){
    let victories = 0;
    let loses = 0;
    let draws = 0;
    let round;
    //this for-loop calculates the number of rounds
    for(round = 1; round <= 5; round++){
    let Fight = shortFunc();
    if ( Fight == "You win!"){
        console.log(`Round ${round} ends in a Victory!`);
        victories++;
    }
    else if (Fight.slice(4,5) == "l"){
        console.log(`Round ${round} ends in a lose!`);
        loses++;
    }
    else{
        //console.log("Draw!");
        round--;
    }
}

    console.log( announcement(victories,loses));
    console.log(`Game Over!\n`);
    console.log("total victories = " + victories);
    console.log("total loses = " + loses);
}
game();
