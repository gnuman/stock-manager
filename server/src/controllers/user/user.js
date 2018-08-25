import User from '../../models/user/user';
import { createAuth } from '../auth/auth';

export const createUser = (email, password, profileName, profilePic) =>
  new Promise((resolve, reject) => {
    createAuth(email, password)
      .then((authId) =>
        User.create({ authId, profileName, profilePic })
          .then((user) => resolve(user.dataValues))
          .catch((error) => reject(error)),
      )
      .catch((error) => reject(error));
  });

export const getUserById = async (id) => {
  const { dataValues: user } = await User.findOne({
    where: {
      id,
    },
  });
  return user;
};

export const addBalance = async (userId, amount) => {
  /*
  const { dataValues: user } = await User.update({
      balance: amount,
    },{
      where: {    
        id: userId,
      }
    }
  );
 */
  const user = await User.findById(userId);
  const { dataValues: updatedUser } = await user.increment('balance', {
    by: amount,
  });
  const { balance } = updatedUser;
  return balance;
};

export const deleteBalance = async (userId, amount) => {
  const user = await User.findById(userId);
  const { dataValues: updatedUser } = await user.decrement('balance', {
    by: amount,
  });
  const { balance } = updatedUser;
  return balance;
};

export const getBalance = async (userId) => {
  const user = await getUserById(userId);
  const { balance } = user;
  return balance;
};
