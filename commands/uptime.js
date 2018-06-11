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
  let bicon = bot.user.displayAvatarURL;
    let uptimeembed = new Discord.RichEmbed()
    .setTitle(`Verter Uptime`)
    .setDescription(`Requested By ${message.author.username}`)
    .setThumbnail(bicon)
    .setColor("#0263ff")
    .addField("Current Uptime", `${upDays} Days | ${upHours} Hours | ${upMins} Minutes | ${upSecs} Seconds!`);   

    return message.channel.send(uptimeembed);

   }
	



  module.exports.help = {
  name: "uptime"
}
