// practice code for while loops
// 1. using while loop count from 0 to 10
/*
let number = 0;
while (number <= 10) {
    console.log(number);
    number = number + 1;
    // number++;
}
*/
// 2. using a while loop count from 10 to 0
// 3. extra challenge - count from 0 to 50, but only odd numbers,


let welcomeMsg = "Welcome to dragon realms! You must choose a cave (1 or 2). This will decide your fate";
alert(welcomeMsg);

let continueGame = "y";

while (continueGame === "y") {
    // ask which cave to enter?
    let playerChoice = Number(prompt("Which cave do you enter? (1 or 2)?"));
    let dieCave = Math.floor(Math.random() * 2) + 1
    if (playerChoice === dieCave) {
        let playerAge = Number(prompt("How old are you?"));
        if (playerAge < 13) {
            alert("too young");
        } else if (playerAge >= 14 && playerAge <= 17) {
            alert("perfect age. tasty. i eat you");
        } else {
            alert("sorry, you die!");
        }
    } else if (playerChoice === "2") {
        alert("you get a pot of gold!");
    } else {
        alert("sorry that cave doesn't exist!");
    }
    continueGame = prompt("Would you like to play again (y/n)?");
}