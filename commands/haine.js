const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function haine(message,prefix,bot){

    if(message.content.startsWith(prefix +'haine')){

        if (message.author.bot) return;
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
           .setAuthor("🖕 Haine Machine 🖕",message.author.avatarURL)
           .setDescription(`😠**${memberlove.tag}**\n😠**${message.author.tag}**`)
                .setColor(0x00AE86)
                .addField(`${randomlove}% || ​██████████ ​ || `,"**Résultat:**`Malgrès quelques petits moments d'énervement, vous pouvez ne pas vous foutre sur la gueule!`")

                            message.channel.send(love_embed)
            }
            if (randomlove < 80 && randomlove > 49) {
                
                var love_embed = new Discord.RichEmbed()
           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
           .setAuthor("🖕 Haine Machine 🖕",message.author.avatarURL)
           .setDescription(`😠**${memberlove.tag}**\n😠**${message.author.tag}**`)
                .setColor(0x00AE86)
                .addField(`${randomlove}% || ​███████████████████ ​ || `,"**Résultat:**`Serait-ce une lueur de haine qu'on apperçoit entre vos deux cœurs? On dirait qu'il y a une haine réciproque.`")

                            message.channel.send(love_embed)
            }
            if (randomlove > 80 && randomlove < 101) {
                
                var love_embed = new Discord.RichEmbed()
           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
                .setAuthor("🖕 Haine Machine 🖕",message.author.avatarURL)
                .setDescription(`😠**${memberlove.tag}**\n😠**${message.author.tag}**`)
                .setColor(0x00AE86)
                .addField(`${randomlove}% || ​██████████████████████████████ ​ || `,"**Résultat:**`Quand deux coeurs désaccordés se rencontrent la haine les éclates. Félicitations vous vous détestez!`")

                            message.channel.send(love_embed)
            }
            if (randomlove > 100 ) {
                
                var love_embed = new Discord.RichEmbed()
           // message.reply("Il y'a a " + `${randomlove}` + "% d'amour entre toi et " + memberlove );
           .setAuthor("🖕 Haine Machine 🖕",message.author.avatarURL)
           .setDescription(`😠**${memberlove.tag}**\n😠**${message.author.tag}**`)
                .setColor(0x00AE86)
                .addField(`${randomlove}% || ​████████████████████████████████████████​ || `,"**Résultat:**`Organisez un combat de MMA et foutez vous royalement sur la gueule, un spectacle incroyable pour tout les spectateurs!`")

                            message.channel.send(love_embed)
            }
        
     }}

    module.exports = haine
