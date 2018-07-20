const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

const killadapter = new FileSync('kill.json');
const killdb = low(killadapter);
const adapter = new FileSync('database.json');
const db = low(adapter);

var rkill = killdb.get('kill').size().value();

function kill(message,prefix,bot){

    if (message.content.startsWith(prefix + 'kill')) {

    let tuer = message.guild.channels.find("name", "kill");

     if(!message.member.roles.some(r=>["Escouade Livaï","La Garnison","Les Brigades Spéciales","Le Bataillon d'Exploration","test","1ère Division"].includes(r.name)) )
    return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
    
    randomkill();

    var titankill = Math.floor(Math.random() * 126);
    var kill = killdb.get(`kill[${randnum}].kill_value`).toString().value();
        
    if (message.channel === tuer) { 

    message.reply("a tué " + titankill + " Titans" + `${kill}`)
    var msgauthor = message.author.username;

if(message.author.bot)return;
} else {

    message.reply("Merci d'utiliser cette commande dans le salon #kill 😉")
        }
    }  if (titankill < 10){

    message.reply("C'est tout ? Je vous pensais plus fort que ça... 😔 ")
}
if (titankill > 115) {
    message.reply("😮 WOAW QUELLE FORCE !!! 😍")

}

    function randomkill(min, max) {
        min = Math.ceil(0);
        max = Math.floor(rkill);
        randnum = Math.floor(Math.random() * (max - min) + min);
    
    }

      var chance = Math.floor(Math.random() * 101);

var bruh = ["10","20","30","40"];
var result = Math.floor((Math.random() * bruh.length) + 0);


    if (chance > 75) {
        
               if (titankill > 16 ){

        if(!message.member.roles.some(r=>["Les Brigades Spéciales","Le Bataillon d'Exploration"].includes(r.name)) ){
return bot.channels.get("444817395840712704").send(`+ ${bruh[result]} points pour ` + msgauthor + ` de la faction La Garnison (pour avoir tué des Titans)`)
        }
    
    if(!message.member.roles.some(r=>["Les Brigades Spéciales","La Garnison"].includes(r.name)) ) {
        return bot.channels.get("444817395840712704").send(`+ ${bruh[result]} points pour ` + msgauthor + ` de la faction Le Bataillon d'Exploration (pour avoir tué des Titans)`)

    }

    if(!message.member.roles.some(r=>["Le Bataillon d'Exploration","La Garnison"].includes(r.name)) ) {
        return bot.channels.get("444817395840712704").send(`+ ${bruh[result]} points pour ` + msgauthor + ` de la faction Les Brigades Spéciales (pour avoir tué des Titans)`)

    }
    }
    }
}

    module.exports = kill
