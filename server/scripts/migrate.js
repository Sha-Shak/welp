require("dotenv").config();
const db = require('../models/db');

const dropTableIfExist = async (table) => {
    const sql = `DROP TABLE IF EXISTS "${table}"`
    try {
      await db.query(sql);
      console.log(`Deleted ${table} table`);
    } catch (e) {
      console.error(e.stack);
    } 
}

const createTable = async (table) => {
    try {
      await db.query(table);
      console.log(`Added ${table} to DB`);
    } catch (e) {
      console.error(e.stack);
    } 
}

const userSql = `
  CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "organization_id" INT, 
    "type" TEXT,
    "location" TEXT,
    "interests" TEXT[],
    "bio" TEXT,
    "img_url" TEXT,
    PRIMARY KEY ("id"),
    CONSTRAINT fk_orgId
      FOREIGN KEY (organization_id)
        REFERENCES organizations(id)
  );`
    
const orgSql = `
  CREATE TABLE IF NOT EXISTS "organizations" (
    "id" SERIAL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    PRIMARY KEY ("id")
  );`
      
const orgUserSql = `
  CREATE TABLE IF NOT EXISTS "organizationuser" (
    "id" SERIAL,
    "organization_id" INT,
    "admin_id" INT,
    PRIMARY KEY ("id"),
    CONSTRAINT fk_orgId
      FOREIGN KEY (organization_id)
        REFERENCES organizations(id)
  );`

const chatSql = `
  CREATE TABLE IF NOT EXISTS "chatrooms" (
    "id" SERIAL,
    "user_id1" INT NOT NULL,
    "user_id2" INT NOT NULL,
    PRIMARY KEY ("id")
  );`

const messageSql = `
  CREATE TABLE IF NOT EXISTS "message" (
    "id" SERIAL,
    "chat_id" INT NOT NULL,
    "sender_id" INT NOT NULL,
    "timestamp" TIMESTAMP NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT fk_chatid
      FOREIGN KEY (chat_id)
        REFERENCES chatrooms(id)
  );`

async function strip() {
  await db.connect();
  await dropTableIfExist('message');
  await dropTableIfExist('chat');
  await dropTableIfExist('organizationuser');
  await dropTableIfExist('users');
  await dropTableIfExist('organizations');
}

async function build() {
  await createTable(orgSql);
  await createTable(userSql);
  await createTable(orgUserSql);
  await createTable(chatSql);
  await createTable(messageSql);
  process.exit(0);
}

strip()
  .then(() => build());