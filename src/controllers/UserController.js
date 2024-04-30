const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const user = await User.findAll({
      limit:100,
    })
    return res.json(user)
  },

  // só sera visível no insomnia
  async store(req, res) {
    const { name, email, password_hash } = req.body;

    try {
      // Verifica se já existe um usuário com o email fornecido
      const existingUser = await User.findOne({ where: { email } });

      // Se já existir um usuário com esse email, retorna um erro
      if (existingUser) {
        return res.status(400).json({ error: 'Usuário já existe' });
      }

      // Se não existir, cria o novo usuário
      const user = await User.create({ name, email, password_hash });

      return res.json(user);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
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

    // autenticação foi bem-sucedida
    return res.json({ message: "Autenticação bem-sucedida." });
  },
};
