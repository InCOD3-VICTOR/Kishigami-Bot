module.exports.run = async (client, message, args) => {
if (!message.guild.emojis.size) return message.channel.send('This server has no custom emoji.');
message.delete();
		return message.channel.send(message.guild.emojis.map(e => e).join(''));

	}
  module.exports.help = {
  name: "emoji",
  }
