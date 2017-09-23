const { Command } = require('discord.js-commando');

module.exports.run = async (client, msg, args) => {

        return msg.channel.send('Hi, I\'m awake!');
    }

module.exports.help = {
name: "reply",
}
