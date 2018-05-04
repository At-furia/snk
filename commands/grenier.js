const Discord = require('discord.js');

function grenier(message,prefix){
   let tchn = message.guild.channels.find("name", "maison-abandonnée");
   if (message.channel === tchn) { 
    if (message.author.bot) return;
    if (message.content === prefix + "Grenier"){

        var jd = new Discord.RichEmbed()
        .setDescription("Au haut d'un escalier, vous trouvez un grenier et vous allez y jeter un coup d'oeil")
        .addField("Contenus importants du Grenier", `Araignée
Cage  
Journal
    `)
    message.channel.sendEmbed(jd);

    }

    if (message.content === prefix + "Araignée"){
        var bl = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Araignée", "Jusqu'à preuve du contraire, cette araignée ne vous embête pas, alors laissez la tranquille voyons !")
        message.channel.sendEmbed(bl);

    }
    if (message.content === prefix + "Cage"){
        var fleurs = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Cage", "Cette cage aurait pu servir a enfermer un cochon.. ou un enfant pas sage.")
        message.channel.sendEmbed(fleurs);
    }

    if (message.content === prefix + "Journal"){
        var arbre = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Journal", "Vous avez trouvé un journal avec quelques infos incroyables")
        .addField("Journal", "Le journal semble avoir plusieurs pages, regardez avec <Page")
        message.channel.sendEmbed(arbre);
    }

    if (message.content === prefix + "Page"){
        var aled = new Discord.RichEmbed()
        .setDescription("Journal personnel")
        .addField("16 Mai 844", `Aujourd'hui un viel homme m'a envoyé un lettre avant de mourir, cette lettre raconte que ce viel homme travaillait sur des recherches par rapport a notre monde.
Il m'a dit avoir travaillé sur une machine assez spéciale qu'il a retrouvé dans un bunker en dessous de la ville, une machine que personne n'a jamais vu avant ce jour !
Je ne sais pas quoi en penser, je vais me coucher j'ai besoin d'y réfléchir..`)
        .setFooter("Tourner la page <Page2")
        message.channel.sendEmbed(aled);
    }

    if (message.content === prefix + "Page2"){
        var aledr = new Discord.RichEmbed()
        .setDescription("Journal personnel")
        .addField("23 Mai 844", `Après une semaine pour y réfléchir, j'ai décidé d'aller voir cet homme afin d'en savoir plus.
Après avoir discuté avec lui, il m'a indiqué qu'il possède une maison cachée en dehors des murs ou des documents sont en sécurités, il faudrait que j'aille voir pour continuer ses recherches.. mais c'est vachement risqué merde !
C'est peut être juste un vieux fou après tout..`)
        .setFooter("Tourner la page <Page3")
        message.channel.sendEmbed(aledr);
    }

    if (message.content === prefix + "Page3"){
        var alede = new Discord.RichEmbed()
        .setDescription("Journal personnel")
        .addField("9 Juin 844", `Chaque nuit je pense a ce que cet homme m'a dit.. Je vais aller vérifier si il dit vrai, si vous voyez ce journal c'est que je suis surement mort.
Je vous laisse un plan de la ou je suis parti dans ma cave.`)
        .setFooter("Fin")
        message.channel.sendEmbed(alede);
    }
   
}}
module.exports = grenier
