// ./src/index.ts
import { Connector, MySQLConnector, ReadOnlyConnector, ReadOnlyRedisConnector, RedisConnector } from './Connectors';

const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';

const SQLconn = new MySQLConnector({
  host: 'mysqldb',
  port: 3306,
  database: 'counter',
  user: 'root',
  password: 'example',
});

const redisConn = new RedisConnector({
  host: 'redisdb',
  port: 6379,
});

const readOnlyRedisConn = new ReadOnlyRedisConnector({
  host: 'redisdb',
  port: 6379,
});

// const main = (connector: Connector) => {
//   connector.firstCount(token);

//   const logCount = async () => {
//     try {
//       const count = await connector.getCount(token);
//       console.log(count);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const doSomeIncrements = () => {
//     logCount();
//     connector.incrementCount(token);
//     connector.incrementCount(token);
//     connector.incrementCount(token);
//   };

//   const incrementsInterval = setInterval(doSomeIncrements, 500);

//   setTimeout(() => {
//     clearInterval(incrementsInterval);
//     logCount();
//     connector.clearCount(token);
//     connector.closeConnection();
//   }, 5500);
// };

const main = async (connector: ReadOnlyConnector) => {
  const count = await connector.getCount(token);
  try {
    console.log(count);
  } catch (err) {
    console.error(err);
  }
}

main(SQLconn);
main(redisConn);
main(readOnlyRedisConn);

/*
Saída:
0
3
6
9
12
15
18
21
24
27
30
*/