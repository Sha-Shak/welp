const pool = require("./db");

async function addUser (user) {
  try {
    const sql = 'INSERT INTO users (firstName, lastName, email, password, organization_id, type, location, interests, bio, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id, firstName, lastName, organization_id, type;'
    const result = await pool.query(sql, [user.firstName, user.lastName, user.email, user.password, user.organization_id, user.type, user.location, user.interests, user.bio, user.img_url]);
    return result.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
}


async function getUserByEmail (email) {
  try {
    const sql = 'SELECT * FROM users WHERE email = $1'
    const result = await pool.query(sql, [email]);
    return result.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}


async function getOrgUsers(orgId) {
  try {
    const sql = 'SELECT * FROM users WHERE organization_id = $1'
    const result = await pool.query(sql, [orgId]);
    return result.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}


async function deleteUser(userId, orgId) {
  try {
    const sql = 'DELETE FROM users WHERE id = $1 AND organization_id = $2'
    const result = await pool.query(sql, [userId, orgId]);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}


module.exports = { 
  addUser, 
  getUserByEmail,
  getOrgUsers,
  deleteUser
 }