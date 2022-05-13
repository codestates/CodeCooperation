const { user } = require("../../models");

module.exports = {
  userSignUp : async (req, res) => {
    if(!req.body.eamil || !req.body.password) {
      res.status(422).send("insufficient parameters supplied")
    }
    user.findOrCreate({
      where : {email : req.body.email},
      default : {
        email : req.body.email,
        password : req.body.password,
        nickname : req.body.nickname
      }
    })
    .then(([result, created]) => {
      if(created) {
        res.status(201).send({ message : "created!" })
      } else {
        res.status(409).send({ message : "email exist" })
      }
    })
  }
}