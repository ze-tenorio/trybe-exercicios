const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addShift = (object, key, value) => {
    object[key] = value
  }

  addShift(lesson2, 'turno', 'noite');

  const showObjectsKeys = (object) => {
    return Object.keys(object);
  }

//   console.log(showObjectsKeys(lesson1));

  const showObjectLength = (object) => {
    return Object.keys(object).length
  }

//   console.log(showObjectLength(lesson2));

  const showObjectValues = (object) => {
    return Object.values(object);
  }

//   console.log(showObjectValues(lesson3));

  const allLessons = {};
  allLessons.lesson1 = lesson1;
  allLessons.lesson2 = lesson2;
  allLessons.lesson3 = lesson3;

//   console.log(allLessons);

const studentsCounter = () => {
    return `Total de estudantes: ${allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes}`
}

// console.log(studentsCounter());

const getValueByNumber = (object, position) => {
    return Object.values(object)[position]
}

// console.log(getValueByNumber(lesson1, 0));

const verifyPair = (object, key, value) => {
    const arr = Object.entries(object)
    for (let p of arr) {
        if (p[0] === key && p[1] === value) {
            return true;
        }
    }
    return false;
}

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false