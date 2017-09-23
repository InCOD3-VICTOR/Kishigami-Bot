const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  let member = message.guild.member(user);

  const dateFormat = require('dateformat');

  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

let embed = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(`Play GTA 5 With ${message.author.username}`)
.setThumbnail('http://images.mstarz.com/data/images/full/63314/rockstar-games-is-cool-with-gta-5-pc-mods.jpg?w=600')
.setColor(Math.floor(Math.random() * 16777215))
.addField('❯ Name',
    message.author.tag, true)
  .addField('❯ ID',
    message.author.id, true)
  .addField(`Join ${message.author.username} as they play GTA 5!`, `Do join in ${message.author.username}\'s game of [GTA]('http://store.steampowered.com/app/271590/Grand_Theft_Auto_V/') if you want someone to play with, you can contact them via pms or in the chat right now! Join in on the choas of Los Santos and grind, play, and fight together whether you mod or not always have fun!`)
  .setFooter('Remember to be nice and have fun we are all friends here so there is no need to be mean or troll people or crash them. Just have fun and we hope if you haven\'t already go ahead and add each other. Enjoy!');
message.delete();
message.channel.send({embed : embed});
}
module.exports.help = {
  name: "playgta",
}
