// // Bônus
// // Parte I - Game Actions Simulator
// // Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

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
warrior.damage



const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// // 1 - Crie uma função que retorna o dano do dragão.
const damageDragon = () => { return Math.floor((Math.random() * dragon.strength) + 15) }

// // 2 - Crie uma função que retorna o dano causado pelo warrior.
const damageWarrior = () => { return Math.floor((Math.random() * (warrior.strength * warrior.weaponDmg)) + warrior.strength) }

// // 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
const spentMage = () => {
  const damageMage = Math.floor((Math.random() * (mage.intelligence * 2)) + mage.intelligence);
  let manaMage = 125;
  manaMage -= 15;
  if (manaMage < 15) {
    return 'Não possui mana suficiente';
  }
  const object = { dano: damageMage, mana: manaMage };
  // console.log(object);
  return object;
}
console.log(spentMage());

const gameActions = {
  // // 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.
  turnoWarrior: () => {
    warrior.damage = damageWarrior();
    dragon.healthPoints = warrior.damage - dragon.healthPoints;
  },

  // // 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.  
  turnoMage: () => {
    const mageAttack = spentMage();
    mage.damage = mageAttack.dano;
    mage.mana = mageAttack.mana
    dragon.healthPoints = mage.damage - dragon.healthPoints;
    return mage.mana;
  }
}

console.log(gameActions.turnoMage());
