module.exports = {
  desc: 'Shows this help message.',
  func: async (bot, msg, config) => {
    const commands = require('.');
    let help = '```asciidoc\n';
    Object.keys(commands).filter(cmd => !commands[cmd].isAdmin).forEach(cmd => {
      help += `${config.discord.boat.prefix}${cmd.padEnd(10)} :: ${commands[cmd].desc || 'No description.'}`;
      if (commands[cmd].permissions) {
        let perms = commands[cmd].permissions;
        if (typeof perms === 'function') {
          perms = perms(null, true);
        }
        help += ` - Requires ${perms.join(', ')} permissions.`;
      }
      help += '\n';
    });
    help += '\n```';
    bot.createMessage(msg.channel.id, help);
  }
};
