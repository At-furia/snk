const Discord = require('discord.js');

function help(message,prefix){
    if(message.content.startsWith(prefix + 'help')){
        
        var help_embed = new Discord.RichEmbed()
                .setColor('#D9F200')
            .addField("Fonctionnement des commandes", "Chaque membre possède les commande de son grade sur le discord ainsi que les commandes des grades inférieurs ")
            .addField("Nouvelles commandes !","<fac Choisis une faction aléatoire si vous avez le rôle Brigade d'Entrainement")
            .addField("Autres commandes !", "<signalement Ouvre le panneau de signalement SNK\n<love +@pseudo Affiche votre % d'amour entre vous et le membre mentionné\n<haine +@pseudo Comme love mais version haine.")
            .addField("Commandes générales", "<réseaux Affiche les différents réseaux sociaux de la communauté SNK - FR\n<spoil activer ou désactiver le canal Spoil et Manga-scans\n<3l Jeu des 3 lettres")
            .addField("Commandes Bataillon d'exploration, Garnison et Brigades Spéciales ", "<chasse Pour lancer le minijeu 'Chasse'\n<kill Pour lancer le minijeu 'Apocalypse Titans' ")
            .addField("Commandes Titan Shifter ", "<manger Pour lancer le minijeu 'Apocalypse Titans'\n<chasse Pour lancer le minijeu 'Chasse' ")
        //    .addField("Commandes 1ère Division", "<love +@pseudo Affiche votre % d'amour entre vous et le membre mentionné\n<haine +@pseudo Comme love mais version haine.")
            .setFooter("Crée par Alex_ et Eren Jäger")
        message.channel.sendEmbed(help_embed);
        }
    }
module.exports = help
