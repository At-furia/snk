const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

const mangeradapter = new FileSync('manger.json');
const mangerdb = low(mangeradapter);

var rmanger = mangerdb.get('manger').size().value();



function manger(message,prefix,bot){


    if (message.content.startsWith(prefix + 'manger')) {

    let miam = message.guild.channels.find("name", "manger");

    if(!message.member.roles.some(r=>["Titan Shifter","test"].includes(r.name)) )
    return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
    
    randomkill();

    var titankill = Math.floor(Math.random() * 126);
    var kill = mangerdb.get(`kill[${randnum}].manger_value`).toString().value();
        
    if (message.channel === miam) { 

    message.reply("a tué " + titankill + " Humains" + `${kill}`)
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

    module.exports = manger
