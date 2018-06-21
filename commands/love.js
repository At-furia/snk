const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function love(message,prefix,bot){

    if(message.content.startsWith(prefix +'love')){

        if (message.author.bot) return;

        randomlove = Math.ceil(Math.random() * 101);

        var memberlove = message.mentions.users.first();
    
        if(!memberlove){
            message.reply("L'utilisateur n'existe pas !");
        
            }else{
            message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
            
            }}}

    module.exports = love
