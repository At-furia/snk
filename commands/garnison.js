const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function garnison(message,prefix,bot){

if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
    
    let guild = message.member.guild;
    let Role = guild.roles.find('name', 'La Garnison');
    let Roleremoveentrainement = guild.roles.find('name', "Brigades d'Entraînements");
    
    if(!message.content.startsWith(prefix)) return;
    
    if (message.content.startsWith(prefix + 'garnison')) {
        
        if(!message.member.roles.some(r=>["Brigades d'Entraînements"].includes(r.name)) )
    return message.reply("Tu as déjà choisi un corps d'armée, tu ne peux pas en choisir un autre !");
        
        if (message.member.roles.has(Role.id)) {
            message.channel.sendMessage('tu possède déjà ce rôle !');
    }
        else {
        message.member.addRole(Role);
        message.channel.sendMessage('Tu as rejoint la Garnison !');
        message.member.removeRole(Roleremoveentrainement);
}}}

module.exports = garnison
