const Discord = require('discord.js');

function help(message,prefix){
    if(message.content.startsWith(prefix + 'help')){
        
        var help_embed = new Discord.RichEmbed()
                .setColor('#D9F200')
                .addField("Fonctionnement des commandes", "Chaque membre possède les commande de son grade sur le discord ainsi que les commandes des grades inférieurs ")
                .addField("Commandes Brigade d'entrainement", "<réseaux Affiche les différents réseaux sociaux de la communauté SNK - FR")
                .addField("Commandes Bataillon d'exploration, Garnison et Brigades Spéciales ", "<sugg Envoyer une suggestion d'amélioration du serveur Discord.\n<stats Voir son nombre de messages sur le serveur. ")
                .addField("Commandes Esquade Livaï", "<admin Affiche les commandes Admin.")
                .setFooter("Crée par Alex_ et Eren Jäger")
            message.channel.sendEmbed(help_embed);
            console.log("Commande Help demandée"); 
        }
    }
module.exports = help
