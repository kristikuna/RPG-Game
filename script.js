(function() {

var player = {
  wins: 0,
  health: 40,
  healsRemaining: 2,
  name: "",

  generateAttackDamage: function() {
    return Math.floor(Math.random() * 3) + 1;
  },
  heal: function(){
    var heal = Math.floor((Math.random() * 10) + 1);
    return heal;
  }
}

var grant = {
  name: "Grant the Almighty Chicken",
  health: 10,

  generateAttackDamage: function(){
    return Math.floor(Math.random() * 5) + 1;
  }
}

startGame();

function startGame() {
  var play = prompt("Do you want to play?");
  if (play !== "no"){
    player.name = prompt("Enter your character name:");
    startCombat();
  } else {
    console.log("You must fight! Bye!");
  }
}

function startCombat() {
  while (player.wins < 6) {
   if (player.wins === 5) {
     console.log("YASSSSS, " + player.name + " wins!");
     break;
   }

     //attack
     var optionToFight = prompt("Do you want to attack, heal or quit?");
     if (optionToFight.toLowerCase() === "attack") {
      player.health -= player.generateAttackDamage();
      grant.health -= grant.generateAttackDamage();
        console.log(player.name + " has " + player.health + "  health left.");
        console.log(grant.name + " " + grant.health+ " health left.");
      }

      //heal
     if (optionToFight.toLowerCase() === "heal") {
       if (player.healsRemaining > 0){
        player.health += player.heal();
        player.healsRemaining--;
        console.log(player.name + " has healed and has " + player.health + " left!");
        player.health -= player.generateAttackDamage();
        console.log(player.name + " gets hit after healing and has " + player.health + " left!")
        } else {
          console.log("Uh-Oh! You have used up all of your heals ):");
        }
      }

      //quit
      if (optionToFight.toLowerCase() === "quit"){
      console.log("You quit! Grant the Mighty Chicken has won!");
      break;
      }

      if (grant.health <= 0) {
        player.wins++;
        grant.health = 10;
        console.log("You have beat Grant! You need to win " + (5 - player.wins) + " more round(s)." );
        } else if (player.health <= 0) {
          console.log("You lose ):");
      }
  }
}

})();
