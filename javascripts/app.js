/*
  Test code to generate a human player and an orc player
*/
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.PlayertoString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new BroadSword());
console.log(orc.PlayertoString());

/*
  Test code to generate a spell
*/
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());

// Define the actual user as Player1
var Player1;
var Enemy1;
$(document).ready(function() {
  function yes () {
    return true;
  }
  /*
    Show the initial view that accepts player name
  */
  $("#player-setup").show();

  // Change the view and set the player's name
  $("#select_class").click(function(e) {
    // Check that the user input a name
    if ($("#player-name").val() === "") {
      return;
    };
    // Add the user value as Player's the name
    Gauntlet.Combatants.Player.playerName = $("#player-name").val();
    console.log("Gauntlet.Combatants.Player.playerName",Gauntlet.Combatants.Player.playerName);
    // Change to the next view
    $("#player-setup").toggle();
    $("#class-select").toggle();
  })

  var elClicked;
  // add 'avatar_selected' to the selected button
  $("#choose_avatar").click(function(e){
    if (e.target.className.indexOf("ava_HTML") >= 0) {
      elClicked = e.target.parentNode.parentNode;
    } else {
      elClicked = e.target.parentNode;
    }
    var avatar_button_Array = $(".avatar_button");
    for (var i = 0; i < avatar_button_Array.length; i++) {
      var currentEl = avatar_button_Array[i]
      $(currentEl).removeClass(".avatar_button");
    };
    $(elClicked).addClass("avatar_selected")

  })
  // Create new avatar for player1
  $("#select_weapon").click(function(e) {
    Player1 = new Gauntlet.Combatants.Human();
    // Add class to the key on player1
    var avatar_ID = $(elClicked).get(0).id;
    switch (avatar_ID) {
      case "Wizard":
      // Create a new Wizard
      Player1.class = new Gauntlet.GuildHall.Wizard();
      break;
      case "Warrior":
      Player1.class = new Gauntlet.GuildHall.Warrior();
      break;
      case "Valkyrie":
      Player1.class = new Gauntlet.GuildHall.Valkyrie();
      break;
      case "Berserker":
      Player1.class = new Gauntlet.GuildHall.Berserker();
      break;
      case "Monk":
      Player1.class = new Gauntlet.GuildHall.Monk();
      break;
      case "Sorcerer":
      Player1.class = new Gauntlet.GuildHall.Sorcerer();
      break;
      case "Conjurer":
      Player1.class = new Gauntlet.GuildHall.Conjurer();
      break;
      case "Thief":
      Player1.class = new Gauntlet.GuildHall.Thief();
      break;
      case "Ninja":
      Player1.class = new Gauntlet.GuildHall.Ninja();
      break;
      case "Assassin":
      Player1.class = new Gauntlet.GuildHall.Assassin();
      break;
      // case "surprise_me":          
      // Player1 = new Gauntlet.GuildHall.surprise_me();
      // console.log("Player1", Player1);
      // break;
    }
    // Figure out if the class selected is Magical
    if (Player1.class.magical === true) {
      // Change view to show spells
      $("#class-select").toggle();
      $("#spell-select").toggle();
    } else {
      // Change view to show weapons
      $("#class-select").toggle();
      $("#weapon-select").toggle();
    }
  });



  // Choose your weapon
  $("#weapon-select").click(function(e){
    if (e.target.className.indexOf("ava_HTML") >= 0) {
      elClicked = e.target.parentNode.parentNode;
    } else {
      elClicked = e.target.parentNode;
    }
    var weapon_button_Array = $(".weapon_button");
    for (var i = 0; i < weapon_button_Array.length; i++) {
      var currentEl = weapon_button_Array[i]
      $(currentEl).removeClass(".weapon_button");
    };
    $(elClicked).addClass("weapon_selected")
  })


  // Add the weapon to Player1
  $("#defeat_your_enemies").click(function(e) {
    // Add weapon to the player1
    var weapon_ID = $(elClicked).get(0).id;
    console.log("weapon_ID", weapon_ID);
    switch (weapon_ID) {
      case "Dagger":
      // Create a new Wizard
      Player1.weapon = new Dagger();
      break;
      case "BroadSword":
      Player1.weapon = new BroadSword();
      break;
      case "WarAxe":
      Player1.weapon = new WarAxe();
      break;
      // case "surprise_me":          
      // Player1 = new Gauntlet.GuildHall.surprise_me();
      // console.log("Player1", Player1);
      // break;
    }

    // Change view to show the battle field
    console.log("Player1 fully equipped", Player1);

    // Create a monster rawr!
    Enemy1 = new Gauntlet.Combatants.Orc();
    Enemy1.generateClass();
    var EnemyWeapon = new BroadSword();
    //Give the monster a weapon ------ randomize it if we want
    Enemy1.setWeapon(EnemyWeapon); 
    console.log("Enemy1 fully equipped", Enemy1);   

    // Access Player1's health
    var player1Health = Player1.health;
    $("#player1_health_bar").html(player1Health);

    var enemy1Health = Enemy1.health;
    $("#enemy1_health_bar").html(enemy1Health);


    $("#battleground").toggle();
    $("#weapon-select").toggle();

  });

// Choose your Spell
  $("#spell-select").click(function(e){
    if (e.target.className.indexOf("ava_HTML") >= 0) {
      elClicked = e.target.parentNode.parentNode;
    } else {
      elClicked = e.target.parentNode;
    }
    var spell_button_Array = $(".spell_button");
    for (var i = 0; i < spell_button_Array.length; i++) {
      var currentEl = spell_button_Array[i]
      $(currentEl).removeClass(".spell_button");
    };
    $(elClicked).addClass("spell_selected")
  })

// Defeat_your_enemies_spells
  $("#defeat_your_enemies_spells").click(function(e) {
    // Add weapon to the player1
    var spell_ID = $(elClicked).get(0).id;
    console.log("spell_ID", spell_ID);
    switch (spell_ID) {
      case "Sphere":
      console.log("go");
      // Create a new Wizard
      Player1.weapon = new Gauntlet.SpellBook.Sphere();
      break;
      case "WindWaker":
      Player1.weapon = new Gauntlet.SpellBook.WindWaker();
      break;
      case "FireBall":
      Player1.weapon = new Gauntlet.SpellBook.FireBall();
      break;
    }

    // Change view to show the battle field
    console.log("Player1 fully equipped", Player1);

    // Create a monster rawr!
    Enemy1 = new Gauntlet.Combatants.Orc();
    Enemy1.generateClass();
    var EnemyWeapon = new BroadSword();
    //Give the monster a weapon ------ randomize it if we want
    Enemy1.setWeapon(EnemyWeapon); 
    console.log("Enemy1 fully equipped", Enemy1);   

    // Access Player1's health
    var player1Health = Player1.health;
    $("#player1_health_bar").html(player1Health);

    var enemy1Health = Enemy1.health;
    $("#enemy1_health_bar").html(enemy1Health);


    $("#battleground").toggle();
    $("#spell-select").toggle();

  });




  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});