import Users from '../models/UserModel.js';

export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: 'Login to your account please' });
  }
  const user = await Users.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: 'user not founded' });
  req.userId = user.id;
  req.role = user.role;
  next();
};

export const adminOnly = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: 'Login to your account please' });
  }
  const user = await Users.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: 'user not founded' });
  if (user.role !== 'admin')
    return res.status(403).json({ msg: 'Access porbhited' });
  next();
};
