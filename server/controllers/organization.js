const { addOrganization, addAdminToOrganization } = require("../models/organization");
const { addUser, getUserByEmail, getOrgUsers, deleteUser } = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = process.env.JWT_SECRET


async function createNewOrganization (req, res) {
  try {
    const checkUser = await getUserByEmail(req.body.email);
    if (checkUser.length < 1) {
      const org = {name: req.body.orgName, type: req.body.type};
      const queryResult = await addOrganization(org);

      const salt = bcrypt.genSaltSync(10);
      const password = bcrypt.hashSync(req.body.password, salt);
  
      const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: password,
        organization_id: queryResult.id,
        type: 'admin',
        location: '',
        interests: [],
        bio: '',
        img_url: ''
      }
  
      const addUserRes = await addUser(user);
  
      const admin = {
        organization_id: queryResult.id,
        admin_id: addUserRes.id,
      }
  
      await addAdminToOrganization(admin);

      const token = jwt.sign({id: addUserRes.id}, secret, {expiresIn:'1h'});
      res.setHeader('Authorization', 'Bearer ' + token);
      res.status(201).send(addUserRes);
    } else {
      res.status(401).send('This email is already in use.');
    }
    
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function getOrganizationUsers(req, res) {
  try {
    if (req.user.organization_id == req.params.id && req.user.type === 'admin') {
      const orgId = req.params.id;
      const result = await getOrgUsers(orgId);
      res.status(200).send(result);
    } else {
      res.status(403).send('You do not have admin access for this organization.');
    }

  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function deleteOrganizationUser(req, res) {
  try {
    if (req.user.organization_id === req.params.id && req.user.type === admin) {
      const orgId = req.params.id;
      const userId = req.params.userId;
      const result = await deleteUser(userId, orgId);
      res.status(200).send(result);
    } else {
      res.status(403).send('You do not have admin access for this organization.');
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}



async function addUserToOrganization (req, res) {
  try {
    if (req.user.organization_id == req.params.id && req.user.type === "admin") {
      const orgId = req.params.id;

      const salt = bcrypt.genSaltSync(10);
      const password = bcrypt.hashSync(req.body.password, salt);

      const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: password,
        organization_id: orgId,
        type: req.body.type || 'basic',
        location: '',
        interests: [],
        bio: '',
        img_url: ''
      }
  
      const result = await addUser(user);

      if (req.body.type == 'admin') {
        const admin = {
          organization_id: orgId,
          admin_id: result.id,
        }
        
        await addAdminToOrganization(admin);  
      }

      res.status(200).send(result);
    } else {
      res.status(403).send('You do not have admin access for this organization.');
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


module.exports = { 
  createNewOrganization, 
  getOrganizationUsers,
  deleteOrganizationUser,
  addUserToOrganization
}