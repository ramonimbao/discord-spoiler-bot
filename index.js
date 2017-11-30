/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @see https://github.com/TimboKZ/discord-spoiler-bot
 * @copyright 2017
 * @license MIT
 */

module.exports = require('./src/SpoilerBot');

'use strict';

const SpoilerBot = require('./src/SpoilerBot');

let config = {
    token: process.env.BOT_TOKEN,
    markAllowAll: true,
    maxLines: 20,
};

let bot = new SpoilerBot(config);
bot.connect();
