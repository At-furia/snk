const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function love(message,prefix,bot){

     if(message.content.startsWith(prefix +'love')){
            if (message.author.bot) return;
          //   var joueur = message.author.username;

            randomlove = Math.ceil(Math.random() * 101);
    
            var memberlove = message.mentions.users.first();
        if(!memberlove) return;
        
      //  {
             ////   message.reply("L'utilisateur n'existe pas !");
            
               // }
             //    else if (memberlove = joueur) {
                
             //   var love_embed = new Discord.RichEmbed()
           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
          // .setAuthor("💖 Love Machine 💖",message.author.avatarURL)
          // .setDescription(`💗**${memberlove.tag}**\n💗**${message.author.tag}**`)
          //      .setColor(0x00AE86)
           //     .addField(`200% || ​████████████████████████████████████████​ || `,"**Résultat:**`Vous vous aimez parfaitement, votre main fais sûrement l'affaire le soir, seul(e) dans le noir..`")

          //                  message.channel.send(love_embed)
         //   }  
                if (randomlove < 50) {
                
                var love_embed = new Discord.RichEmbed()
           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
           .setAuthor("💖 Love Machine 💖",message.author.avatarURL)
           .setDescription(`💗**${memberlove.tag}**\n💗**${message.author.tag}**`)
                .setColor(0x00AE86)
                .addField(`${randomlove}% || ​██████████ ​ || `,"**Résultat:**`La fleur de l'amour est fanée avant d'avoir fleuri. Laissez tomber.`")

                            message.channel.send(love_embed)
            }
            if (randomlove < 80 && randomlove > 49) {
                
                var love_embed = new Discord.RichEmbed()
           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
           .setAuthor("💖 Love Machine 💖",message.author.avatarURL)
           .setDescription(`💗**${memberlove.tag}**\n💗**${message.author.tag}**`)
                .setColor(0x00AE86)
                .addField(`${randomlove}% || ​███████████████████ ​ || `,"**Résultat:**`Serait-ce une lueur d'amour qu'on apperçoit entre vos deux cœurs? On dirait qu'il y a une attirance réciproque.`")

                            message.channel.send(love_embed)
            }
            if (randomlove > 80 && randomlove < 101) {
                
                var love_embed = new Discord.RichEmbed()
           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
                .setAuthor("💖 Love Machine 💖",message.author.avatarURL)
                .setDescription(`💗**${memberlove.tag}**\n💗**${message.author.tag}**`)
                .setColor(0x00AE86)
                .addField(`${randomlove}% || ​██████████████████████████████ ​ || `,"**Résultat:**`Quand deux coeurs accordés se rencontrent l'amour les éclaire. Félicitations vous êtes compatibles!`")

                            message.channel.send(love_embed)
            }
            if (randomlove > 100 ) {
                
                var love_embed = new Discord.RichEmbed()
           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
           .setAuthor("💖 Love Machine 💖",message.author.avatarURL)
           .setDescription(`💗**${memberlove.tag}**\n💗**${message.author.tag}**`)
                .setColor(0x00AE86)
                .addField(`${randomlove}% || ​████████████████████████████████████████​ || `,"**Résultat:**`Faites sonner les carillons, invitez vos amis, préparez la fête: le mariage est prévu pour bientôt!`")

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
