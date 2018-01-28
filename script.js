var userHealth = 40;
var grantHealth = 10;
var userWins = 0;
var grantWins = 0;
var playing = true;
var userName;

startGame();

function startGame() {
  var play = prompt("Do you want to play?");
  if (play !== "no"){
    userName = prompt("Enter your character name:");
    startCombat();
  } else {
    console.log("You must fight! Bye!");
    playing = false;
  }
}

function getDamage(){
  var health = Math.floor(Math.random() * 5) + 1;
  return health;
}

function startCombat(){
  while (playing) {
    if (userWins === 3) {
     console.log(userName + " Wins!");
     break;
    } else if (grantWins === 1) {
     console.log("Grant the Mighty Chicken has won!");
     break;
    }

     var optionToFight = prompt("Do you want to attack or quit?");
     if (optionToFight.toLowerCase() === "attack") {
       userHealth -= getDamage();
       grantHealth -= getDamage();
       console.log(userName + " has " + userHealth + " left.");
       console.log("Grant the Mighty Chicken has " + grantHealth + " left.");
     } else {
       console.log("You quit! Grant the Mighty Chicken has won!");
       break;
     } if (grantHealth <= 0) {
     userWins++;
     grantHealth = 10;
     console.log("You have beat Grant! You need to win " + (3 - userWins) + " more round(s)." );

   } else if (userHealth <= 0) {
     console.log("You lose.");
   }
  }

}
