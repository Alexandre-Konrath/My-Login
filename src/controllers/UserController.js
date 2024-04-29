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
  }
}
