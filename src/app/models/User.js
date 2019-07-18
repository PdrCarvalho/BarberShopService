const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN
  },
  {
    classMethods: {
      teste: function () { return true },
      validatePassword: function (password) { return bcrypt.compare(password, this.password_hash) }
    },
    instanceMethods: {
      validatePassword: function (password) { return bcrypt.compare(password, this.password_hash) }
    },
    hooks: {
      beforeSave: async user => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8)
        }
      }
    }

  })
  // User.instance.teste = function () {
  //   console.log('teste')
  // }

  // User.instance.prototype.checkPassword = function (password) {
  //   return bcrypt.compare(password, this.password_hash)
  // }
  // User.checkPassword = (password) => {
  //   return bcrypt.compare(password, this.password_hash)
  // }
  // console.log('retorno da função :' + User.validatePassword('123123'))
  return User
}
