const snekfetch = require('snekfetch');

exports.run = async (client, msg, args) => {
		try {
			const { body } = await snekfetch
				.get('http://random.cat/meow');
			return msg.channel.send(body.file);
		} catch (err) {
			return msg.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
  module.exports.help = {
    name: "cat",
  }
