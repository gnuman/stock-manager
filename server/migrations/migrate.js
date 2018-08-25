require('dotenv').config();

const {
  PG_HOST,
  PG_DEFAULT_DB,
  PG_USER,
  PG_PASSWORD,
  DATABASE_URL,
} = process.env;

const connectionString =
  DATABASE_URL || `postgresql://${PG_HOST}:5432/${PG_DEFAULT_DB}`;
console.log('executing migrations...');
require('child_process').execSync(
  `flyway -url="jdbc:${connectionString}"  -user=${PG_USER} -password=${PG_PASSWORD} -locations=filesystem:./migrations/sql migrate`,
  { stdio: [0, 1, 2] },
);
