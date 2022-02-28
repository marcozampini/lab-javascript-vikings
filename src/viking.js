// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`
    else return `${this.name} has died in act of combat`
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`
    else return `A Saxon has died in combat`
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  attack(attackingArmy, attackedArmy) {
    const attackedSoldierIndex = Math.floor(Math.random() * attackedArmy.length)
    const attackedSoldier = attackedArmy[attackedSoldierIndex]
    const AttackingSoldierIndex = Math.floor(
      Math.random() * attackingArmy.length
    )
    const attackingSoldier = attackingArmy[AttackingSoldierIndex]
    const damageMessage = attackedSoldier.receiveDamage(
      attackingSoldier.strength
    )

    if (damageMessage.endsWith('combat')) {
      attackedArmy.splice(attackedSoldierIndex, 1)
    }
    return damageMessage
  }

  vikingAttack() {
    /*const chosenSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const chosenVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)

    this.saxonArmy[chosenSaxonIndex].receiveDamage(
      this.vikingArmy[chosenVikingIndex].strength
    )

    if (this.saxonArmy[chosenSaxonIndex].health <= 0) {
      this.saxonArmy.splice(chosenSaxonIndex, 1)
      return `A Saxon has died in combat`
    } else
      return `A Saxon has received ${this.vikingArmy[chosenVikingIndex].strength} points of damage`*/
    return this.attack(this.vikingArmy, this.saxonArmy)
  }

  saxonAttack() {
    /*const chosenVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    const chosenSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)

    this.vikingArmy[chosenVikingIndex].receiveDamage(
      this.saxonArmy[chosenSaxonIndex].strength
    )

    if (this.vikingArmy[chosenVikingIndex].health <= 0) {
      let deadViking = this.vikingArmy.splice(chosenVikingIndex, 1)
      return `${deadViking.name} has died in combat`
    } else
      return `${this.vikingArmy[chosenVikingIndex].name} has received ${this.saxonArmy[chosenSaxonIndex].strength} points of damage`*/
    return this.attack(this.saxonArmy, this.vikingArmy)
  }
  showStatus() {
    if (this.saxonArmy.length === 0)
      return 'Vikings have won the war of the century!'
    if (this.vikingArmy.length === 0)
      return 'Saxons have fought for their lives and survived another day...'
    return 'Vikings and Saxons are still in the thick of battle.'
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War }
}
