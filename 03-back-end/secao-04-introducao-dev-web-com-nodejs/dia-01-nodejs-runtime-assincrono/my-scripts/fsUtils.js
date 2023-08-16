const fs = require('fs').promises;

const getAllSimpsons = async () => {
  const data = await fs.readFile('./simpsons.json');
  const allSimpsons = JSON.parse(data);
  return allSimpsons;
}

const simpsonsReader = async () => {
  const allSimpsons = await getAllSimpsons();
  allSimpsons.forEach((simpson) => console.log(`${simpson.id} - ${simpson.name}`));
}

const getSimpson = async (id) => {
  const allSimpsons = await getAllSimpsons();
  const chosenSimpson = allSimpsons.find((simpson) => Number(simpson.id) === id);
  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }
  return chosenSimpson;
}

const removeSimpsons = async () => {
  const allSimpsons = await getAllSimpsons();
  const newSimpsonsList = allSimpsons.filter((simpson) => Number(simpson.id) !== 10 && Number(simpson.id) !== 6);
  try{
    await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsonsList));
    console.log('arquivo alterado');
  } catch (err) {
    console.error(err.message);
  }
}

const createNewSimpsonsList = async () => {
  const allSimpsons = await getAllSimpsons();
  const newSimpsons = allSimpsons.filter((simp) => simp.id <= 4);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsons));
}

const insertNewSimpson = async () => {
  const allSimpsons = await getAllSimpsons();
  const data = await fs.readFile('./simpsonFamily.json');
  const simpsonFamily = JSON.parse(data);
  const nelson = allSimpsons.find((simp) => simp.name === 'Nelson Muntz');
  console.log(simpsonFamily);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify([...simpsonFamily, nelson]));
}

const insertMaggieIntoNelson = async () => {
  const allSimpsons = await getAllSimpsons();
  const data = await fs.readFile('./simpsonFamily.json');
  const simpsonFamily = JSON.parse(data);
  const simpsonsWithoutNelson = simpsonFamily.filter((simp) => simp.name !== 'Nelson Muntz');
  console.log(simpsonsWithoutNelson);
  const maggie = allSimpsons.find((simpson) => simpson.name === 'Maggie Simpson');
  const simpsonsWithMaggie = [...simpsonsWithoutNelson, maggie];
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsWithMaggie));
}

const main = async () => {
  insertMaggieIntoNelson();
}

main()