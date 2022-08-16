require("dotenv").config();
const db = require("./models/db");

const dropTableIfExist = async (table) => {
  const sql = `DROP TABLE IF EXISTS "${table}"`;
  try {
    await db.query(sql);
    console.log(`Deleted ${table} table`);
  } catch (e) {
    console.error(e.stack);
  }
};

const createTable = async (table) => {
  try {
    await db.query(table);
    console.log(`Added ${table} to DB`);
  } catch (e) {
    console.error(e.stack);
  }
};

const userSql = `
  CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
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
  );`;

const orgSql = `
  CREATE TABLE IF NOT EXISTS "organizations" (
    "id" SERIAL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    PRIMARY KEY ("id")
  );`;

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
  );`;

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
  );`;

const messageSql = `
  CREATE TABLE IF NOT EXISTS "messages" (
    "id" SERIAL,
    "chat_id" INT NOT NULL,
    "sender_id" INT NOT NULL,
    "timestamp" TIMESTAMP NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT fk_chatid
      FOREIGN KEY (chat_id)
        REFERENCES chatrooms(id),
    CONSTRAINT fk_senderid
      FOREIGN KEY (sender_id)
        REFERENCES users(id)
  );`;

async function strip() {
  await db.connect();
  await dropTableIfExist("messages");
  await dropTableIfExist("chatrooms");
  await dropTableIfExist("organizationuser");
  await dropTableIfExist("users");
  await dropTableIfExist("organizations");
}

async function build() {
  await createTable(orgSql);
  await createTable(userSql);
  await createTable(orgUserSql);
  await createTable(chatSql);
  await createTable(messageSql);
  process.exit(0);
}

strip().then(() => build());