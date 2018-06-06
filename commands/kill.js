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

    
    if (titankill < 75 ){
    if (titankill < 25 ) 

bot.channels.get("444817395840712704").send(`+ 10 points pour ` + msgauthor + ` (pour avoir tué des Titans)`)

else {

bot.channels.get("444817395840712704").send(`+ 20 points pour ` + msgauthor + ` (pour avoir tué des Titans)`)
}
}

else if (titankill > 75 ){
    if (titankill < 100 ) 

bot.channels.get("444817395840712704").send(`+ 30 points pour ` + msgauthor + ` (pour avoir tué des Titans)`)

 else {
    bot.channels.get("444817395840712704").send(`+ 40 points pour ` + msgauthor + ` (pour avoir tué des Titans)`)

}
} 
}
    module.exports = kill
