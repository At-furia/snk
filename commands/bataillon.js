const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function bataillon(message,prefix,bot){

  //      if (message.author.bot) return;
 //       if (message.channel.type === 'dm') return;
    
   // let guild = message.member.guild;
  //  let Role = guild.roles.find('name', "Le Bataillon d'Exploration");
 //   let Roleremoveentrainement = guild.roles.find('name', "Brigades d'Entraînements");
    
  //  if(!message.content.startsWith(prefix)) return;
    
 //   if (message.content.startsWith(prefix + 'bataillon')) {
        
      //  if(!message.member.roles.some(r=>["Brigades d'Entraînements"].includes(r.name)) )
 //   return message.reply("Tu as déjà choisi un corps d'armée, tu ne peux pas en choisir un autre !");
        
   //     if (message.member.roles.has(Role.id)) {
  //          message.channel.sendMessage('tu possède déjà ce rôle !');
  //  }
   //     else {
   //     message.member.addRole(Role);
  //      message.channel.sendMessage("Tu as rejoint le Bataillon d'Exploration !");
  //      message.member.removeRole(Roleremoveentrainement);
//}}}
    
     if (message.content.startsWith(prefix + 'bataillon')) {
        message.reply("Le Bataillon d'Exploration ne recrute plus actuellement, d'autres factions ont besoin de membres ;)")
    }}

module.exports = bataillon
