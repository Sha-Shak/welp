require("dotenv").config();
const db = require('./models/db');

const dropTableIfExists = async (table) => {
  const sql = `DROP TABLE IF EXISTS "${table}"`
  try {
    await db.pool.connect();
    await db.pool.query(sql);
    console.log(`Deleted ${table} table`);
  } catch (e) {
    console.error(e.stack);
  } 
}

const addColumn = async (table, column, specs) => {
  const sql = `ALTER TABLE "${table}" ADD "${column}" ${specs}`;
  try {
    await db.pool.connect();
    await db.pool.query(sql);
    console.log(`Added ${column} to ${table}`);
  } catch (e) {
    console.error(e.stack);
  } 
}

deleteTableIfExists('organizations');
deleteTableIfExists('organizationuser');
deleteTableIfExists('users');

