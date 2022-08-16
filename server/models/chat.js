const pool = require("./db");


async function getChats (user) {
  try {
    const sql = 'SELECT * FROM chatrooms WHERE user_id1 = $1 OR user_id2 = $1;'
    const result = await pool.query(sql, [user.id]);
    return result.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}


async function getMessages (chatId) {
  try {
    const sql = 'SELECT * FROM messages WHERE chat_id = $1;'
    const result = await pool.query(sql, [chatId]);
    return result.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}


async function postMessage (message) {
  try {
    const now = new Date();
    const sql = 'INSERT INTO messages (content, chat_id, sender_id, timestamp) VALUES ($1, $2, $3, $4) RETURNING *;'
    const result = await pool.query(sql, [message.content, message.chat_id, message.sender, now]);
    return result.rows;
  } catch (error) {
    throw new Error(error.message);
  }
}



module.exports = {
  getChats,
  getMessages,
  postMessage
}