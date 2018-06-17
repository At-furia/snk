const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function spoil(message,prefix,bot){

if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
    
    let guild = message.member.guild;
    let Role = guild.roles.find('name', 'SPOIL');
    let removespoil = guild.roles.find('name', "SPOIL");
    
    if(!message.content.startsWith(prefix)) return;
    
    if (message.content.startsWith(prefix + 'spoil')) {
        
        
        if (message.member.roles.has(Role.id)) {
            message.channel.sendMessage('Canal Spoil et Manga-Scans désactivé !');
            message.member.removeRole(removespoil);

    }
        else {
        message.member.addRole(Role);
        message.channel.sendMessage('Canal Spoil et Manga-Scans activé !');
}}}

module.exports = spoil
