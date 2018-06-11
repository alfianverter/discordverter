	const Discord = require("discord.js");
	const botconfig = require("./botconfig.json");
	const fs = require("fs");
	let bot = new Discord.Client();
	bot.commands = new Discord.Collection();
	const coins = require("./coins.json");
	const xp = require("./xp.json");
	const db = require('quick.db');
        const DBL = require("dblapi.js");
        const dbl = new DBL(process.env.DBL_TOKEN, bot);


	bot.on('ready', () => {
	console.log("Loading...");
	setTimeout(function(){
	console.log("Bot has been loaded completely.");
	}, 1000);
	function botStatus() {
        let status = [
            `My prefix default >.`,
            `Music - Mod - Admin.`,
            `Use ${bot.guilds.size} Server.`,
            `with ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users.`,
            `Verter Developmenr#1779.`,
        ];
        let rstatus = Math.floor(Math.random() * status.length);

        bot.user.setActivity(status[rstatus], {Type: 'STREAMING'});        // BOT STATUS
      }; setInterval(botStatus, 20000)
        setInterval(() => {
        dbl.postStats(bot.guilds.size)
        }, 1800000);
	})

	fs.readdir("./commands/", (err, files) => {
    console.log(`Loaded ${files.length} commands.`)
	if(err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if(jsfile.length <= 0){
	console.log("Couldn't find commands.");
	return;
	}


	jsfile.forEach((f, i) =>{
	let props = require(`./commands/${f}`);
	console.log(`${f} loaded!`);
	bot.commands.set(props.help.name, props);
	});
	});

	bot.on("message", async message => {
      let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
	
    let prefix = prefixes[message.guild.id].prefixes;
	if(message.author.bot) return undefined;
	if(message.channel.type === 'dm') return ;
        if(message.content.toLowerCase() === '<@421925809532436481>'){
        let embed = new Discord.RichEmbed()
       .setTitle("Tritax AI")
       .addField("Prefix", `\`${prefix}\``, true)
       .addField("Help", `\`${prefix}help\``, true)
       .setThumbnail(bot.user.displayAvatarURL)
       .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`);
        message.channel.send(embed);
        }

	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = args.shift().toLowerCase();
	if(message.author.bot) return undefined;
	if(!message.content.startsWith(prefix)) return undefined;
   message.prefix = prefix;


	try {
	let commandFile = require(`./commands/${cmd}.js`);
	commandFile.run(bot, message, args);
	if(!commandFile) return message.channel.send("No command found with that name.");
	} catch (e) { console.log(e) }

	if(!coins[message.author.id]){
	coins[message.author.id] = {
	coins: 0
	};
	}

	let coinAmt = Math.floor(Math.random() * 15) + 14;
	let baseAmt = Math.floor(Math.random() * 15) + 14;
 

	

	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
	if (err) console.log(err)
	});

	}

	let xpAdd = Math.floor(Math.random() * 15) + 14;
	

	if(!xp[message.author.id]){
	xp[message.author.id] = {
	xp: 0,
	level: 1
	};
	}


	let curxp = xp[message.author.id].xp;
	let curlvl = xp[message.author.id].level;
	let nxtLvl = xp[message.author.id].level * 300;
	xp[message.author.id].xp =  curxp + xpAdd;
	if(nxtLvl <= xp[message.author.id].xp){
	xp[message.author.id].level = curlvl + 1;

	}
	fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
	if(err) console.log(err)
	});


	});

	bot.on('guildCreate', guild => {
	      let channel = bot.channels.get("428564028239904790")
        const embed = new Discord.RichEmbed()
        .setColor("#cde246")
        .setAuthor(`Joined ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Owner", guild.owner.user.tag)
        .addField("ID", guild.id, true)
        .addField("Users", guild.memberCount, true)
        .addField("Channels", guild.channels.size, true)
         channel.send(embed);
	});
	bot.on('guildDelete', guild => {
	      let channel = bot.channels.get("428564028239904790")
        const embed = new Discord.RichEmbed()
        .setColor("#cde246")
        .setAuthor(`Left ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Owner", guild.owner.user.tag)
        .addField("ID", guild.id, true)
        .addField("Users", guild.memberCount, true)
        .addField("Channels", guild.channels.size, true)
         channel.send(embed);
	});
bot.on("guildMemberAdd", member => {
  var guild = member.guild;
  var count = guild.memberCount;
  
  if (guild.id !== '454711337138782219') return;
  
  var total = member.guild.channels.get('455507062718332948')
  var memberc = member.guild.channels.get('455507095203348480')
  var botcounts = member.guild.channels.get('455758511918284801')
  
  total.setName(`Total Users: ${count}`)
  memberc.setName(`Member Count: ${guild.members.filter(m => !m.user.bot).size}`)
  
  if(member.user.bot){botcounts.setName(`Bot Count: ${guild.members.filter(m => m.user.bot).size}`)}

  });
    
bot.on("guildMemberRemove", member => {
  var guild = member.guild;
  var count = guild.memberCount;
  
  if (guild.id !== '454711337138782219') return;
  
  var total = member.guild.channels.get('455507062718332948')
  var memberc = member.guild.channels.get('455507095203348480')
  var botcounts = member.guild.channels.get('455758511918284801')
  
  total.setName(`Total Users: ${count}`)
  memberc.setName(`Member Count: ${guild.members.filter(m => !m.user.bot).size}`)
  
  if(member.user.bot){botcounts.setName(`Bot Count: ${guild.members.filter(m => m.user.bot).size}`)}
    
    console.log(`${member} just left us!`)
  });
	bot.login(process.env.TOKEN);
