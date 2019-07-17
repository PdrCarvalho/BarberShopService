const { User } = require('../models')
class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    req.body.avatar = req.file.filename
    console.log(req.body)
    await User.create(req.body)
    return res.redirect('/')
  }
}
module.exports = new UserController()
