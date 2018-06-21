const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function haine(message,prefix,bot){

    if(message.content.startsWith(prefix +'haine')){

        if (message.author.bot) return;

        randomhaine = Math.ceil(Math.random() * 101);

        var memberhaine = message.mentions.users.first();


        if(!memberhaine){
            message.reply("L'utilisateur n'existe pas !");
        
            }else{
            message.reply("Il y'a a " + `${randomhaine}` + "% de haine entre toi et " + memberhaine );
            
            }}}

    module.exports = haine
