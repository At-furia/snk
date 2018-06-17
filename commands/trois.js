const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function trois(message,prefix,bot){

    if (message.content === prefix + "3l"){   

        var alphabet = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        random = Math.ceil(Math.random() * 26);
        random1 = Math.ceil(Math.random() * 26);
        random2 = Math.ceil(Math.random() * 26);
        
        var lettre_aleatoire = alphabet[random];
        var lettre_aleatoire1 = alphabet[random1];
        var lettre_aleatoire2 = alphabet[random2];
        
        var theme = ['','SNK','Animaux','Objets','+18','Nature','Corps','Aliments','Fruits','Légumes','Animé/Manga','Vulgaire'];    
        randomt = Math.ceil(Math.random() * 11);

        var theme_aleatoire = alphabet[randomt];

        var bruh_embed = new Discord.RichEmbed()

        .setTitle("Jeu des 3 lettres")
        .addField("Qu'est ce que le jeu des 3 lettres ?","C'est un jeu qui vous tire aléatoirement 3 lettres, avec ces lettres vous devez faire une sorte de slogan, par exemple :\nLettres aléatoire : A T V --> Armée de Titans Vegan")
        .addField("Lettres : ",` ${lettre_aleatoire}\n${lettre_aleatoire1}\n${lettre_aleatoire2} `)
        .addField("Thème (optionnel) : ",`${theme_aleatoire}`)
        .setFooter("Codé et idée par ▼𝓐𝓵𝒆𝔁_ [Admin Bot]▲")

        message.channel.send({embed: bruh_embed});
    }}
    module.exports = trois
