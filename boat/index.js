const Eris = require('eris');
const Starboard = require('./starboard');
const CommandHandler = require('./commandHandler');


module.exports = function (mongo, config) {
  const bot = new Eris(config.discord.boat.token);

  bot.on('ready', () => console.log('Powercord bot is ready'));

  // Handlers
  new CommandHandler(bot, mongo, config);
  new Starboard(bot, mongo.starboard, config);

  // make it connect
  bot.connect();

  // @todo: Integrate with web
  return {};
};