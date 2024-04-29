const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const user = await User.findAll({
      limit:100,
    })
    return res.json(user)
  },

  async store(req, res) {
    const { name, email, password_hash } = req.body

    const user = await User.create({ name, email, password_hash })

    return res.json(user)
  },

  async login(req, res) {
    const { email, password_hash } = req.body;

    // Verifica se o usuário existe no banco de dados
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado." });
    }

    // Verifica se a senha está correta
    if (user.password_hash !== password_hash) {
      return res.status(401).json({ error: "Senha incorreta." });
    }

    // Se chegou até aqui, a autenticação foi bem-sucedida
    return res.json({ message: "Autenticação bem-sucedida." });
  },
};
