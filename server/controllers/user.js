const { getUserByEmail, getUserById, editUser, getMatches, getRandomUsers, setNewPassword } = require("../models/user");
const { validEmail, validPassword, validEditFields } = require("../middleware/validate");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validate = require("../middleware/validate");
const secret = process.env.JWT_SECRET

async function login (req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // if (!validEmail(email) || !validPassword(password)) {
    if (!email || !password) {
      res.status(401).send('Invalid fields.');
      return;
    }

    const checkUser = await getUserByEmail(email);

    if (checkUser.length === 1) {
      const user = checkUser[0];
      if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({id: user.id}, secret, {expiresIn:'1h'});
        res.setHeader('Authorization', 'Bearer ' + token);

        delete user.password;
        res.status(200).send(user);
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



async function getOwnProfile (req, res) {
  try {
    if (req.user) {
      const id = req.user.id;
      const userList = await getUserById(id);
      const user = userList[0];
      delete user.password;
      res.status(200).send(user);
    } else {
      res.status(401).send('Unauthorized to see this profile.')
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function getProfile (req, res) {
  try {
    if (req.user) {
      const id = req.params.id;
      const userList = await getUserById(id);
      const user = userList[0];
      delete user.password;

      if (req.user.organization_id === user.organization_id)
        res.status(200).send(user);
      else 
        res.status(401).send('Requested profile is not in your organization.');
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
      
      if (validEditFields(newInfo)) {
        const result = await editUser(id, newInfo);
        res.status(200).send(result);
      } else {
        res.status(400).send('Invalid body fields.')
      }
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


async function getRandomUser (req, res) {
  try {
    if (req.user) {
      const user = req.user;
      const randomRes = await getRandomUsers(user);

      if (randomRes.length > 0) {
        const length = randomRes.length;
        const randomIndex = Math.floor(Math.random() * length);
        const randomUser = randomRes[randomIndex];
        res.status(200).send(randomUser);
      } else {
        res.status(200).send([]);
      }
    } else {
      res.status(401).send('Unauthorized to get matches.');
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function changePassword (req, res) {
  try {
    if (req.user) {
      const user = req.user;
      const oldPassword = req.body.oldPassword;
      const newPassword = req.body.newPassword;

      if (bcrypt.compareSync(oldPassword, user.password)) {
        const salt = bcrypt.genSaltSync(10);
        const password = bcrypt.hashSync(newPassword, salt);

        const newUserInfo = await setNewPassword(user.id, password);
        
        res.status(200).send(newUserInfo);
      } else {
        res.status(401).send('Incorrect password.');
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
  getOwnProfile,
  editProfile,
  getSuggestions,
  getOwnProfile,
  getRandomUser,
  changePassword
}