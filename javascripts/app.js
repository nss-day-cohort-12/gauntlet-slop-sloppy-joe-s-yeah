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
$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  var avatarClicked;

  // add 'avatar_selected' to the selected button
  $("#choose_avatar").click(function(e){
    if (e.target.className.indexOf("ava_HTML") >= 0) {
      avatarClicked = e.target.parentNode.parentNode;
    } else {
      avatarClicked = e.target.parentNode;
    }
    var avatar_button_Array = $(".avatar_button");
    for (var i = 0; i < avatar_button_Array.length; i++) {
      var currentEl = avatar_button_Array[i]
      $(currentEl).removeClass(".avatar_button");
    };
    $(avatarClicked).addClass("avatar_selected")
    console.log("avatarClicked", avatarClicked);
  })
  
  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    console.log("e",e);
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":

        // check for avatar_selected
        // CREATE NEW AVATAR based on the id
        var avatar_ID = $(avatarClicked).get(0).id;
        switch (avatar_ID) {
          case "Wizard":
          // Create a new Wizard
          Player1 = new Gauntlet.GuildHall.Wizard();
          console.log("Player1", Player1);
          break;
          
          case "Warrior":
          Player1 = new Gauntlet.GuildHall.Warrior();
          console.log("Player1", Player1);
          break;
          
          case "Valkyrie":
          Player1 = new Gauntlet.GuildHall.Valkyrie();
          console.log("Player1", Player1);
          break;
          
          case "Berserker":
          Player1 = new Gauntlet.GuildHall.Berserker();
          console.log("Player1", Player1);
          break;
          
          case "Monk":
          Player1 = new Gauntlet.GuildHall.Monk();
          console.log("Player1", Player1);
          break;
          
          case "Sorcerer":
          Player1 = new Gauntlet.GuildHall.Sorcerer();
          console.log("Player1", Player1);
          break;
          
          case "Conjurer":
          Player1 = new Gauntlet.GuildHall.Conjurer();
          console.log("Player1", Player1);
          break;
          
          case "Thief":
          Player1 = new Gauntlet.GuildHall.Thief();
          console.log("Player1", Player1);
          break;
          
          case "Ninja":
          Player1 = new Gauntlet.GuildHall.Ninja();
          console.log("Player1", Player1);
          break;
          
          case "Assassin":
          Player1 = new Gauntlet.GuildHall.Assassin();
          console.log("Player1", Player1);
          break;

          // case "surprise_me":          
          // Player1 = new Gauntlet.GuildHall.surprise_me();
          // console.log("Player1", Player1);
          // break;
        }

        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    // Change the view
    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }

    // Choose your weapon
    $("#choose_avatar").click(function(e){
    if (e.target.className.indexOf("ava_HTML") >= 0) {
      avatarClicked = e.target.parentNode.parentNode;
    } else {
      avatarClicked = e.target.parentNode;
    }
    var avatar_button_Array = $(".avatar_button");
    for (var i = 0; i < avatar_button_Array.length; i++) {
      var currentEl = avatar_button_Array[i]
      $(currentEl).removeClass(".avatar_button");
    };
    $(avatarClicked).addClass("avatar_selected")
    console.log("avatarClicked", avatarClicked);
    })


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