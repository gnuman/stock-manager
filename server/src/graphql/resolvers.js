import {
  createUser,
  getUserById,
  addBalance,
  getBalance,
} from '../controllers/user/user';
import {
  createSession,
  getAuthenticatedUserIdFromToken,
} from '../controllers/auth/auth';

import {
  buyStocks,
  sellStocks,
  stockBalance,
} from '../controllers/stocks/stocks';

export const resolvers = {
  Query: {
    currentUser: async (_, { token }) => {
      const userId = await getAuthenticatedUserIdFromToken(token);
      return {
        id: userId,
      };
    },
  },
  Mutation: {
    createUser: async (_, { email, password, profileName, profilePic }) => {
      const usr = await createUser(email, password, profileName, profilePic);
      return usr;
    },
    createSession: (_, { email, password }) => createSession(email, password),
    addBalance: (_, { userId, amount }) => addBalance(userId, amount),
    buyStocks: (_, { userId, scriptId, quantity, price }) =>
      buyStocks(userId, scriptId, quantity, price),
    sellStocks: (_, { userId, scriptId, quantity, price }) =>
      sellStocks(userId, scriptId, quantity, price),
  },
  User: {
    profileName: async ({ id }) => {
      const { profileName } = await getUserById(id);
      return profileName;
    },
    stockBalance: async ({ id }) => {
      const stocks = await stockBalance(id);
      return stocks;
    },
    moneyBalance: async ({ id }) => getBalance(id),
  },
  Stock: {
    //
  },
};
