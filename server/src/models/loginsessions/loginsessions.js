import Sequelize from 'sequelize';
import connection from '../../config/database';

import User from '../user/user';

const LoginSessions = connection.define('loginsessions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Automatically gets converted to SERIAL for postgres
  },
  secretKey: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  expiryTime: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// This will add auth_id into user
LoginSessions.belongsTo(User, {
  foreignKey: 'userId',
});

export default LoginSessions;
