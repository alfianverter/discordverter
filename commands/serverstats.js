const Discord = require('discord.js'); 

module.exports.run = async (bot, message, args) => {
  let guild = message.guild;
  let icon = message.guild.iconURL;

  let createdAtRaw = guild.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");

  let bots = message.guild.members.filter(m => m.user.bot).size;
  let humans = message.guild.members.filter(m => !m.user.bot).size;
  let channels = message.guild.channels.size;
  let textChannels = message.guild.channels.filter(m => m.type == "text").size;
  let voiceChannels = message.guild.channels.filter(i => i.type == "voice").size;
  let emojis = [];
  guild.emojis.forEach(emoji => {
  emojis.push(`\`${emoji.name}\``);
  });
  emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");

  let roles = [];
  guild.roles.forEach(role => {
    roles.push(`\`${role.name}\``);
  });
  roles = roles.join(", ");

  let embed = new Discord.RichEmbed()
  .setTitle(`Server Stats`)
.setColor("RANDOM")
  .setThumbnail(icon)
  .addField(':house: Guild Name', guild.name, true)
  .addField(':link: Guild ID', guild.id, true)
  .addField(':shield: Guild Owner', guild.owner, true)
  .addField(':motor_scooter: Created At', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
  .addField(':triangular_flag_on_post: Region', guild.region.toUpperCase(), true)
  .addField(':busts_in_silhouette: Total Members:', guild.memberCount, true)
  .addField(':robot: Bots:', bots, true)
  .addField(':bust_in_silhouette: Users:', humans, true)
  .addField(':trophy: Verification Level:', guild.verificationLevel, true)
  .addField(':pencil: Text Channels:', textChannels, true)
  .addField(':speaking_head: Voice Channels', voiceChannels, true)
  .addField(':family_wwgb: Roles', `${guild.roles.size}`, true)
  .addField(':cowboy: Emojis', `${guild.emojis.size}`, true)
.setFooter('©BETA | By: VERTER | 2018')

  return message.channel.send(embed);
}


module.exports.help = {
  name: "serverstats"
}



