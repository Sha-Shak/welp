const { getUserByEmail, getUserById, editUser, getMatches, getRandomUsers } = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = process.env.JWT_SECRET

async function login (req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      res.status(401).send('Invalid fields.');
      return;
    }

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



async function getProfile (req, res) {
  try {
    if (req.user.id == req.params.id) {
      const id = req.params.id;
      const userList = await getUserById(id);
      const user = userList[0];
      res.status(200).send(user);
    } else {
      res.status(401).send('Unauthorized to see this profile.')
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}



async function editProfile (req, res) {
  try {
    if (req.user.id) {
      const id = req.user.id;
      const newInfo = req.body;

      const result = await editUser(id, newInfo);
      res.status(200).send(result);
    } else {
      res.status(401).send('Unauthorized to edit this profile.');
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function getSuggestions(req, res) {
  try {
    if (req.user) {
      const user = req.user;
      const result = await getMatches(user);

      if (result.length > 0) {
        res.status(200).send(result);
      } else {
        const randomRes = await getRandomUsers(user);
        res.status(200).send(randomRes);
      }
    } else {
      res.status(401).send('Unauthorized to get matches.');
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


module.exports = {
  login,
  getProfile,
  editProfile,
  getSuggestions
}