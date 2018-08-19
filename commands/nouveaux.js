const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function nouveaux(member,bot){

    let role = member.guild.roles.find("name", "Brigades d'Entraînements");
        member.guild.channels.find("name", "brigade-d-entrainement");
        var bienvenue_embed = new Discord.RichEmbed()

        
        .addField(`Présentation`,`
        Vous venez d'integrer le monde de SNK-FRANCE,
        nous vous félicitions pour votre intégrations au brigades d'entraînements.
        
        *Vous devez désormais choisir un corps d'armée entre :
        -La Garnison
        -Le Bataillon d'Exploration
        -Les Brigades Spéciales

        *Cependant si vous préférez rejoindre le camps des titans, vous pouvez integrez également
        -Titan Shifter

        SNK-FR vous expliquera le fonctionnement plus bas dans vos messages :ok_hand:
        Soyez poli et courtois, un français correct est demandé au minimum.
        Le respect est de vigueur, les propos rascistes, injure ou autre ne seront pas toléré.`)
        .setFooter( `*Ne vous inquietez pas, la faction c'est juste pour le RP, histoire de s'amuser, vous aurez les même droits sur le 
        serveur quel que soit votre faction.
        Aussi, nous vous demandons de jouer le jeu et de choisir un pseudo de personnage en lien avec SNK`)
        .addBlankField()
        member.sendMessage(bienvenue_embed);

        var bienvenue2_embed = new Discord.RichEmbed()
               .addField(`Présentation de SNK-FR`,`
        Bonjour je me présente : SNK-FR, je suis votre "guide" dans cette ville, je ne peux malheuresement pas vous répondre directement en message privé, il faudra donc tout me dire sur un des canaux de discussion !
        Pour cela deux choix s'offre a vous :

        -Rejoindre l'armée humaine: 
        Pour cela il vous suffit de taper <garnison OU <bataillon OU <b-spéciales 

        -Rejoindre le camps des titans:
        Pour cela il vous suffit de taper  <shifter  

        Une fois votre camp choisit, vous avez a disposition plusieurs commandes
        qui vous seront détaillées en tapant <help !
        Il vous sera aussi possible de gagner des titres grâce a des "jeux" !`)
        member.sendMessage(bienvenue2_embed);
    
            var bienvenue3_embed = new Discord.RichEmbed()
            .addField("test","test")
            member.sendMessage(bienvenue3_embed);


}

module.exports = nouveaux
