const { User } = require('../models')
const bcrypt = require('bcryptjs')
class SessionController {
  async create (req, res) {
    return res.render('auth/signin')
  }

  async store (req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    console.log(user)
    if (!user) {
      console.log('Usuario não encontrado')
      return res.redirect('/')
    }
    // }
    // try {
    //   var result = await user.validatePassword(password)
    // } catch (error) {
    //   console.log(error)
    // }
    // console.log(result)
    // if (!await user.validatePassword(password)).catch((err)=>{console.log(err)}); {
    //   console.log('senha incorreta' + password)
    //   res.redirect('/')
    // }
    if (!await bcrypt.compare(password, user.password_hash)) {
      console.log('senha incorreta')
      return res.redirect('/')
    }
    return res.redirect('/signup')
  }
}
module.exports = new SessionController()
