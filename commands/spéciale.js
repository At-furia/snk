const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function spéciale(message,prefix,bot){

if (message.author.bot) return;
if (message.channel.type === 'dm') return;
if (message.content === prefix + "fac") {
let guild = message.member.guild;
// azasq
let brig = guild.roles.find(role => role.name === "Les Brigades Spéciales");
let bataillon = guild.roles.find(role => role.name === "Le Bataillon d'Exploration");
let shifter = guild.roles.find(role => role.name === "Titan Shifter");
let garnison = guild.roles.find(role => role.name === "La Garnison");
let Roleremoveentrainement = guild.roles.find(role => role.name === "Brigades d'Entraînements");

var member = message.author.username

    function random(min, max) {
        min = Math.ceil(1);
        max = Math.floor(4);
        randnum = Math.floor(Math.random() * (max - min + 1) + min);
    }
    random();
    if (!message.member.roles.some(r => ["Brigades d'Entraînements"].includes(r.name)))
        return message.reply("Impossible de changer de faction avant la prochaine saison !");

    if (randnum == 1) {
        message.member.addRole(brig);
        message.member.removeRole(Roleremoveentrainement);
        message.reply("Tu m'a l'air d'être un bon fainéant ! Tu as rejoint les Brigades Spéciales")
    }
    if (randnum == 2) {
        message.member.addRole(bataillon);
        message.member.removeRole(Roleremoveentrainement);
        message.reply("Pas peur de la mort ? Tu as rejoint le Bataillon d'Exploration")
    }
    if (randnum == 3) {
        message.member.addRole(garnison);
        message.member.removeRole(Roleremoveentrainement);
        message.reply("La Garnison c'est trop bon ! Tu as rejoint la Garnison")
    }
    if (randnum == 4) {
        message.member.addRole(shifter);
        message.member.removeRole(Roleremoveentrainement);
        message.reply("Mouai, pourquoi pas ! Tu as rejoint les Titans Shifter")
    }
}
        
    }

module.exports = spéciale
