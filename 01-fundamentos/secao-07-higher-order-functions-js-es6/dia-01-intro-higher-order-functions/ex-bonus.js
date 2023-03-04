const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonAttack = () => Math.round(Math.random() * 35 + 15);

  const warriorAttack = (warrior) => Math.round(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength);

  const mageAttack = (mage) => {
    const newObj = {};
    const damage = Math.round(Math.random() * (mage.intelligence * 2 - mage.intelligence) + mage.intelligence);
    newObj.damageDealt = damage;
    newObj.manaSpent = 15;
    if (mage.mana < 15) {
        newObj.damageDealt = 'Não possui mana suficiente';
        newObj.manaSpent = 0;
    };
    return newObj
  };

  const gameActions = {
    warriorTurn: (warriorAttack) => {
        const warriorDamage = warriorAttack(warrior);
        dragon.healthPoints -= warriorDamage;
        warrior.damage = warriorDamage;
    },
    mageTurn: (mageAttack) => {
        const mageObj = mageAttack(mage);
        const mageDamage = mageObj.damageDealt;
        const mageMana = mageObj.manaSpent;
        dragon.healthPoints -= mageDamage;
        mage.damage = mageDamage;
        mage.mana -= mageMana;
    },
    dragonTurn: (dragonAttack) => {
        const dragonDamage = dragonAttack();
        warrior.healthPoints -= dragonDamage;
        mage.healthPoints -= dragonDamage;
        dragon.damage = dragonDamage;
    },
    turnResult: () => battleMembers,
  };

  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.turnResult());