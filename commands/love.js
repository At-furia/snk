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
            
                }
                  
                if (randomlove < 50) {
                
                var love_embed = new Discord.RichEmbed()
           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
           .setAuthor("💖 Love Machine 💖",message.author.avatarURL)
           .setDescription(`💗**${memberlove.tag}**\n💗**${message.author.tag}**`)
                .setColor(0x00AE86)
                .addField(`${randomlove}% || ​██████████ ​ || `,"**Résultat:**`Amour imposible`")

                            message.channel.send(love_embed)
            }
            if (randomlove < 80 && randomlove > 49) {
                
                var love_embed = new Discord.RichEmbed()
           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
           .setAuthor("💖 Love Machine 💖",message.author.avatarURL)
           .setDescription(`💗**${memberlove.tag}**\n💗**${message.author.tag}**`)
                .setColor(0x00AE86)
                .addField(`${randomlove}% || ​███████████████████ ​ || `,"**Résultat:**`Un amour est possible entre vous`")

                            message.channel.send(love_embed)
            }
            if (randomlove > 80 && randomlove < 101) {
                
                var love_embed = new Discord.RichEmbed()
           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
                .setAuthor("💖 Love Machine 💖",message.author.avatarURL)
                .setDescription(`💗**${memberlove.tag}**\n💗**${message.author.tag}**`)
                .setColor(0x00AE86)
                .addField(`${randomlove}% || ​██████████████████████████████ ​ || `,"**Résultat:**`C'est l'amour fou entre vous`")

                            message.channel.send(love_embed)
            }
            if (randomlove > 100 ) {
                
                var love_embed = new Discord.RichEmbed()
           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
           .setAuthor("💖 Love Machine 💖",message.author.avatarURL)
           .setDescription(`💗**${memberlove.tag}**\n💗**${message.author.tag}**`)
                .setColor(0x00AE86)
                .addField(`${randomlove}% || ​████████████████████████████████████████​ || `,"**Résultat:**`Vous êtes fais pour être ensemble jusqu'à a la fin de votre vie !`")

                            message.channel.send(love_embed)
            }
        }

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
