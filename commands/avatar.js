const Discord = require('discord.js');
exports.run = async (bot, msg) => {
    const user = msg.mentions.users.first();
    if (!user) {
        throw 'Please mention the user who you want the avatar from.';
    }

    if (!user.avatarURL) {
        throw 'That user does not have an avatar.';
    }

let embed = new Discord.RichEmbed()
.setColor(Math.floor(Math.random() * 16777215))
.addField(`${user.username}'s Avatar`, `[Download](${user.avatarURL})`)
.setThumbnail(user.avatarURL)
msg.delete();
msg.channel.send({embed : embed
});
};
module.exports.help = {
name: "avatar",
}
