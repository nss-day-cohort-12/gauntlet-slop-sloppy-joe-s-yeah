describe("The specification for Gauntlet Group Project", function() {

// Gauntlet object
  it("should have a Gauntlet object", function() {
    expect(Gauntlet).toBeDefined();
  });


// Gauntlet.GuildHall object
  it("Gauntlet should have a GuildHall object", function() {
    expect(Gauntlet.GuildHall).toBeDefined();
  });

	it("Gauntlet should have a GuildHall.PlayerClass constructor", function() {
    expect(Gauntlet.GuildHall.PlayerClass).toBeDefined();
  });


// Fighter Constructors
	it("Gauntlet should have a GuildHall.Fighter constructor", function() {
    expect(Gauntlet.GuildHall.Fighter).toBeDefined();
  });

	it("Gauntlet should have a GuildHall.Warrior constructor", function() {
    expect(Gauntlet.GuildHall.Warrior).toBeDefined();
  });

	it("Gauntlet should have a GuildHall.Valkyrie constructor", function() {
    expect(Gauntlet.GuildHall.Valkyrie).toBeDefined();
  });

	it("Gauntlet should have a GuildHall.Berserker constructor", function() {
    expect(Gauntlet.GuildHall.Berserker).toBeDefined();
  });

	it("Gauntlet should have a GuildHall.Monk constructor", function() {
    expect(Gauntlet.GuildHall.Monk).toBeDefined();
  });


// Mage Constructors
	it("Gauntlet should have a GuildHall.Mage constructor", function() {
    expect(Gauntlet.GuildHall.Mage).toBeDefined();
  });

	it("Gauntlet should have a GuildHall.Shaman constructor", function() {
    expect(Gauntlet.GuildHall.Shaman).toBeDefined();
  });

	it("Gauntlet should have a GuildHall.Wizard constructor", function() {
    expect(Gauntlet.GuildHall.Wizard).toBeDefined();
  });

	it("Gauntlet should have a GuildHall.Conjurer constructor", function() {
    expect(Gauntlet.GuildHall.Conjurer).toBeDefined();
  });

	it("Gauntlet should have a GuildHall.Sorcerer constructor", function() {
    expect(Gauntlet.GuildHall.Sorcerer).toBeDefined();
  });


// Stealth Constructors
	it("Gauntlet should have a GuildHall.Stealth constructor", function() {
    expect(Gauntlet.GuildHall.Stealth).toBeDefined();
  });

	it("Gauntlet should have a GuildHall.Thief constructor", function() {
    expect(Gauntlet.GuildHall.Thief).toBeDefined();
  });

	it("Gauntlet should have a GuildHall.Ninja constructor", function() {
    expect(Gauntlet.GuildHall.Ninja).toBeDefined();
  });

	it("Gauntlet should have a GuildHall.Assassin constructor", function() {
    expect(Gauntlet.GuildHall.Assassin).toBeDefined();
  });


// Gauntlet.Combatants object
  it("Gauntlet should have a Combatants object", function() {
    expect(Gauntlet.Combatants).toBeDefined();
  });

// Player Constructor  
  it("Gauntlet should have a Combatants.Player constructor", function() {
    expect(Gauntlet.Combatants.Player).toBeDefined();
  });

// Player.setWeapon Method 
  it("Gauntlet.Combatants.Player should have a setWeapon method", function() {
    expect(Gauntlet.Combatants.Player.prototype.setWeapon).toBeDefined();
  });

// Player.generateClass Method 
  it("Gauntlet.Combatants.Player should have a generateClass method", function() {
    expect(Gauntlet.Combatants.Player.prototype.generateClass).toBeDefined();
  });

// Human Constructor  
  it("Gauntlet should have a Combatants.Human constructor", function() {
    expect(Gauntlet.Combatants.Human).toBeDefined();
  });

// Monster Constructor  
  it("Gauntlet should have a Combatants.Monster constructor", function() {
    expect(Gauntlet.Combatants.Monster).toBeDefined();
  });

// Orc Constructor
	it("Gauntlet should have a Combatants.Orc constructor", function() {
    expect(Gauntlet.Combatants.Orc).toBeDefined();
  });


// Gauntlet.SpellBook object
  it("Gauntlet should have a SpellBook object", function() {
    expect(Gauntlet.SpellBook).toBeDefined();
  });

// Spell Constructor
	it("Gauntlet should have a SpellBook.Spell constructor", function() {
    expect(Gauntlet.SpellBook.Spell).toBeDefined();
  });

// Sphere Constructor
	it("Gauntlet should have a SpellBook.Sphere constructor", function() {
    expect(Gauntlet.SpellBook.Sphere).toBeDefined();
  });


// Weapon Constructor
	it("There should e a Weapon constructor", function() {
    expect(Weapon).toBeDefined();
  });

// Dagger Constructor
	it("There should e a Dagger constructor", function() {
    expect(Dagger).toBeDefined();
  });

// BroadSword Constructor
	it("There should e a BroadSword constructor", function() {
    expect(BroadSword).toBeDefined();
  });

// WarAxe Constructor
	it("There should e a WarAxe constructor", function() {
    expect(WarAxe).toBeDefined();
  });

});









