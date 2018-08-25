import Sequelize from 'sequelize';
import connection from '../../config/database';

const Auth = connection.define('auth', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically gets converted to SERIAL for postgres
  },
  passwordHash: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Auth;
