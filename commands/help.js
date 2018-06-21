const Discord = require('discord.js');

function help(message,prefix){
    if(message.content.startsWith(prefix + 'help')){
        
        var help_embed = new Discord.RichEmbed()
                .setColor('#D9F200')
            .addField("Fonctionnement des commandes", "Chaque membre possède les commande de son grade sur le discord ainsi que les commandes des grades inférieurs ")
            .addField("Nouvelles commandes !", "<signalement Ouvre le panneau de signalement SNK\n<love +@pseudo Affiche votre % d'amour entre vous et le membre mentionné\n<haine +@pseudo Comme love mais version haine.")
            .addField("Commandes Brigade d'entrainement", "<réseaux Affiche les différents réseaux sociaux de la communauté SNK - FR\n<b-spéciales Rejoindre Les Brigades spéciales\n<garnison Rejoindre La Garnison\n<bataillon Rejoindre Le Bataillon d'Exploration\n<shifter Rejoindre les Titans Shifter\n<spoil activer ou désactiver le canal Spoil et Manga-scans\n<3l Jeu des 3 lettres")
            .addField("Commandes Bataillon d'exploration, Garnison et Brigades Spéciales ", "<chasse Pour lancer le minijeu 'Chasse'\n<kill Pour lancer le minijeu 'Apocalypse Titans' ")
            .addField("Commandes Titan Shifter ", "<manger Pour lancer le minijeu 'Apocalypse Titans'\n<chasse Pour lancer le minijeu 'Chasse' ")
        //    .addField("Commandes 1ère Division", "<love +@pseudo Affiche votre % d'amour entre vous et le membre mentionné\n<haine +@pseudo Comme love mais version haine.")
            .addField("Commandes Escouade Livaï", "<admin Affiche les commandes Admin.")
            .setFooter("Crée par Alex_ et Eren Jäger")
        message.channel.sendEmbed(help_embed);
        }
    }
module.exports = help
