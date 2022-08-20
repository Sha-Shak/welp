const jwt = require('jsonwebtoken');
const { getUserById } = require('../models/user');
const secret = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
  try {
    if (req.get('Authorization')) {
      const token = req.get('Authorization').split(' ')[1];
      const { id } = jwt.verify(token, secret);
      const user = await getUserById(id);
      if(user.length === 1) {
        req.user = user[0];
        next();
      } else {
        res.status(401).send('You are not logged in!');
      }
    } else {
      res.status(401).send('You are not logged in!');
    }

  } catch (error) {
    if(error instanceof jwt.TokenExpiredError) {
      res.status(401).send('Access token has expired.')
    }
    res.status(500);
    console.log(error);
  }
};

module.exports = authMiddleware;
