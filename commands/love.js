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
                
                        var love_embed = new Discord.RichEmbed()

           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
                .setAuthor("client.user.username","client.user.avatarURL")
                .addField("❤ Love machine ❤",`${memberlove}\nclient.user.username`)
                .setColor(0x00AE86)


                            message.channel.send(love_embed)

            }}

             var joueur = message.author.username;
            if (message.author.bot) return;
            if (message.content.startsWith(prefix + "question")) {
                var sayings = ["Oui.","Non.","Peut être.."];

    
                var result = Math.floor((Math.random() * sayings.length) + 0);

               var mdrembed = new Discord.RichEmbed()
                .setTitle("Questions/Réponses")
                .addField(`Question de ${joueur} :`,`${message.content.slice(10, message.content.length)}`)
                .addField("Réponse :",`${sayings[result]}`);
                message.channel.send(mdrembed)


        }
}

    module.exports = love
