const fs = require('fs');

const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have manage message permissions.");

  let toMute = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.send("You did not specify a user.");

  let role = message.guild.roles.find(r => r.name === "Muted");

  if(!role || !toMute.roles.has(role.id)) return message.channel.send("This user has been unmuted :thinking:.");

  await toMute.removeRole(role);

  delete client.mutes[toMute.id];

  fs.writeFile("./mute.json", JSON.stringify(client.mutes), err => {
    if(err) throw err;
    console.log(`I have unmuted ${toMute.user.tag}.`);
  });
  message.channel.send("I have unmuted them!");
}
  module.exports.help = {
    name: "unmute",
  }
