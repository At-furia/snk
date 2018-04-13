const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function spéciale(message,prefix,bot){

if (message.author.bot) return;
if (message.channel.type === 'dm') return;

let guild = message.member.guild;
let Role = guild.roles.find('name', 'spéciale');
let Roleremoveentrainement = guild.roles.find('name', "brigade d'entrainement");

if(!message.content.startsWith(prefix)) return;

if (message.content.startsWith(prefix + 'spéciale') || message.content.startsWith(prefix + 'spéciale') ) {
if(!message.member.roles.some(r=>["brigade d'entrainement"].includes(r.name)) )
return message.reply("Vous avez déjà choisi.");
if (message.member.roles.has(Role.id)) {
    message.channel.sendMessage('tu possède déjà ce rôle !');
    console.log(`${message.author.username} possède déjà ce rôle !`);
}
else {
message.member.addRole(Role);
message.channel.sendMessage('Tu as rejoint la brigade Spéciale !');
message.member.removeRole(Roleremoveentrainement);
console.log(`${message.author.username} got a role`);
}}}

module.exports = spéciale
