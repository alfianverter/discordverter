const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Categories")
    .setAuthor("85 Commands", bot.user.displayAvatarURL)
    .addField("Moderation", "`" + message.prefix + "mod 🔧`", true)
    .addField("Games", "`" + message.prefix + "games 🎮`", true)
    .addField("Music", "`" + message.prefix + "music 🎧`", true)
    .addField("NSFW", "`" + message.prefix + "nsfw 💎`", true)
    .addField("Core", "`" + message.prefix + "core 📡`", true)
    .addField("Utils", "`" + message.prefix + "utils 🔮`", true)
    .addField("Fun", "`" + message.prefix + "fun 💣`", true)
    .addField("Statistics", "`" + message.prefix + "statistics 🔌`", true)
    .addField("Developer", "`" + message.prefix + "dev 🔑`", true)
  .setFooter("This bot was made by Verter Development in 2018")
    message.channel.send(embed);
}
module.exports.help = {
    name: "help"
}
