const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const token = "570156939:AAFLSb1A9bx6mex24PbnvElELTWrbsZQemM";

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3001)

bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  
  bot.sendMessage(chatId, resp);
});

bot.on("message", msg => {
  const chatId = msg.chat.id;
  console.log(msg)
  bot.sendMessage(chatId, "Received your message");
});