const Discord = require('discord.js');

function jardin(message,prefix){
    if (message.author.bot) return;
    let tchn = message.guild.channels.find("name", "maison-abandonnée");
    if (message.channel === tchn) { 
    if (message.content === prefix + "Jardin"){

        var jd = new Discord.RichEmbed()
        .setDescription("Un peu d'air et une petite promenade dans ce jardin")
        .addField("Contenus importants du Jardin", `Balançoire
Fleurs  
Arbre
Cabane
    `)
    message.channel.sendEmbed(jd);

    }

    if (message.content === prefix + "Balançoire"){
        var bl = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Balançoire", "C'est tellement imprévisible, Balançoire.")
        message.channel.sendEmbed(bl);

    }
    if (message.content === prefix + "Fleurs"){
        var fleurs = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Fleurs", "Coquelicot, Oeillet, Narcisse, Nigelle, Acacia, Rose, Dalhia ! De très belles fleurs ;) ")
        message.channel.sendEmbed(fleurs);
    }

    if (message.content === prefix + "Arbre"){
        var arbre = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Arbre", "Vous avez trouvé un arbre avec le numéro 666 gravé dans l'écorce..")
        message.channel.sendEmbed(arbre);
    }

    if (message.content === prefix + "Cabane"){
        var miroir = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Cabane", "Simplement une petite cabane avec quelques outils de jardinage")
        message.channel.sendEmbed(miroir);
    }
}
}
module.exports = jardin
