const { stripIndents } = require('common-tags');

exports.run = async (cleint, args, msg, { member, reason }) => {
  if (member.id === msg.author.id) return msg.channel.send('I don\'t think you want to ban yourself...');
  if (member.id === msg.guild.ownerID) return msg.cahnnel.send('Don\'t you think that might be betraying your leader?');
  if (!member.bannable) return msg.channel.send('This member is not bannable. Perhaps they have a higher role than me?');
  if (member.highestRole.position > msg.member.highestRole.position - 1) {
    return msg.channel.send('Your roles are too low to ban this member.');
  }
  await msg.cahnnel.send(`Are you sure you want to ban ${member.user.tag} (${member.id})?`);
  const msgs = await msg.channel.awaitMessages(res => res.author.id === msg.author.id, {
    max: 1,
    time: 30000
  });
  if (!msgs.size || !['y', 'yes'].includes(msgs.first().content.toLowerCase())) return msg.channel.send('Aborting.');
  try {
    await member.send(stripIndents`
      You were banned from ${msg.guild.name} by ${msg.author.tag}!
      **Reason:** ${reason}
    `);
  } catch (err) {
    await msg.channel.send('Failed to send DM.');
  }
  await member.ban({
    days: 7,
    reason: `${msg.author.tag}: ${reason}`
  });
  return msg.channel.send(`Successfully banned ${member.user.tag}.`);
}
module.exports.help = {
name: "ban",
}
