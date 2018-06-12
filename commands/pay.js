const Discord = require("discord.js");
const fs = require("fs");
let Coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {


  if(!Coins[message.author.id]){
    return message.reply("You don't have any Coins! Earn some by talking in chat! :)")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!Coins[pUser.id]){
    Coins[pUser.id] = {
      Coins: 0
    };
  }

  let pCoins = Coins[pUser.id].Coins;
  let sCoins = Coins[message.author.id].Coins;

  if(sCoins < args[0]) return message.reply("Not enough Coins there!");

  Coins[message.author.id] = {
    Coins: sCoins - parseInt(args[1])
  };

  Coins[pUser.id] = {
    Coins: pCoins + parseInt(args[1])
  };
  if(message.author.id !== '315524485501550594') return message.channel.send ("<:toohappy:443956536486789131> As this command is still in development, It is limited to FrostedWeFall#8609 Only");
  let pay = new Discord.RichEmbed()
    .setTitle("coin Transactions")
    .setColor("#0263ff")
    .addField("Sender", message.author)
    .addField("Receiver", pUser)
    .addField("Coin Amount", `${args[1]}`)
    .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);

    message.channel.send(pay).then(msg => {msg.delete(25000)});
    console.log(`${message.author} has sent ${pUser} ${args[1]} Coins. :ring:`);

  fs.writeFile("./coins.json", JSON.stringify(Coins), (err) => {
    if(err) console.log(err)
  });


}

module.exports.help = {
  name: "pay"
}
