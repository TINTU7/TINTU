let Discord = require("discord.js"); 
const { prefix } = require('./settings/config.js')

let client = new Discord.Client(); 

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
 res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`🔗 Listening to DOX: http://localhost:${port}`);
  console.log(`🔗 Replit URL: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
})


   const activities_list = [
        "DOX",
        "NO WAVES NO FUN",


        ]; // creates an arraylist containing phrases you want your bot to switch through.

    client.on('ready', () => {
      console.log(`Prefix is ${prefix}`)

        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
            client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
        }, 30000); // Runs this every 10 seconds.
    });



client.on("message", message => {
  if(message.content.startsWith(`${prefix}purge`)){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`_purge 50\` `)
if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")

message.channel.bulkDelete(clear)
message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `)
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("You dont have perms!")
} 
}
  if(message.content === `${prefix}serverinfo`) {
 let embed = new Discord.MessageEmbed()
 .setColor("AQUA")
 .setTitle("Server Info")
 .setImage(message.guild.iconURL()  )
 .setDescription(`${message.guild}'s Information.`)
 .addField("Member Count", `This server has ${message.guild.memberCount} member(s).`)
 .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emoji(s).`)
 .addField("Roles Count", `This server has ${message.guild.roles.cache.size} role(s).`)
 message.channel.send(embed)
}



let days = Math.floor(client.uptime / 86400000);
 let hours = Math.floor(client.uptime / 3600000) % 24;
 let minutes = Math.floor(client.uptime / 60000) % 60;
 let seconds = Math.floor(client.uptime / 1000) % 60;
if(message.content === `${prefix}devinfo`) {
 let embed = new Discord.MessageEmbed()
 .setTitle("ᴍʏ ɪɴꜰᴏ")
 .setColor("AQUA")
 .setDescription("ᴅᴄ ᴅᴇᴠᴇʟᴏᴘᴇʀ & ʙᴏᴛ ᴅᴇᴠᴇʟᴏᴘᴇʀ")
 .addField(`ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴛɪɴᴛᴜ`, '<@717691138621964380>')
 .addField(`Uptime:`, `${days}d ${hours}h ${minutes}m ${seconds}s`)
 .addField(`ᴀʙᴏᴜᴛ ᴍʏ ᴅᴇᴠᴇʟᴏᴘɪɴɢ`, 'ᴛʜɪꜱ ᴘʀᴏᴊᴇᴄᴛ ᴡᴀꜱ ᴄᴏᴍᴘʟᴇᴛᴇʟʏ ꜱᴇʟꜰ ᴄᴏᴅᴇᴅ ʙʏ ᴍʏ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴛɪɴᴛᴜ. ɪᴛ ᴛᴏᴏᴋ ᴅᴀʏꜱ ᴛᴏ ʜɪᴍ ᴛᴏ ᴍᴀᴋᴇ ᴍᴇ ʀᴇᴀʟ')
 .addField(`Latency is:`, `${Date.now() - message.createdTimestamp}ms`)
 .addField(`API Latency is:`, `${Math.round(client.ws.ping)}ms`)
  .setFooter("DOX DEVELOPMENT")
 message.channel.send(embed)
}
if (message.content === "@TECHNICHAL TRIAL") {
message.channel.send(`${message.author} USE mchelp`)
}
if (message.content.startsWith(`${prefix}say`)) {

 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) message.reply("WHAT DO YOU WANT ME TO SAY?")
 message.delete();

 if (sentence != "mcsay" || "@everyone") {
 message.channel.send(sentence);
 }
 console.log(message.author.username + " said :- " + sentence)
 }  

if(message.content === `${prefix}invite`) {
 let embed = new Discord.MessageEmbed()
 .setTitle(`__DOX BOT__`)
 .setColor("AQUA")
   .setThumbnail(message.client.user.displayAvatarURL() )
    .setDescription(
`
HAI DO YOU LOVE USING DOX BOT THEN INVITE IT NOW

[**INVITE LINK**](https://discord.gg/6H9n3ZFtH2)`)


   .setImage(`https://media.discordapp.net/attachments/890116247822434355/890535152168607744/standard_45.gif`)

 message.channel.send(embed)
}


if(message.content === "here"){
message.channel.send("help")
}
if(message.content === '<@910710287415113278057>'){
message.channel.send(`Hai ${message.author.toString()} My Prefix Is **${prefix}** Use ${prefix}help To see Other Commands `)
}
if(message.content === `${prefix}help`) {
 let embed = new Discord.MessageEmbed()
 .setTitle("__HELP MENU__")
 .setColor("AQUA")
 .setThumbnail(client.user.displayAvatarURL() )
 .setDescription(`

THIS BOT WAS FULLY CODED BY TINTU
`)

.addField(`**__ANNOUNCEMENT CMD__**`, 'ann')

 .addField(`**__OTHER CMDS__**`, 'help , invite , avatar , ban , kick , say , purge , serverinfo , devinfo , abm , rules ')

 .addField("**__STATS__**",
`>>> :gear: **${client.guilds.cache.reduce((a,b) => a + b.memberCount, 0)} Members**
:file_folder: on **${client.guilds.cache.size} Guilds**
📶 **\`${Math.floor(client.ws.ping)}ms\` Ping**
 Made by Tintu `)
 .setImage('https://media.discordapp.net/attachments/949361744827019265/953237932624445471/standard_10.gif')




 .setFooter("DOX DEVELOPMENT")


 .setTimestamp()
 message.channel.send(embed)
}
if(message.content === `${prefix}cmd`) {
 let embed = new Discord.MessageEmbed()
 .setTitle("")
 .setColor("AQUA")
 .setThumbnail(client.user.displayAvatarURL() )
.addField("__CMD HELP__",
`>>> announce - ANNOUNCEMENT CMD
rules - ANNOUNCE RULES
help - TO SEE HELP MENU
invite - TO INVITE ME
avatar - TO SEE AVATAR OF A USER
ban - TO BAN A USER FROM A SERVER
kick - TO KICK A USER FROM A SERVER
say - SAY COMMAND 
purge - TO DELETE MESSAGES OF A SPECIFIC CHANNEL 
serverinfo - TO KNOW ABOUT SERVER 
devinfo - TO KNOW ABOUT ME
abm - TO KNOW ABOUT A SPECIFIC USER`)
 .setImage('https://media.discordapp.net/attachments/949361744827019265/953237932624445471/standard_10.gif')




 .setFooter("DOX DEVELOPMENT")


 .setTimestamp()
 message.channel.send(embed)
} 



if(message.content.toLowerCase().startsWith(`${prefix}avatar`)) {
let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
let e = new Discord.MessageEmbed()
.setColor("AQUA")
.setTitle("ᴀᴠᴀᴛᴀʀ")
.setTimestamp()
.setImage(user.displayAvatarURL({ dynamic: true }))
message.channel.send(e);
};

const { MessageEmbed } = require('discord.js');
if(message.content.toLowerCase() === `${prefix}verify`) {
let role = message.guild.roles.cache.find(role => role.name === "VERIFIED")
message.member.roles.add(role)
let embed = new Discord.MessageEmbed()
 .setTitle("Verified")
 //.setAuthor("Bot_Name Verify", "You_Can_add_Image_Here")
// .setThumbnail("You_can_add_image_here")
 .setDescription('Now U Can See All Visible Channel')
.setColor("AQUA")


 message.channel.send(embed)
 .then(msg => {
 msg.delete({ timeout: 5000 })
//1000 = 1 sec
//5000 = 5 sec
//10000 = 10 sec
 })
 }
if(message.content === `${prefix}verify`) {
//You can use
//if(command === "verify") {
//Its need command handler
message.delete()
}
if(message.content.startsWith(`${prefix}ann`))
if (message.member.hasPermission("MANAGE_MESSAGES"))
{
 const anntext = message.content.slice("".length).trim().split(/ +/);
anntext.shift().toLowerCase().split(" ")[0]
 let embed = new Discord.MessageEmbed()
 .setTitle("__ANNOUNCEMENT__")
 .setDescription(`**${anntext.join(" ")}**`)
 .setColor("AQUA")
 .setThumbnail(message.guild.iconURL()  )
 .setImage(`${gifArray[Math.floor(Math.random() * gifArray.length)]}`)
 .setFooter(`ᴀɴɴᴏᴜɴᴄᴇᴅ ʙʏ ${message.author.username} `)
 message.channel.send(embed)
 message.delete();
 if (!message.member.hasPermission("MANAGE_MESSAGES")) {
 message.reply("You don't have the permission to do that...")
 }
}
if(message.content.startsWith(`${prefix}rules`))
if (message.member.hasPermission("MANAGE_MESSAGES"))
{
 const anntext = message.content.slice("".length).trim().split(/ +/);
anntext.shift().toLowerCase().split(" ")[4]
 let embed = new Discord.MessageEmbed()
 .setTitle("__RULES__")
 .setDescription(`**${anntext.join(" ")}**`)
 .setColor("AQUA")
 .setThumbnail("https://media.discordapp.net/attachments/930118186530140211/933075636703096842/rules.gif")
 .setImage ('https://images-ext-1.discordapp.net/external/q61mmq86qkBAg8hw1jkIh1A3qqbr_12ldTuA5OjiCzA/https/media.discordapp.net/attachments/925792453926223925/930891184874852392/20220112_235820.gif')
 .setFooter(`Rules Of ${message.guild.name} `)
 message.channel.send(embed)
 message.delete();
 if (!message.member.hasPermission("MANAGE_MESSAGES")) {
 message.reply("You don't have the permission to do that...")
 }
}
 
 if (message.content.startsWith(`${prefix}kick`)) {
 if (message.member.hasPermission("KICK_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.kick().then(mem => {
 message.channel.send(`Kicked ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
 }
 if(message.content.toLowerCase().startsWith(`${prefix}abm`)) {
let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
let e = new Discord.MessageEmbed()
.setColor("AQUA")
.setTimestamp()
.addFields({
name: "User Joined Server At",
value: member.joinedAt
}, {
name: "User Created At",
value: user.createdAt
}, {
name: "User Name & Tag",
value: user.tag
}, {
name: "User ID",
value: user.id
})
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
message.channel.send(e);
};
if (message.content.startsWith(`${prefix}ban`)) {
 if (message.member.hasPermission("BAN_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.ban().then(mem => {
 message.channel.send(`Banned ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
 }
} );

client.login(process.env.token);
