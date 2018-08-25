import Sequelize from 'sequelize';

require('dotenv').config();
// For running server locally i.e not in docker container
// spcify DB_CONN_URL in .env file
// https://stackoverflow.com/questions/33357567/econnrefused-for-postgres-on-nodejs-with-dockers
//  without docker url look like this
// DATABASE_URL: postgres://username:pgpassword@127.0.0.1:5432/mydatabase

const DB_CONN_URL =
  process.env.DB_CONN_URL ||
  `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@postgres:5432/${
    process.env.PG_DEFAULT_DB
  }`;

const connection = new Sequelize(DB_CONN_URL, {
  operatorsAliases: false,
});

export default connection;
