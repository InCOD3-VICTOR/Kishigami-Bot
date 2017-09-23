const snekfetch = require('snekfetch');

exports.run = async (client, msg, args) => {
		try {
			const { body } = await snekfetch
				.get('https://random.dog/woof.json');
			return msg.channel.send(body.url);
		} catch (err) {
			return msg.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
	}
  module.exports.help = {
    name: "dog",
  }
