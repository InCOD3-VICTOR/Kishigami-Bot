const fs = require('fs');

const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_CHANNEL")) return message.channel.send("You do not have the correct permissions:frowny:.");

  let toMute = message.mentions.members.first() || message.guild.members.get(srgs[0]);
  if(!toMute) return message.channel.send("You did not specify a user" `${message.author.username}`);

  if(toMute.id === message.author.id) return message.channel.send("You can not mute yourself :sad:.");
  if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("You can not mute a member that has a higher role than you :joy:.");

  let role = message.guild.roles.find(r => r.name === "Muted");
  if(!role) {
    try {
      role = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions: []
    });

      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(role, {
          SEND_MESSAGE: false,
          ADD_REACTIONS: false
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
  }
  if(toMute.roles.has(role.id)) return message.channel.send("This user is already muted in this channel!");

  client.mutes[toMute.id] = {
    guild: message.guild.id,
    time: parseInt(args[1]) * 1000
  }

  await toMute.addRole(role);

  fs.writeFile("./mutes.json", JSON.stringify(client.mutes, 4), err => {
    if(err) throw err;
    message.channel.send("I have muted them :wink:");
  });

}

module.exports.help = {
    name: "mute",
  }
