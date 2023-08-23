const app = require('./app');
const connection = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API TrybeCash running on port ${PORT}`);
})