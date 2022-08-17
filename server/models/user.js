const pool = require("./db");

async function addUser(user) {
  try {
    const sql =
      "INSERT INTO users (firstName, lastName, email, password, organization_id, type, location, interests, bio, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;";
    const result = await pool.query(sql, [
      user.firstname,
      user.lastname,
      user.email,
      user.password,
      user.organization_id,
      user.type,
      user.location,
      user.interests,
      user.bio,
      user.img_url,
    ]);
    return result.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getUserByEmail(email) {
  try {
    const sql =
      "SELECT users.*, organizations.name as orgname FROM users INNER JOIN organizations ON users.organization_id = organizations.id WHERE users.email = $1";
    const result = await pool.query(sql, [email]);
    return result.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getOrgUsers(orgId) {
  try {
    const sql = "SELECT * FROM users WHERE organization_id = $1";
    const result = await pool.query(sql, [orgId]);
    return result.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteUser(userId, orgId) {
  try {
    const sql = "DELETE FROM users WHERE id = $1 AND organization_id = $2";
    const result = await pool.query(sql, [userId, orgId]);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getUserById(id) {
  try {
    const sql = "SELECT * FROM users WHERE id = $1";
    const result = await pool.query(sql, [id]);
    return result.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function editUser(id, newInfo) {
  try {
    const sql =
      "UPDATE users SET firstName = $1, lastName = $2, email = $3, password = $4, organization_id = $5, type = $6, location = $7, interests = $8, bio = $9, img_url = $10 WHERE id = $11 RETURNING *;";
    const result = await pool.query(sql, [
      newInfo.firstname,
      newInfo.lastname,
      newInfo.email,
      newInfo.password,
      newInfo.organization_id,
      newInfo.type,
      newInfo.location,
      newInfo.interests,
      newInfo.bio,
      newInfo.img_url,
      id,
    ]);
    return result.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getMatches(user) {
  try {
    const interests = [...user.interests];

    while (interests.length < 5) {
      interests.push("");
    }

    const sql =
      "SELECT * FROM users WHERE ($3 = ANY(interests) OR $4 = ANY(interests) OR $5 = ANY(interests) OR $6 = ANY(interests) OR $7 = ANY(interests)) AND organization_id = $1 AND id != $2 AND id NOT IN (SELECT user_id1 as id from chatrooms where user_id2 = $2) AND id NOT IN (SELECT user_id2 as id from chatrooms where user_id1 = $2);";
    const result = await pool.query(sql, [
      user.organization_id,
      user.id,
      ...interests,
    ]);
    return result.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getRandomUsers(user) {
  try {
    const sql =
      "SELECT * FROM users WHERE organization_id = $1 AND id != $2 AND id NOT IN (SELECT user_id1 as id from chatrooms where user_id2 = $2) AND id NOT IN (SELECT user_id2 as id from chatrooms where user_id1 = $2);";
    const result = await pool.query(sql, [user.organization_id, user.id]);
    return result.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  addUser,
  getUserByEmail,
  getUserById,
  getOrgUsers,
  deleteUser,
  editUser,
  getMatches,
  getRandomUsers,
};
