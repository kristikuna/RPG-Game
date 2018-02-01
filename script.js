(function() {

  var player = {
    wins: 0,
    health: 40,
    healsRemaining: 2,
    name: "",

    generateAttackDamage: function() {
      return Math.floor(Math.random() * 3) + 1;
    },
    heal: function() {
      var heal = Math.floor((Math.random() * 10) + 1);
      return heal;
    }
  }

  var grant = {
    name: "Grant the Almighty Chicken",
    health: 10,

    generateAttackDamage: function() {
      return Math.floor(Math.random() * 5) + 1;
    }
  }


  var attackButton = document.getElementById("attackButton")
  var healButton = document.getElementById("healButton")
  var quitButton = document.getElementById("quitButton")
  var startButton = document.getElementById("startButton")
  var playerHealthBar = document.getElementById("playerHealthBar")
  var grantHealthBar = document.getElementById("grantHealthBar")
  var playerHealCount = document.getElementById("playerHealCount")
  var playerWins = document.getElementById("playerWins")
  var playerName = document.getElementById("playerName")
  var enemyName = document.getElementById("enemyName")
  var mainGame = document.getElementById("mainGame")


  var start = document.getElementById("startButton");
  start.onclick = function() {
    startGame();
  }

  function updateName(newMessage) {
    playerName.innerText = newMessage;
  }

  function startGame() {
    player.name = prompt("Enter your character name:");
    startButton.classList.add("hideStart");
    mainGame.classList.remove("hide");
    updateName(player.name);
  }


  startCombat();

  function startCombat() {

    function updateMessage(newMessage) {
      messageEl.innerText = newMessage;
    }

    updateMessage("Do you want to attack, heal or quit??");

    attackButton.onclick = function() {
      //attack
      player.health -= player.generateAttackDamage();
      grant.health -= grant.generateAttackDamage();
      updateDisplay();
      updateDisplay();
      updateMessage(player.name + " has " + player.health + "  health left. " + grant.name + " " + grant.health + " health left.");
      if (player.wins === 5) {
        updateMessage("YASSSSS, " + player.name + " wins!");
       } else if (grant.health <= 0) {
        player.wins++;
        updateMessage("You have beat Grant! You need to win " + (5 - player.wins) + " more rounds.");
        grant.health = 10;
      }
          
    
    }

    function updateDisplay() {
      playerHealthBar.value = player.health;
      grantHealthBar.value = grant.health;
      playerHealCount.value = player.healsRemaining;
      playerWins.value = player.wins;
    }

    //heal
    healButton.onclick = function() {
      if (player.healsRemaining > 0) {
        player.health += player.heal();
        player.healsRemaining--;
        updateDisplay();
        updateMessage(player.name + " has healed and has " + player.health + " left!");
        player.health -= player.generateAttackDamage();
        updateMessage(player.name + " gets hit after healing and has " + player.health + " left!");
      } else {
        updateMessage("Uh-Oh! You have used up all of your heals ):");
      }
    }
    //quit
    quitButton.onclick = function() {
      updateMessage("You quit! Grant the Mighty Chicken has won!");
    }
  }

})();
