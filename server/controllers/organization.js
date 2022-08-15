const { addOrganization, addAdminToOrganization } = require("../models/organization");
const { addUser, getUserByEmail, getOrgUsers, deleteUser } = require("../models/user");


async function createNewOrganization (req, res) {
  try {
    const checkUser = await getUserByEmail(req.body.email);
    if (checkUser.length < 1) {
      const org = {name: req.body.orgName, type: req.body.type};
      const queryResult = await addOrganization(org);
  
      const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
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
    const orgId = req.params.id;
    const result = await getOrgUsers(orgId);
    res.status(200).send(result);

  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function deleteOrganizationUser(req, res) {
  try {
    const orgId = req.params.id;
    const userId = req.params.userId;
    const result = await deleteUser(userId, orgId);
    res.status(200).send(result);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


module.exports = { 
  createNewOrganization, 
  getOrganizationUsers,
  deleteOrganizationUser
}