const fs = require('fs').promises;

const getAllActivities = async () => {
  const data = await fs.readFile('./src/files/activities.json', 'utf-8');
  const activities = JSON.parse(data);
  return activities;
};

const addActivity = async (activity) => {
  const data = await getAllActivities();
  const newActivitiesList = { "activities": [...data.activities, activity] };
  await fs.writeFile('./src/files/activities.json', JSON.stringify(newActivitiesList));
};

module.exports = {
  addActivity,
}