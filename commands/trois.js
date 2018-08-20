const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function trois(message,prefix,bot){

        let jdl = message.guild.channels.find("name", "jeu-des-3-lettres");

    if (message.channel === jdl) { 

        var alphabet = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        random = Math.ceil(Math.random() * 26);
        random1 = Math.ceil(Math.random() * 26);
        random2 = Math.ceil(Math.random() * 26);
        random3 = Math.ceil(Math.random() * 26);
        random4 = Math.ceil(Math.random() * 26);
        random5 = Math.ceil(Math.random() * 26);
        random6 = Math.ceil(Math.random() * 26);
        random7 = Math.ceil(Math.random() * 26);
        random8 = Math.ceil(Math.random() * 26);
        random9 = Math.ceil(Math.random() * 26);

        var lettre_aleatoire = alphabet[random];
        var lettre_aleatoire1 = alphabet[random1];
        var lettre_aleatoire2 = alphabet[random2];
        var lettre_aleatoire3 = alphabet[random3];
        var lettre_aleatoire4 = alphabet[random4];
        var lettre_aleatoire5 = alphabet[random5];
        var lettre_aleatoire6 = alphabet[random6];
        var lettre_aleatoire7 = alphabet[random7];
        var lettre_aleatoire8 = alphabet[random8];    
        var lettre_aleatoire9 = alphabet[random9];

        var theme = ['','SNK','Animaux','Objets','+18','Nature','Corps','Aliments','Fruits','Légumes','Animé/Manga','Vulgaire'];    
        randomt = Math.ceil(Math.random() * 11);

        var theme_aleatoire = theme[randomt];
    
    if (message.content === prefix + "3l"){   

        var bruh_embed = new Discord.RichEmbed()

        .setTitle("Jeu des 3 lettres")
        .addField("Qu'est ce que le jeu des 3 lettres ?","C'est un jeu qui vous tire aléatoirement 3 lettres, avec ces lettres vous devez faire une sorte de slogan, par exemple :\nLettres aléatoire : A T V --> Armée de Titans Vegan")
        .addField("Lettres : ",` ${lettre_aleatoire}\n${lettre_aleatoire1}\n${lettre_aleatoire2} `)
        .addField("MODE HARDCORE : Thème a respecter : ",`${theme_aleatoire}`)
        .setFooter("Codé et idée par ▼𝓐𝓵𝒆𝔁_ [Admin Bot]▲")

        message.channel.send({embed: bruh_embed});
    }
if (message.content === prefix + "5l"){   

        var bruh_embed5 = new Discord.RichEmbed()

        .setTitle("Jeu des 5 lettres")
        .addField("Qu'est ce que le jeu des 5 lettres ?","C'est un jeu qui vous tire aléatoirement 5 lettres, avec ces lettres vous devez faire une sorte de slogan, par exemple :\nLettres aléatoire : A T V D R --> Armée de Titans Vegan Drogués au Réglisse")
        .addField("Lettres : ",` ${lettre_aleatoire}\n${lettre_aleatoire1}\n${lettre_aleatoire2}\n${lettre_aleatoire3}\n${lettre_aleatoire4} `)
        .addField("MODE HARDCORE : Thème a respecter : ",`${theme_aleatoire}`)
        .setFooter("Codé et idée par ▼𝓐𝓵𝒆𝔁_ [Admin Bot]▲")

        message.channel.send({embed: bruh_embed5});
    }
    }
}
    module.exports = trois
