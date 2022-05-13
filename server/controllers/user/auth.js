const { isAuthorized } = require('../jwtToken');

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);

  if(accessTokenData) {
    res.status(200).send({ data : { user : accessTokenData}})
  } else {
    res.status(401).send({ data: null, message: 'not authorized' });
  }
};
