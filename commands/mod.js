const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("👤 Moderation")
    .addField("`" + message.prefix + "ban`", "Ban a member.")
    .addField("`" + message.prefix + "unban`", "Un-ban a member. [Requires id]")
    .addField("`" + message.prefix +"clear`", "Clear messages")
    .addField("`" + message.prefix +"kick`", "Kick a member.")
    .addField("`" + message.prefix +"mute`", "Temporarily mute a member.")
    .addField("`" + message.prefix +"unmute`", "Unmute a member.")
    .addField("`" + message.prefix +"purge`", "Clears a member's messages.")
    .addField("`" + message.prefix +"warn`", "Warn a member.")
    .setFooter("Require mod-log channel.")

message.channel.send(embed).then(msg => {msg.delete(15000)});
}

module.exports.help = {
  name: "mod"
}
