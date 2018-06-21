const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function haine(message,prefix,bot){

    if(message.content.startsWith(prefix +'haine')){

        if (message.author.bot) return;

        randomhaine = Math.ceil(Math.random() * 101);

        var memberhaine = message.mentions.users.first();

        if(!message.member.roles.some(r=>["1ère Division","Escouade Livaï","Escouade Mike","test"].includes(r.name)) )
        return message.reply("Cette commande est réservée uniquement aux VIP (1ère Division) pour le moment !");

        if(!memberhaine){
            message.reply("L'utilisateur n'existe pas !");
        
            }else{
            message.reply("Il y'a a " + `${randomhaine}` + "% de haine entre toi et " + memberhaine );
            
            }}}

    module.exports = haine
