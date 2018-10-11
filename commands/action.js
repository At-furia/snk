const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

const persoadapter = new FileSync('perso.json');
const luladapter = new FileSync('lul.json');
const bonusadapter = new FileSync('bonus.json');
const persodb = low(persoadapter);
const luldb = low(luladapter);
const bonusdb = low(bonusadapter);

var rperso = persodb.get('perso').size().value();
var rlul = luldb.get('lul').size().value();
var rbonus = bonusdb.get('bonus').size().value();

function rdm(message,prefix,bot){
    if (message.channel.type === 'dm') return;

    if (message.content.startsWith(prefix + 'action')) {
        let verite = message.guild.channels.find("name", "action");

randomperso();
var lul = luldb.get(`lul[${randnum}].lul_value`).toString().value();
console.log(randnum);

randomlul();
var perso = persodb.get(`perso[${randnum}].perso_value`).toString().value();
console.log(randnum);

randombonus();
var bonus = bonusdb.get(`bonus[${randnum}].bonus_value`).toString().value();
console.log(randnum);
            if (message.channel === verite) { 

var rdm_embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField("Vous vous promenez tranquillement et tout d'un coup vous apercevez quelqu'un..", `${perso}` + ' est en train de' + ` ${lul},` + ` ${bonus}`)
message.channel.sendEmbed(rdm_embed)
    
}
else {

        message.reply("Merci d'utiliser cette commande dans le salon #action 😉")
        }
}}
    function randomperso(min, max) {
        min = Math.ceil(0);
        max = Math.floor(rperso);
        randnum = Math.floor(Math.random() * (max - min) + min);
    
    }
    function randomlul(min, max) {
        min = Math.ceil(0);
        max = Math.floor(rlul);
        randnum = Math.floor(Math.random() * (max - min) + min);
    
    }
    function randombonus(min, max) {
        min = Math.ceil(0);
        max = Math.floor(rbonus);
        randnum = Math.floor(Math.random() * (max - min) + min);
    
    }
module.exports = rdm
