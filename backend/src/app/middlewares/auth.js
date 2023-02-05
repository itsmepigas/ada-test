const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const authConfig = require('../../config/auth');

module.exports = async (req, res, next) => {
  const token = req?.headers?.authorization?.split('Bearer ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Usuário não autenticado.' });
  }

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.user = { ...decoded };

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido.' });
  }
};
