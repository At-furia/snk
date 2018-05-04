const Discord = require('discord.js');

function chambre(message,prefix){
  let tchn = message.guild.channels.find("name", "maison-abandonnée");
    if (message.channel === tchn) { 
    if (message.author.bot) return;
    if (message.content === prefix + "Chambre"){

    var lachambre = new Discord.RichEmbed()
    .setDescription("Vous êtes dans la première chambre de cette maison,après un instant d'hésitation vous rentrez dans la pièce et vous fouillez la chambre")
    .addField("Contenus importants de la chambre", `Lit
Fenêtre
Armoire
Bureau
Lustre
`)
    message.channel.sendEmbed(lachambre);

}

if (message.content === prefix + "Lit"){
    var Lit = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Lit", "Vous êtes fatigué mais est-ce une raison pour faire une sieste dans le lit d'un inconnu ?")
    .addField("Lit","Vous fouillez en dessous du lit, vous ne voyez que de la poussière...")
    message.channel.sendEmbed(Lit);

}

    if (message.content === prefix + "Fenêtre"){
        var fenetre = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Fenêtre", "Vous avez une très belle vue sur le jardin, malheuresement c'est bien tout ce que vous pouvez voir..")
        message.channel.sendEmbed(fenetre);
}
 
    if (message.content === prefix + "Armoire"){
    var fenetre = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Armoire", "Cette armoire est presque vide, il n'y a que des cintreset quelques habits")
    .addField("Armoire", "Cette armoire pourrait être utile en cas de cache cache, mais vous n'êtes pas la pour ça...")
    message.channel.sendEmbed(fenetre);
}

if (message.content === prefix + "Bureau"){
    var bureau = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Bureau", "Dans un des tiroir du bureau, vous trouvez une feuille mouillée, malheuresement elle a pris l'humidité et vous ne comprenez rien.")
    //.addField("Bureau", "Cette feuille dois surement vouloir dire quelque chose, malheuresement elle a pris l'humidité et certaines lettres ont disparues...")
    message.channel.sendEmbed(bureau);
}

if (message.content === prefix + "Lustre"){
    var lsutreu = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Lustre", "Juste un lustre, tout ce qu'il y'a de plus basique.")
    message.channel.sendEmbed(lsutreu);
}}
}
    module.exports = chambre
