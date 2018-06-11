const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let pEmbed = new Discord.RichEmbed()
        .setColor(message.guild.me.displayHexColor)
        .setTitle('Pong!')
        .addField('📶 Latency', (new Date().getTime() - message.createdTimestamp) + ' ms', true)
        .addField('💠 Websocket' , `${Math.round(bot.ping)} ms`, false)
        .addField("API ping 📛", `${Math.round(bot.ping)}ms`)
        .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL)
         message.channel.send(pEmbed);
}


module.exports.help = {
  name: "ping"
}
