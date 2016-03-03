"use strict";

function attack () {
	//Access enemy's health
	var enemyHealth = Enemy1.health;
	//Access player's attack
	var playerDamage = Player1.weapon.damage;
	// Randomize the multiplier
	playerDamage = Math.floor((Math.random()*10) * playerDamage);
	console.log("Player1 initial damage:", playerDamage);
	//Access and add player extra damage (strength) to attack
	playerDamage += Player1.strength;
	console.log("Player1 damage with strength", playerDamage);
	//Access enemy's defense and subtract from damage
	var enemyDefense = Enemy1.intelligence;
	playerDamage -= enemyDefense;
	//Subtract total Damage from current Enemy health and display to DOM
	enemyHealth -= playerDamage;
	console.log("Enemy blocked", enemyDefense, "damage");
	Enemy1.health = enemyHealth;
	console.log("new Enemy health:",enemyHealth);



	//Access player's health
	var playerHealth = Player1.health;
	//Access enemy's attack
	var enemyDamage = Enemy1.weapon.damage;
	// Randomize the multiplier
	enemyDamage = Math.floor((Math.random()*10) * enemyDamage);
	console.log("Enemy initial damage:", enemyDamage);
	//Access and add enemy extra damage (strength) to attack
	enemyDamage += Enemy1.strength;
	console.log("Enemy damage with strength", enemyDamage);
	//Access player's defense and subtract from damage
	var playerDefense = Player1.intelligence;
	enemyDamage -= playerDefense;
	//Subtract total Damage from current Player health and display to DOM
	playerHealth -= enemyDamage;
	console.log("Player1 blocked", playerDefense, "damage");
	Player1.health = playerHealth;
	console.log("new Player1 health:",playerHealth);


	$("#player1_health_bar").width(playerHealth)
	$("#player1_health_bar").html(playerHealth);
	$("#enemy1_health_bar").width(enemyHealth);
	$("#enemy1_health_bar").html(enemyHealth);
	if (enemyHealth <= 0) {
		Enemy1.health = 0;
		console.log("Enemy1.health", Enemy1.health);
		alert("The Monster Has Been Destroyed!");
		$('#attack').prop('disabled', true);
		$('#attack').html("GAME OVER")
		return;
	};

	if (playerHealth <= 0) {
		Player1.health = 0;
		$("#player1_health_bar").width(Player1.health);
		console.log("Player1.health", Player1.health);
		console.log("Player1 dead", Player1.health);
		alert("Player1 Has Been Vanquished!");
		$('#attack').prop('disabled', true);
		$('#attack').html("GAME OVER")
	};

}

$("#attack").click(function(){
	attack();
});


















