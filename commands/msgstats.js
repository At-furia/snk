const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({xp: [], ptc:[], ptckill:[]}).write()

function msgstats(message,prefix,bot){

    var msgauthor = message.author.username;

    if(message.author.bot)return;

    if(!db.get("xp").find({username: msgauthor}).value()){
        db.get("xp").push({username: msgauthor, xp: 1}).write();
    }else{
        var userxpdb = db.get("xp").filter({username: msgauthor}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb)
        console.log(userxp);
        console.log(`Nombre d'xp : ${userxp[1]}`)

        db.get("xp").find({username: msgauthor}).assign({username: msgauthor, xp: userxp[1] += 1}).write();

   
           
            if (message.content === prefix + "msgstat"){        
                var xp = db.get("xp").filter({username: msgauthor}).find('xp').value()
                var ptc = db.get("ptc").filter({username: msgauthor}).find('ptc').value()
                var ptckill = db.get("ptckill").filter({username: msgauthor}).find('ptckill').value()
                var xpfinal = Object.values(xp);
                var ptcfinal = Object.values(ptc);
                var ptckillfinal = Object.values(ptckill);
                var xp_embed = new Discord.RichEmbed()
                    .setColor("#590599")
                    .setDescription("Stats depuis le dernier redémarrage du bot")
                    .addField("Messages :", `${message.author.username} : ${xpfinal[1]} messages postés` )
     ///               .addField("Minijeux :", `Chasse de Titans : ${ptcfinal[1] += -1} points
// Titans Apocalypse Titans : ${ptckillfinal[1] += -1} Titans tués ` )
                message.channel.send({embed: xp_embed});
        }}}
        
        module.exports = msgstats
