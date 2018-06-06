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
    return message.reply("Vous devez utiliser cette commande !");
    
    randommanger();

    var titankill = Math.floor(Math.random() * 251);
    var bouffer = mangerdb.get(`kill[${randnum}].manger_value`).toString().value();
        
    if (message.channel === miam) { 

    message.reply("a tué " + titankill + " Humains" + `${bouffer}`)
    var msgauthor = message.author.username;

if(message.author.bot)return;
} else {

    message.reply("Merci d'utiliser cette commande dans le salon #manger 😉")
        }
    }}
    function randommanger(min, max) {
        min = Math.ceil(0);
        max = Math.floor(rmanger);
        randnum = Math.floor(Math.random() * (max - min) + min);
    
    }

    if (titankill < 124 ){
    if (titankill < 62 ) 

bot.channels.get("444817395840712704").send(`+ 10 points pour ` + msgauthor + ` (pour avoir mangé des Humains)`)

else {

bot.channels.get("444817395840712704").send(`+ 20 points pour ` + msgauthor + ` (pour avoir mangé des Humains)`)
}
}

else if (titankill > 124 ){
    if (titankill < 186 ) 

bot.channels.get("444817395840712704").send(`+ 30 points pour ` + msgauthor + ` (pour avoir mangé des Humains)`)

 else {
    bot.channels.get("444817395840712704").send(`+ 40 points pour ` + msgauthor + ` (pour avoir mangé des Humains)`)

}
} 


    module.exports = manger
