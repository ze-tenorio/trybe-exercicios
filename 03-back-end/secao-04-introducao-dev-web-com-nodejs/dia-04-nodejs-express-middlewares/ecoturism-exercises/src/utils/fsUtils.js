const generateToken = require('./generateToken');

const fs = require('fs').promises;

const getAllActivities = async () => {
  const data = await fs.readFile('./src/files/activities.json', 'utf-8');
  const parsedData = JSON.parse(data);
  return parsedData;
};

const getAllUsers = async () => {
  const data = await fs.readFile('./src/files/users.json', 'utf-8');
  const parsedData = JSON.parse(data);
  return parsedData;
};

const addActivity = async (activity) => {
  const data = await getAllActivities();
  const newActivitiesList = [...data.activities, activity];
  const newData = { "activities": newActivitiesList };
  await fs.writeFile('./src/files/activities.json', JSON.stringify(newData));
  return newData;
};

const addUser = async (user) => {
  const data = await getAllUsers();
  const token = generateToken();
  const userData = { ...user, "token": token }
  const newUserList = { "users": [...data.users, userData] };
  await fs.writeFile('./src/files/users.json', JSON.stringify(newUserList));
  return token;
}

module.exports = {
  addActivity,
  addUser,
  getAllUsers,
}