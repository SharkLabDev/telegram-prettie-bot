const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(TELEGRAM_TOKEN, {polling:true});

bot.on('polling_error', error => console.log(error))

bot.onText(/^\/start/, msg => {
  console.log(msg)
  let chatId = msg.chat.id;
  let userName = msg.from.username;

  bot.sendMessage(chatId, `Bienvenido a mi bot @${userName}`)
})

