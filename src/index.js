const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(TELEGRAM_TOKEN, {polling:true});

bot.on('polling_error', error => console.log(error))

bot.onText(/^\/start/, msg => {
  console.log(msg)
  let chatId = msg.chat.id;
  let userName = msg.from.username;
  bot.sendMessage(chatId, `Yes! I'm already alive! @${userName}`)
})

bot.onText(/^\/chatid/, msg => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `El id de este chat es: ${chatId}`);
});

bot.onText(/^\/myid/, msg => {
  const chatId = msg.chat.id;
  const myId = msg.from.id;
  bot.sendMessage(chatId, `Tu id es: ${myId}`);
});

bot.on('message', msg => {
  const chatId = msg.chat.id;
  const myId = msg.from.id;
  const userName = msg.from.username;
  const name = msg.from.first_name;
  if (msg.text.toLowerCase() === 'hola bot') {
    console.log(msg)
    bot.sendMessage(chatId, `Hola ${name}. ¿Cómo estas?`)
  }
})