interface Character {
  name: string;
  specialAttack: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  addCharacter(char: Character): Promise<DbCharacter>;
  getCharacter(id: number): Promise<DbCharacter>;
  editCharacter(id: number, editedChar: Character): Promise<DbCharacter>;
  removeCharacter(id: number): Promise<string>;
}

class LocalDbModel implements IModel {
  async addCharacter(char: Character) {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...char };
    db.push(newCharacter);
    return newCharacter;
  };

  async getCharacter(id: number) {
    const queriedChar = db.find((char) => char.id === id);
    if (!queriedChar) throw new Error('Character not found');
    return queriedChar;
  };

  async editCharacter(id: number, editedChar: Character) {
    const index = db.findIndex((char) => char.id === id);
    if (index < 0) throw new Error('Character not found');
    db[index] = { id, ...editedChar };
    return db[index];
  };

  async removeCharacter(id: number) {
    const index = db.findIndex((char) => char.id === id);
    if (index < 0) throw new Error('Character not found');
    db.splice(index, 1);
    return 'Personagem removido';
  }
};

class CharacterService {
  constructor(readonly dbModel: IModel = new LocalDbModel()) { }

  async create(character: Character) {
    const newCharacter = await this.dbModel.addCharacter(character);
    return ({ status: 201, data: newCharacter });
  }

  async read(id: number) {
    const queriedCharacter = await this.dbModel.getCharacter(id);
    return ({ status: 200, data: queriedCharacter });
  }

  async update(id: number, editedCharacter: Character) {
    const newEditedCharacter = await this.dbModel.editCharacter(id, editedCharacter);
    return ({ status: 200, data: newEditedCharacter });
  }

  async deleteChar(id: number) {
    const deleted = await this.dbModel.removeCharacter(id);
    return ({ status: 200, data: deleted });
  }
};

class MockedDbModel implements IModel {
  async addCharacter(character: Character) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialAttack: 'Toad' };
  }

  async editCharacter(id: number, character: Character) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialAttack: 'Egg Lay' };
  }

  async removeCharacter(id: number) {
    return 'character deleted';
  }

  async getCharacter(id: number) {
    return { id: 1, name: 'Mario', specialAttack: 'Fireball' };
  }
};

const databaseModel = new LocalDbModel();
const mockedModel = new MockedDbModel();
const yoshiCreation = new CharacterService(databaseModel);