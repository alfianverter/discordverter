const Discord = require("discord.js");
var upSecs = 0;
var upMins = 0;
var upHours = 0;
var upDays = 0;
//(◕ ◡ ◕)

	setInterval(function() {
		upSecs = upSecs + 1
		if (upSecs >= 60) {
			upSecs = 0
			upMins = upMins + 1
		}
		if (upMins >= 60) {
			upMins = 0
			upHours = upHours + 1
		}
		if (upHours >= 24) {
			upHours = 0
			upDays = upDays + 1

		}


	}, 1000)

module.exports.run = async (bot, message, args) => {
    const botinfo = [
            '__Information About **Frost**__ ❄',
            '',
            'Frost is a **multi-purpose** discord bot with exciting features!',
            '',
            `» I'm currently in **${bot.guilds.size}** guilds.`,
            `» I'm checking **${bot.channels.size}** channels.`,
            `» I'm watching over **${bot.users.size}** other users.`,
            `» I'm running Node.js version **${process.version}**.`,
            `» I'm running Discord.js version **${require('discord.js').version}.**`,
            `» I'm using **${~~(process.memoryUsage().heapUsed / 1024 / 1024)}mb** of RAM`,
            `» I've been online for **${upDays}** Days **${upHours}** Hours **${upMins}** Minutes **${upSecs}** Seconds!`,
            `Be sure to invite Frost by typing **~invite**!`
        ].join('\n');
        message.channel.send(botinfo);
   


   }
  
  
  
  module.exports.help = {
  name: "info"
}
