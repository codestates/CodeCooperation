const { user } = require("../../models");
module.exports = (req, res) => {
    const { email, password, nickname } = req.body;
    if( !email || !password || !nickname) {
      res.status(422).send("insufficient parameters supplied")
    }
    user.findOrCreate({
      where : { email },
      defaults : {
        email,
        password,
        nickname
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
