const { getChats, getMessages, checkForChat, newChat } = require("../models/chat");

async function createNewChat (req, res) {
  try {
    if (req.user) {
      const userId1 = req.user.id;
      const userId2 = req.body.userId;

      const checkForChat = await checkForChat(userId1, userId2);

      if (checkForChat = 0) {
        const newChat = await newChat(userId1, userId2);
        res.status(201).send(newChat);
      } else {
        res.status(400).send('Chat with this user already exists.');
      }
      
    } else {
      res.send(401).send('User is not logged in.');
    }
  } catch (error) {
    res.status(500);
    console.log(error);
  }
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
  getChatMessages,
  createNewChat
}