const { getChats, getMessages } = require("../models/chat");

async function createNewChat (req, res) {
  
}


async function getUserChats (req, res) {
  try {
    if (req.user) {
      const result = await getChats(req.user);
      res.status(200).send(result);
    } else {
      res.send(401).send('User is not logged in.');
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}


async function getChatMessages (req, res) {
  try {
    if (req.user) {
      const chatId = req.params.id;
      const result = await getMessages(chatId);
      res.status(200).send(result);
    } else {
      res.send(401).send('User is not logged in.');
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}



module.exports = {
  getUserChats,
  getChatMessages
}