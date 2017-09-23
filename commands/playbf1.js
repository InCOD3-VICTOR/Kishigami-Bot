const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  let member = message.guild.member(user);

  const dateFormat = require('dateformat');

  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

let embed = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(`Play BATTLEFIELD 1 With ${message.author.username}`)
.setThumbnail('https://pbs.twimg.com/profile_images/786366336473690113/auSCWgqo.jpg')
.setColor(Math.floor(Math.random() * 16777215))
.addField('❯ Name',
    message.author.tag, true)
  .addField('❯ ID',
    message.author.id, true)
  .addField(`Join ${message.author.username} as they play BattleField 1!`, `Do join in ${message.author.username}\'s game of [BF1]('https://www.origin.com/usa/en-us/store/battlefield/battlefield-1/standard-edition') if you want someone to play with, you can contact them via pms or in the chat right now! Join in on the action as you take it back to WW1 to fight against your opponents in many different game modes with many unique classic weapons and classes!`)
  .setFooter('Remember to be nice and have fun we are all friends here so there is no need to be mean or troll people or go afk. We hope you play long and hard. Enjoy!');
message.delete();
message.channel.send({embed : embed});
}
module.exports.help = {
  name: "playbf1",
}
