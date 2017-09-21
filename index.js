const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const prefix = ">";
const fs = require('fs');

const moment = require('moment');
client.commands =  new Discord.Collection();
client.mutes =  require("./mutes.json");

fs.readdir("./commands/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load!");
    return;
  }

  console.log(`Loding ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
console.log(`${i + 1}: ${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});

client.on("ready", () => {
  console.log(`Bot is ready to use ${client.user.username}`);

  client.setInterval(() => {
        for(let i in client.mutes) {
          let time = client.mutes[i].time;
          let guildId = client.mutes[i].guild;
          let guild = client.guilds.get(guildId);
          let member = guild.members.get(i);
          let mutedRole = guild.roles.find(r => r.name === "Muted");
          if (!mutedRole) continue;

          if(Date.now() > time) {
            console.log(`${i} has now been unmuted!`)

            member.removeRole(mutedRole);
            delete client.mutes[i];

            fs.writeFile("./mute.json", JSON.stringify(client.mutes), err => {
              if(err) throw err;
              console.log(`I have unmuted ${member.user.tag}.`);
            });
          }
        }
  }, 5000)
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  if(message.content === "Hi") {
   message.channel.send("Hello how are you today? :wave:");
 }
 if(message.content === "ban?") {
   message.channel.send("Did someone say ban? :thinking: is it time to bring down the ban hammer :hammer:");
 }



  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);


  if(!command.startsWith(prefix)) return;

  let commands = client.commands.get(command.slice(prefix.length));
  if(commands) commands.run(client, message, args);

  if(command === `${prefix}userinfo`) {

  return;
}
    if(command === `${prefix}mute`) {

      return;
    }

    if(command === `${prefix}unmute`) {

      return;
    }
});

client.login(settings.token)
