require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
    generateAccessToken : (data) => {
        // console.log(data)
        const accessToken = sign({data}, process.env.ACCESS_SECRET, { expiresIn: '1h' });
        return accessToken;
    },
    // sendAccessToken : (res, accessToken) => {
    //     // console.log(accessToken)
    //     res.cookie("jwt", accessToken);
    //     res.status(200).send({ data: accessToken, message : "토큰발급" })
    // },
    isAuthorized : (req) => {
        const cookie = req.cookies;
        if(!cookie.jwt) {
            return '';
        } else {
            return verify(cookie.jwt, process.env.ACCESS_SECRET);
        }
    }
}