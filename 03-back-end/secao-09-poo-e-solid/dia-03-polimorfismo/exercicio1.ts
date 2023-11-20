abstract class Character {
  protected _name: string;
  constructor (name: string) {
    this._name = name;
  }
  abstract talk(): void;
  abstract specialMove():void;
  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
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

const yoshi = new MeleeCharacter('Yoshi');
const samus = new LongRangeCharacter('Samus');

Character.characterPresentation(yoshi);
Character.characterPresentation(samus);
