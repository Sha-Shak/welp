require("dotenv").config();
const db = require('./models/db');

const dropTablesIfExist = (tables) => {
  Object.keys(tables).forEach(async (table) => {
    const sql = `DROP TABLE IF EXISTS "${table}"`
    try {
      await db.pool.connect();
      await db.pool.query(sql);
      console.log(`Deleted ${table} table`);
    } catch (e) {
      console.error(e.stack);
    } 
  });
}

const createTables = (tables) => {
  Object.values(tables).forEach(async (table) => {
    try {
      await db.pool.connect();
      await db.pool.query(table);
      console.log(`Added table to DB`);
    } catch (e) {
      console.error(e.stack);
    } 
  })
}

const userSql = `
  CREATE TABLE IF NOT EXISTS "user" (
    "id" SERIAL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "organization_id" SERIAL, 
    "type" VARCHAR(100),
    "location" VARCHAR(100),
    "interests" ARRAY[VARCHAR(100)],
    "bio" VARCHAR(510),
    "img_url" VARCHAR(255)
    PRIMARY KEY ("id")
  );`
  // organization_id: Can we put this in as serial or do we need to do int?
  // admin: should we change type to be boolean? (ie. admin: false) 

const orgSql = `
  CREATE TABLE IF NOT EXISTS "organizations" (
    "id" SERIAL,
    "name" VARCHAR(100) NOT NULL,
    "type" VARCHAR(100) NOT NULL,
    PRIMARY KEY ("id")
  );`

const orgUserSql = `
  CREATE TABLE IF NOT EXISTS "organizationuser" (
    "organization_id" SERIAL,
    "admin_id" SERIAL,
    PRIMARY KEY ("organization_id")
  );`
  // we probably cannot have 2 serial items

const chatSql = `
  CREATE TABLE IF NOT EXISTS "chat" (
    "id" SERIAL,
    "user_id1" SERIAL NOT NULL,
    "user_id2" SERIAL NOT NULL,
  );`

const messageSql = `
  CREATE TABLE IF NOT EXISTS "message" (
    "id" SERIAL,
    "chat_id" SERIAL NOT NULL,
    "sender_id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP NOT NULL
  );`


const tablesSql = {
  users: userSql,
  organizations: orgSql,
  organizationuser: orgUserSql,
  chat: chatSql,
  message: messageSql
}

dropTablesIfExist(tablesSql);
createTables(tablesSql);




