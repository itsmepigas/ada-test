const jwt = require('jsonwebtoken');

const Users = require('../models/Users');

const authConfig = require("../../config/auth");

class CardsController {
  async signIn(req, res) {
    const { user, pass } = req.body;

    const User = await Users.findOne({ where: { user } });

    if (!User || !(await User.checkPassword(pass))) 
      return res.status(401).json({ error: "Usuário ou senha inválidos" });

    delete User.password;

    return res.json({
      user: User?.name,
      token: jwt.sign(
        {
          user_id: User?.id,
          user: User?.name,
        },
        authConfig.secret
      ),
    });
  }

  async signUp(req, res) {
    const { name, user, pass } = req.body;

    const exist = await Users.findOne({ where: { user } });

    if (exist) return res.status(400).json({
      error: "Já existe um cadastro para este usuário, por favor tente novamente ou efetue o login"
    });

    const User = await Users.create({ name, user, pass });

    delete User.password;

    return res.json({
      user: User?.name,
      token: jwt.sign(
        {
          user_id: User?.id,
          user: User?.name,
        },
        authConfig.secret
      ),
    });
  }
}

module.exports =  new CardsController();