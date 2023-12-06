import jwt from 'jsonwebtoken';
import userModel from '../../DB/Modeles/User.models.js'; 

export const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.json({ message: 'Authorization header is missing' });
    }

    if (!authorization.startsWith(process.env.BEARERKEY)) {
      return res.json({ message: 'Invalid authorization format' });
    }

    const token = authorization.replace(process.env.BEARERKEY, '').trim();

    const decoded = jwt.verify(token, process.env.LOGINSIGNATURE);

    const authUser = await userModel.findById(decoded.id).select('userName email');

    if (!authUser) {
      return res.json({ message: 'User not found' });
    }

    req.user = authUser;

    next();
  } catch (error) {
    return res.json({ message: 'Catch error', error: error.stack });
  }
};
