const Discord = require('discord.js');
const { RichEmbed} = require('discord.js');
let output = [];
exports.run = async (client, msg, args) => {
let output = args.join(' ');
  if (args.length < 1) {
      throw `Please provide me with something to say `;
  }

const embed = new RichEmbed()
.setAuthor(msg.author.username, msg.author.displayAvatarURL)
.setColor(Math.floor(Math.random() * 16777215))
.setDescription(output)
.setTimestamp();
msg.delete();
msg.channel.send({embed}).catch(e => console.error(e));
return;
}


module.exports.help = {
name: "embed",
}
