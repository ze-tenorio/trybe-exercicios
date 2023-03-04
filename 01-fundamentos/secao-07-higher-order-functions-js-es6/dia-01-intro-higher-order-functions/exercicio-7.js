const generateEmail = (name) => {
    const newName = name.toLowerCase().replace(' ', '_');
    const email = `${newName}@trybe.com`
    const employeeObj = {
        name,
        email,
    }
    return employeeObj;
}

const newEmployees = () => {
    const employees = {
      id1: generateEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: generateEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: generateEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees());