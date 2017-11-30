/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @see https://github.com/TimboKZ/discord-spoiler-bot
 * @copyright 2017
 * @license MIT
 */

module.exports = require('./src/SpoilerBot');

'use strict';

const SpoilerBot = require('discord-spoiler-bot');

let config = {
    token: 'Mzg1ODM0NzQxMzcyNTUxMTY4.DQHIHw.hK7gRJlvSYzqlkl89B5Aih_6GR0',
};

let bot = new SpoilerBot(config);
bot.connect();
