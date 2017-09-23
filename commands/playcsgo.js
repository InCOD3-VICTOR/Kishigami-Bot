const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  let member = message.guild.member(user);

  const dateFormat = require('dateformat');

  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

let embed = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(`Play CSGO With ${message.author.username}`)
.setThumbnail('http://vignette3.wikia.nocookie.net/ikonen-jonas-csgo/images/a/a1/Csgo-logo.png/revision/latest?cb=20151118200545')
.setColor(Math.floor(Math.random() * 16777215))
.addField('❯ Name',
    message.author.tag, true)
  .addField('❯ ID',
    message.author.id, true)
  .addField(`Join ${message.author.username} as they play CSGO!`, `Do join in ${message.author.username}\'s game of [CSGO]('http://store.steampowered.com/app/730/CounterStrike_Global_Offensive/') if you want someone to play with, you can contact them via pms or in the chat right now! Join in to the battle as you join the fight guns blazing. Play hardcore and get deep into the action. We hope you enjoy!  `)
  .setFooter('Remember to be nice and have fun we are all friends here so there is no need to be mean or troll people or hack if they want to play legit. Be safe and have fun guys. Enjoy!');
message.delete();
message.channel.send({embed : embed});
}
module.exports.help = {
  name: "playcsgo",
}
