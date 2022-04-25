const { user } = require('../../models');
const { generateAccessToken } = require('../tokenFunctions');

module.exports = async(req, res) => {
  if(!req.body.email || !req.body.password || !req.body.mobile || !req.body.username) {
    res.status(422).send('insufficient parameters supplied')
  }
  const userInfo = await user.findOne({where: {email:req.body.email , password:req.body.password},
  });
  if(!userInfo) {
    let token =  generateAccessToken(req.body);
     res.cookie("jwt",token).status(201).send({message:'ok'})
  } else {
     res.status(409).send('email exists');
  }
};