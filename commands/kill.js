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

    if(!message.member.roles.some(r=>["Escouade Livaï","La Garnison","Les Brigades Spéciales","Le Bataillon d'Exploration","test"].includes(r.name)) )
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
    }
if (titankill < 10){

    message.reply("C'est tout ? Je vous pensais plus fort que ça... 😔 ")
}
if (titankill > 115) {
    message.reply("😮 WOAW QUELLE FORCE !!! 😍")

}
    if(message.author.bot)return;

if(!db.get("ptckill").find({username: msgauthor}).value()){
    db.get("ptckill").push({username: msgauthor, ptckill: 1}).write();
}else{
    var userptckilldb = db.get("ptckill").filter({username: msgauthor}).find('ptckill').value();
    console.log(userptckilldb);
    var userptckill = Object.values(userptckilldb)
    console.log(userptckill);
    console.log(`Nombre d'ptckill : ${userptckill[1]}`)
    var titankilln = Math.floor(titankill);
    db.get("ptckill").find({username: msgauthor}).assign({username: msgauthor, ptckill: userptckill[1] += titankilln}).write();

}
}


    function randomkill(min, max) {
        min = Math.ceil(0);
        max = Math.floor(rkill);
        randnum = Math.floor(Math.random() * (max - min) + min);
    
    }

    module.exports = kill
