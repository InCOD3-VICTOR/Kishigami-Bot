

  exports.run = function (bot, msg) {

      msg.channel.sendMessage('Pong!').then(m => {

          m.edit(`:ping_pong: Pong! :stopwatch:\`${m.createdTimestamp - msg.createdTimestamp}ms\``);

      });

  };
module.exports.help = {
  name: "ping",
}
