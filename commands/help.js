const Discord = require('discord.js');

function help(message,prefix){
    if(message.content.startsWith(prefix + 'help')){
        
        var help_embed = new Discord.RichEmbed()
                .setColor('#D9F200')
            .addField("Fonctionnement des commandes", "Chaque membre possède les commande de son grade sur le discord ainsi que les commandes des grades inférieurs ")
            .addField("Nouvelles commandes !","<fac Choisis une faction aléatoire si vous avez le rôle Brigade d'Entrainement\n<roulette Tire un nombre aléatoire entre 0 et 100")
            .addField("Autres commandes !", "<signalement Ouvre le panneau de signalement SNK\n<love +@pseudo Affiche votre % d'amour entre vous et le membre mentionné\n<haine +@pseudo Comme love mais version haine.")
            .addField("Commandes générales", "<réseaux Affiche les différents réseaux sociaux de la communauté SNK - FR\n<spoil activer ou désactiver le canal Spoil et Manga-scans\n<3l Jeu des 3 lettres")
            .addField("Commandes Bataillon d'exploration, Garnison et Brigades Spéciales ", "<chasse Pour lancer le minijeu 'Chasse'\n<kill Pour lancer le minijeu 'Apocalypse Titans' ")
            .addField("Commandes Titan Shifter ", "<manger Pour lancer le minijeu 'Apocalypse Titans'\n<chasse Pour lancer le minijeu 'Chasse' ")
        //    .addField("Commandes 1ère Division", "<love +@pseudo Affiche votre % d'amour entre vous et le membre mentionné\n<haine +@pseudo Comme love mais version haine.")
            .setFooter("Crée par Alex_ et Eren Jäger")
        //  message.channel.sendEmbed(help_embed);
                var newhelp_embed = new Discord.RichEmbed()
                .setColor('#D9F200')
            .addField("Fonctionnement des commandes", "Chaque membre possède des commandes suivant sa faction, pour plus de lisibilité, la commande <helo est divisé un plusieurs morceaux")
            .addField("Jeux", "<jeux Affiche toute la liste des jeux")
            .addField("Communauté", "<commu Affiche toute la liste des commandes de la communauté")
            message.channel.sendEmbed(newhelp_embed);
        }
    
        if(message.content.startsWith(prefix + 'jeux')){
            
                    var jeuxhelp_embed = new Discord.RichEmbed()
            .setDescription("Voici la liste des jeux disponibles par faction !\nChaque commandes sont a faire dans le canal du même nom, ou dans #commande-bot si aucun salon n'existe pour.\nChaque commandes possédant son salon sera directement éxpliquée en description de salon, si aucun salon n'exixte, elle sera expliquée ici.")
            .addField("Bataillon, Garnison et Brigade Spéciale","<kill")
            .addField("Titan Shifter","<manger ")
            .addField("Commandes en commun avec un salon sépcifique","<chasse\n<3l - <5l - <10l (salon #jeu-des-3-lettres)\n<action")
            .addField("Commandes en commun dans le salon #commande-bot","<haine @pseudo - <love @pseudo Indique le % d'amour ou de haine entre vous et la personne mentionée (% aléatoire)\n<question +cequevousvoulez (Pose une question au bot, qui répond Oui / Non / Peut être)\n<roulette Tire un nombre aléatoire entre 0 et 100\n")
                     message.channel.sendEmbed(jeuxhelp_embed);
                    }
        if(message.content.startsWith(prefix + 'commu')){
                var commu_embed = new Discord.RichEmbed()
            .setDescription("Voici la liste des commandes disponibles en dehors des jeux !")
            .addField("Commande de base","<fac Choisit une faction aléatoire (uniquement si vous êtes encore brigade d'entrainement\n<spoil Donne l'accès aux salons spoils (refaire pour désactiver)\n<réseaux Affiche les différents réseaux sociaux de la communauté SNK-FR")
            .addField("Autres","<signalement Ouvre le panneau de signalement de membres SNK")
                    message.channel.sendEmbed(commu_embed);
                }
    }
module.exports = help
