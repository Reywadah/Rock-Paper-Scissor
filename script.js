/* CPU chooses a randomly funciton*/
function getComputerChoice(){
    let CpuChoice = Math.floor(Math.random() * 3);
    switch(CpuChoice){
    case 0: {return "rock"}
    case 1: {return "paper"}
    case 2: {return "scissor"}
}}

let victories = 0;
let loses = 0;
let draws = 0;

// Compare CPU and your result, and decide a winner function
function compareResults(myChoice,hisChoice){
    while(victories < 5 && loses < 5){
    switch(myChoice){
        case "rock": if (hisChoice == myChoice){
                        return "Draw"}
                    else if (hisChoice == "paper"){
                        ++loses;
                        return "You lose! Paper beats Rock.";}
                    else{
                        ++victories;
                        return "You win!"} 
        break;
        case "paper":  if (hisChoice == myChoice){
                        return "Draw"}
                    else if (hisChoice == "scissor"){
                        ++loses;
                        rounds.textContent = `Round: ${victories + loses}`
                        return "You lose! Scissor beats Paper.";}
                    else{
                        ++victories;
                        rounds.textContent = `Round: ${victories + loses}`
                        return "You win!"}
        break;
        case "scissor":  if (hisChoice == myChoice){
                        return "Draw"}
                    else if (hisChoice == "paper"){
                        ++loses;
                        rounds.textContent = `Round: ${victories + loses}`
                        return "You lose! Rock beats Scissor.";}
                    else{
                        ++victories;
                        rounds.textContent = `Round: ${victories + loses}`
                        return "You win!"}
        break;
        default:{return "Something went horribly wrong!"}
    }}
}

//input function. if the user returns null, send a default answer (stuck in this hell)
gameText = document.querySelector('.game');
let para = document.querySelector('#pepe');
let rounds = document.createElement('h3');
gameText.appendChild(rounds);
rounds.textContent = '';
const rock = document.querySelector('#btnRock');
const paper = document.querySelector('#btnPaper');
const scissor = document.querySelector('#btnScissor');
rock.addEventListener('click', () => { if ((victories !== 5 && loses == 5)|| (loses !== 5 && victories==5)){return}
para.textContent = compareResults('rock', getComputerChoice());
Counting();
console.log(victories);console.log(loses);
if (victories == 5 || loses == 5){
    announcement(victories,loses);
}});
paper.addEventListener('click', () => { if ((victories !== 5 && loses == 5)|| (loses !== 5 && victories==5)){return}
para.textContent=compareResults('paper', getComputerChoice());
Counting();
console.log(victories);console.log(loses);
if (victories == 5 || loses == 5){
    announcement(victories,loses);
}});
scissor.addEventListener('click', () => { if ((victories !== 5 && loses == 5)|| (loses !== 5 && victories==5)){return}
para.textContent=compareResults('scissor', getComputerChoice());console.log(victories);console.log(loses);
Counting();
if (victories == 5 || loses == 5){
    announcement(victories,loses);
}});
function announcement(W,L){
    let gameOver = document.querySelector('#gameOver');
    if (W > L){gameOver.textContent = "YOU ARE VICTORIOUS!!!";}
    else{gameOver.textContent = "you SUCK!";}
}
function Counting(){
                    rounds.textContent = `Round: ${victories + loses}\n victories: ${victories}\n loses: ${loses}`;
                }
