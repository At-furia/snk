const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

const mangeradapter = new FileSync('manger.json');
const mangerdb = low(mangeradapter);
const adapter = new FileSync('database.json');
const db = low(adapter);

var rmanger = mangerdb.get('manger').size().value();



function manger(message,prefix,bot){


    if (message.content.startsWith(prefix + 'manger')) {

    let miam = message.guild.channels.find("name", "manger");

    if(!message.member.roles.some(r=>["Titan Shifter","test"].includes(r.name)) )
    return message.reply("Vous devez être un Titan pour utiliser cette commande !");
    
    randommanger();

    var titankille = Math.floor(Math.random() * 251);
    var bouffer = mangerdb.get(`manger[${randnum}].manger_value`).toString().value();
        
    if (message.channel === miam) { 

    message.reply("a tué " + titankille + " Humains" + `${bouffer}`)
    var msgauthor = message.author.username;

if(message.author.bot)return;
} else {

    message.reply("Merci d'utiliser cette commande dans le salon #manger 😉")
        }
    }
    function randommanger(min, max) {
        min = Math.ceil(0);
        max = Math.floor(rmanger);
        randnum = Math.floor(Math.random() * (max - min) + min);
    
    }
  var chancee = Math.floor(Math.random() * 101);

    if (chancee > 60) {
    if (titankille < 124 ){
    if (titankille < 62 ) 

bot.channels.get("444817395840712704").send(`+ 10 points pour ` + msgauthor + ` (pour avoir mangé des Humains)`)

else {

bot.channels.get("444817395840712704").send(`+ 20 points pour ` + msgauthor + ` (pour avoir mangé des Humains)`)
}
}

else if (titankille > 124 ){
    if (titankille < 186 ) 

bot.channels.get("444817395840712704").send(`+ 30 points pour ` + msgauthor + ` (pour avoir mangé des Humains)`)

 else {
    bot.channels.get("444817395840712704").send(`+ 40 points pour ` + msgauthor + ` (pour avoir mangé des Humains)`)

}
} 
    } else {
}
}

    module.exports = manger
