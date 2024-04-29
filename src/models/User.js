const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(connectiondb) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password_hash: DataTypes.STRING
    },
    {
      sequelize: connectiondb
    })
  }
}

module.exports = User
