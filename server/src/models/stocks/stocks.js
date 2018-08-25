import Sequelize from 'sequelize';
import User from '../user/user';
import connection from '../../config/database';

const Stocks = connection.define('stocks', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  scriptId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

// This will add auth_id into user
Stocks.belongsTo(User, {
  foreignKey: 'userId',
});

export default Stocks;
