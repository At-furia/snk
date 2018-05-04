const Discord = require('discord.js');

function salledebaim(message,prefix){
    if (message.author.bot) return;
    let tchn = message.guild.channels.find("name", "maison-abandonnée");
    if (message.channel === tchn) { 
    if (message.content === prefix + "Salle de bain"){

        var sdb = new Discord.RichEmbed()
        .setDescription("Vous voilà dans votre endroit préféré, la salle de bain !")
        .addField("Contenus importants de la salle de bain", `Miroir
Baignoire   
Serviette
Canard-en-plastique
    `)
    message.channel.sendEmbed(sdb);

    }

    if (message.content === prefix + "Miroir"){
        var miroir = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Miroir", "Vous vous regardez dans le miroir, une beauté incroyable.")
        message.channel.sendEmbed(miroir);
    }

    if (message.content === prefix + "Baignoire"){
        var bgr = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Baignoire", "Vous êtes tellement sale que vous devriez peut être vous laver ici !")
        message.channel.sendEmbed(bgr);
    }

    if (message.content === prefix + "Serviette"){
        var Serviette = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Serviette", "Une magnifique serviette avec des motifs de 💩 et de 🍽️... Original.")
        message.channel.sendEmbed(Serviette);
    }

    if (message.content === prefix + "Canard-en-plastique"){
        var cep = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Canard-en-plastique", "Sans commentaires.")
        message.channel.sendEmbed(cep);
    }
}}
        module.exports = salledebaim
