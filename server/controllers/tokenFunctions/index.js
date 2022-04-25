require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: async(data) => {
    let token = await sign(data, process.env.ACCESS_SECRET)
    return token;
  },
  sendAccessToken: (res, accessToken) => {
    res.json({ message: 'ok' });
  },
  isAuthorized: (req) => {
   if(!req.headers.cookie) {
     return;
   }
    let authtoken = req.headers.cookie.split('=')[1].split(' ')[0];
    let clonetoken = authtoken.slice(0,authtoken.length-1)
    let decodedata ;
    
    verify(clonetoken,process.env.ACCESS_SECRET,(err,decoded)=> {
      decodedata = decoded;
    });
    return decodedata;
  }
};
