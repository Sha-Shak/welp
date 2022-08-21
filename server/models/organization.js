const pool = require("./db");

async function addOrganization (org) {
  try {
    const sql = 'INSERT INTO organizations (name, type) VALUES ($1, $2) RETURNING id;'
    const result = await pool.query(sql, [org.name, org.type]);
    return result.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
}


async function addAdminToOrganization (admin) {
  try {
    const sql = 'INSERT INTO organizationuser (organization_id, admin_id) VALUES ($1, $2) RETURNING id;'
    const result = await pool.query(sql, [admin.organization_id, admin.admin_id]);
    return result.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getOrgName (orgId) {
  try {
    const sql = "SELECT * FROM organizations WHERE id = $1"
    const result = await pool.query(sql, [orgId]);
    return result.rows[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { 
  addOrganization,
  addAdminToOrganization,
  getOrgName
 }