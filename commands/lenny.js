module.exports.run = async (client, message, args) => {
message.delete();
		return message.channel.send('( ͡° ͜ʖ ͡°)');
	}
  module.exports.help = {
  name: "lenny",
  description: "displays the lenny face ( ͡° ͜ʖ ͡°)",
  usage: "lenny"
  }
