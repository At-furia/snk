const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function shifter(message,prefix,bot){

//if (message.author.bot) return;
   //     if (message.channel.type === 'dm') return;
    
   // let guild = message.member.guild;
   // let Role = guild.roles.find('name', "Titan Shifter");
   // let Roleremoveentrainement = guild.roles.find('name', "Brigades d'Entraînements");
    
  //  if(!message.content.startsWith(prefix)) return;
 //   
 //   if (message.content.startsWith(prefix + 'shifter')) {
        
   //     if(!message.member.roles.some(r=>["Brigades d'Entraînements"].includes(r.name)) )
  //  return message.reply("Tu as déjà choisi un corps d'armée, tu ne peux pas en choisir un autre !");
        
  //      if (message.member.roles.has(Role.id)) {
  //          message.channel.sendMessage('tu possède déjà ce rôle !');
 //   }
   //     else {
//message.member.addRole(Role);
   //     message.channel.sendMessage("Tu as rejoint les Titans Shifter !");
  //      message.member.removeRole(Roleremoveentrainement);
//}}}


if (message.content.startsWith(prefix + 'shifter')) {
       message.reply("Les Ttians Shifter ne recrutent plus actuellement, d'autres factions ont besoin de membres ;)")
   }}
module.exports = shifter
