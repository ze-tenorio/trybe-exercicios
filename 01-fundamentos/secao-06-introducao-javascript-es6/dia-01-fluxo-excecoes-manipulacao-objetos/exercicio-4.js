const student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  const student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };

  const showSkills = (student) => {
    const arrayOfSkills = Object.keys(student)
    for (key of arrayOfSkills) {
        console.log(`Nome da habilidade: ${key}, Nível: ${student[key]}`);
    }
  }

showSkills(student2);