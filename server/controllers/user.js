const { getUserByEmail } = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = process.env.JWT_SECRET

async function login (req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const checkUser = await getUserByEmail(email);

    if (checkUser.length === 1) {
      if (bcrypt.compareSync(password, checkUser[0].password)) {
        const token = jwt.sign({id: checkUser[0].id}, secret, {expiresIn:'1h'});
        res.setHeader('Authorization', 'Bearer ' + token);
        res.status(200).send(checkUser[0]);
      } else {
        res.status(401).send('Incorrect credentials.');
      }
    } else {
      res.status(403).send('User has not been added, yet. Please contact your organization for further inquiry.');
    }
    
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


module.exports = {login}