const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

const killadapter = new FileSync('kill.json');
const killdb = low(killadapter);

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
    }}
    function randomkill(min, max) {
        min = Math.ceil(0);
        max = Math.floor(rkill);
        randnum = Math.floor(Math.random() * (max - min) + min);
    
    }

    module.exports = kill
