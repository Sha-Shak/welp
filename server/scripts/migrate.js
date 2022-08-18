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


const dropConstraint = async (table, constraintNames) => {
  try {
    for(let i = 0; i < constraintNames.length; i++) {
      const sql = `ALTER TABLE "${table}" DROP CONSTRAINT ${constriantNames[i]}`
      await db.query(sql);
      console.log(`Dropped ${constriantNames[i]} constraint`);
    }
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
        REFERENCES organizations(id),
    CONSTRAINT fk_adminId
      FOREIGN KEY (admin_id)
        REFERENCES users(id)
  );`

const chatSql = `
  CREATE TABLE IF NOT EXISTS "chatrooms" (
    "id" SERIAL,
    "user_id1" INT NOT NULL,
    "user_id2" INT NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT fk_userid1
      FOREIGN KEY (user_id1)
        REFERENCES users(id),
    CONSTRAINT fk_userid2
      FOREIGN KEY (user_id2)
        REFERENCES users(id)
  );`

const messageSql = `
  CREATE TABLE IF NOT EXISTS "messages" (
    "id" SERIAL,
    "content" text NOT NULL,
    "chat_id" INT NOT NULL,
    "sender_id" INT NOT NULL,
    "timestamp" TIMESTAMP NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT fk_chatid
      FOREIGN KEY (chat_id)
        REFERENCES chatrooms(id),
    CONSTRAINT fk_senderId
      FOREIGN KEY (sender_id)
        REFERENCES users(id)
  );`

async function removeConstraints () {
  await db.connect();
  await removeConstraints('messages', ['fk_chatid', 'fk_senderId']);
  await removeConstraints('chatrooms', ['fk_userid1', 'fk_userid2']);
  await removeConstraints('organizationuser', ['fk_orgId', 'fk_adminId']);
  await removeConstraints('users', ['fk_orgId']);
}

async function strip() {
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

removeConstraints()
  .then(() => strip()
    .then(() => build()));