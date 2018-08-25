import Sequelize from 'sequelize';
import Auth from '../auth/auth';
import connection from '../../config/database';

const User = connection.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  profileName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  profilePic: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  balance: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: true,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

// This will add auth_id into user
User.belongsTo(Auth, {
  foreignKey: 'authId',
});

export default User;
