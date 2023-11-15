abstract class Character {
  protected _name: string;
  constructor (name: string) {
    this._name = name;
  }
  abstract talk(): void;
  abstract specialMove():void;
}

class MeleeCharacter extends Character {
  talk () {
    console.log(`${this._name} fala baixinho`);
  }

  specialMove(): void {
    console.log(`${this._name} dá um ataque especial melee!`);
  }
}

class LongRangeCharacter extends Character {
  talk () {
    console.log(`${this._name} fala gritando`);
  }

  specialMove(): void {
    console.log(`${this._name} dá um ataque especial de longa distância!`);
  }
}

const characterTurn = (character: Character) => {
  character.talk();
  character.specialMove();
}

const yoshi = new MeleeCharacter('Yoshi');
const samus = new LongRangeCharacter('Samus');

characterTurn(yoshi);
characterTurn(samus);