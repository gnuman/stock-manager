import Stocks from '../../models/stocks/stocks';
import { getBalance, deleteBalance } from '../../controllers/user/user';

/*
const findOrCreateScript = async (userId, scriptId, quantity) => {
  const stocks = await Stocks.findOrCreate({
    where: {
      scriptId,
      userId,
    },
    defaults: {
      quantity
    },
    attributes: ['id', 'quantity']
  });
  return stocks[0].dataValues;
};
*/

const createScript = async (userId, scriptId, quantity) => {
  const { dataValues: stock } = await Stocks.create({
    userId,
    scriptId,
    quantity,
  });
  return stock;
};

export const buyStocks = (userId, scriptId, quantity, price) =>
  // eslint-disable-next-line
  new Promise(async (resolve, reject) => {
    const userBalance = await getBalance(userId);
    const scriptValue = quantity * price;
    if (scriptValue > userBalance) {
      return reject(new Error('Not enough balance'));
    }

    const whereClause = {
      where: {
        scriptId,
        userId,
      },
    };

    Stocks.findOne(whereClause)
      .then((stocks) => {
        if (stocks === null) {
          createScript(userId, scriptId, quantity);
          deleteBalance(userId, scriptValue);
          resolve({ scriptId, quantity });
        } else {
          const prevQuantity = stocks.quantity;
          const newQuantity = prevQuantity + quantity;
          Stocks.update(
            {
              quantity: newQuantity,
            },
            {
              where: {
                scriptId,
                userId,
              },
            },
          ).then(() => {
            deleteBalance(userId, scriptValue);
            resolve({ scriptId, quantity:newQuantity });
          });
        }
      })
      .catch((error) => reject(error));
  });

export const sellStocks = (id, scriptName, quantity, price) =>
  new Promise((resolve, reject) =>
    Stocks.create({ scriptName, quantity, price })
      .then((stock) => resolve(stock.dataValues))
      .catch((error) => reject(error)),
  );

export const stockBalance = (id) => [id];
