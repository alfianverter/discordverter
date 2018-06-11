const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
 
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let userCoins = coins[message.author.id].coins;

  let coinicon = message.author.displayAvatarURL
  if(message.author.id !== '315524485501550594') return message.channel.send ("<:toohappy:443956536486789131> As this command is still in development, It is limited to FrostedWeFall#8609 Only");
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.username}'s Balance`)
  .setDescription(`Here is ${message.author.username}'s Balance!`)
  .setColor("#0263ff")
  .setThumbnail(coinicon)
  .addField( "Coins 📀", `${userCoins} \\📀`, true)
  .addField("Gain more coins", "by talking more in chat!", true)
  .addField("Want to send coins to people?", "~pay <user> <amount>", true)
  .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);
  const mess = await message.channel.send(`<a:customloading:439644282828226571> Loading Coins of user ${message.author.id}`);
  mess.edit(coinEmbed)

}

module.exports.help = {
  name: "coins"
}
