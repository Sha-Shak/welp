const { getUserByEmail } = require("../models/user");

async function login (req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const checkUser = await getUserByEmail(email);
    
    if (checkUser.length === 1) {
      if (password === checkUser[0].password) {
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