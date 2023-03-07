
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  
  const thirdObject = {
    ...user,
    ...jobInfos,
  }

  const { name: myName, age, nationality, profession, squadInitials, squad } = thirdObject;

  const objectDataPhrase = `Hi, my name is ${myName}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;

  console.log(objectDataPhrase);
