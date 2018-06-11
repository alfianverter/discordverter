const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]); 

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }
  let userCoins = coins[pUser.id].coins;

  let coinicon = pUser.displayAvatarURL
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(`${pUser.username}'s Balance`)
  .setDescription(`Here is ${pUser.username}'s Balance!`)
  .setColor("#0263ff")
  .setThumbnail(coinicon)
  .addField( "Coins 📀", `${userCoins} \\🔘`, true)
  .addField("Gain more coins", "by talking more in chat!", true)
  .addField("Want to send coins to people?", ">pay <user> <amount>", true)
  .setFooter(`Requested By ${pUser.username} ID: ${pUser.id}`, pUser.displayAvatarURL);
  const mess = await message.channel.send(`🔄 Loading Coins of user ${pUser.id}`);
  mess.edit(coinEmbed)

}

module.exports.help = {
  name: "coins"
}
