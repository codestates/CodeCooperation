module.exports = (req, res) => {
  try {
    res.status(205).send({ data : null, message : "logout" });
  }  
  catch {
    res.status(500).send({ message : "logout err" })
  }
  };
  