const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
 
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  
  let members = [];
  let indexes = [];
  
  message.guild.members.forEach(function(member){
    members.push(member.user.username);
    indexes.push(member.id);
  })
  
  let match = sm.findBestMatch(args.join(' '), members);
  let username = match.bestMatch.target;
  
    let member = message.guild.members.get(indexes[members.indexOf(username)])
    
     let definedUser = "";
     let definedUser2 = "";
    if(!args[0]) {
      definedUser = message.author
      definedUser2 = message.member
    } else {
      let mention = message.mentions.users.first()
      definedUser = mention || member.user
        definedUser2 = message.mentions.members.first() || message.guild.members.get(args[0]) || member
    }
  let userCoins = coins[message.author.id].coins;

  let coinicon = message.author.displayAvatarURL
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
