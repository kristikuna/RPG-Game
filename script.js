var play = prompt("Do you want to play?");
var userHealth = 40;
var grantHealth = 10;
var userWins = 0;
var grantWins = 0;

if (play.toLowerCase() === "yes"){
  var userName = prompt("What is your name?");
} else {
  userWins = 4;
  console.log("GAME OVER");
}

while (userWins < 3 && grantWins <  1) {
 userHealth-= Math.floor(Math.random() * 2) + 1;
 grantHealth-= Math.floor(Math.random() * 2) + 1;
 console.log(userName + " has " + userHealth + " left.");
 console.log("Grant the Mighty Chicken has " + grantHealth + " left.");
 if (grantHealth <= 0) {
   userWins++;
   grantHealth = 10;
 } else if (userHealth <= 0) {
   grantWins++;
 }
}

if (userWins === 3) {
 console.log(userName + " Wins!");
} else if (grantWins === 1) {
 console.log("Grant Wins!");
}
