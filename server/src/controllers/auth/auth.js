import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import { promisify } from 'util';
import Auth from '../../models/auth/auth';
import LoginSession from '../../models/loginsessions/loginsessions';
import User from '../../models/user/user';

const ONE_WEEK_IN_SECONDS = 7 * 24 * 60 * 60;

export const createAuth = (email, password) =>
  new Promise((resolve, reject) => {
    Auth.create({ email, passwordHash: bcrypt.hashSync(password, 8) })
      .then((auth) => resolve(auth.dataValues.id))
      .catch((error) => reject(error));
  });

export const createSession = async (email, password) => {
  const { dataValues: auth } = await Auth.findOne({
    where: { email },
  });
  if (!auth || !bcrypt.compareSync(password, auth.passwordHash)) {
    return null;
  }
  const { dataValues: user } = await User.findOne({
    where: {
      authId: auth.id,
    },
  });
  const secret = await promisify(randomBytes)(256).toString('hex');
  const { dataValues: session } = await LoginSession.create({
    secretKey: secret,
    expiryTime: ONE_WEEK_IN_SECONDS,
    userId: user.id,
  });
  return jwt.sign(
    {
      id: session.id,
      userId: session.userId,
    },
    secret,
    {
      expiresIn: session.expiryTime,
    },
  );
};

export const sessionFromToken = async (token) => {
  const { id } = jwt.decode(token);
  const { dataValues: session } = await LoginSession.findOne({
    where: {
      id,
    },
  });
  return session;
};

export const getAuthenticatedUserIdFromToken = async (token) => {
  const session = await sessionFromToken(token);
  const { userId } = jwt.verify(token, session.secretKey);
  return userId;
};
