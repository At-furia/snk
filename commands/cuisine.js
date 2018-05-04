const Discord = require('discord.js');

function cuisine(message,prefix){
    let tchn = message.guild.channels.find("name", "maison-abandonnée");
    if (message.channel === tchn) { 
    if (message.author.bot) return;
    if (message.content === prefix + "Cuisine"){

    var cuisine = new Discord.RichEmbed()
    .setDescription("Vous trouvez la cuisine, ça tombe bien vous avez faim !")
    .addField("Contenus importants de la cuisine", `Frigo
Four
Placard
Évier
`)
    message.channel.sendEmbed(cuisine);

}

if (message.content === prefix + "Frigo"){
    var Frigo = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Frigo", "Vous ouvrez ce frigo, terrible erreur, il ne marche plus et de la nourriture en décomposition lâche une odeur inssuportable.")
    message.channel.sendEmbed(Frigo);
}

if (message.content === prefix + "Four"){
    var four = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Four", "Bah quoi ? Vous n'avez jamais vu un four ?")
    message.channel.sendEmbed(four);
}

if (message.content === prefix + "Placard"){
    var placard = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Placard", "Vous ouvrez ce placard et y trouvez une boite de bonbon encore bonne.")
    message.channel.sendEmbed(placard);
}

if (message.content === prefix + "Évier"){
    var evier = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Évier", "Vous n'allez quand même pas faire toute cette vaisselle, vous n'êtes pas ici pour ça..")
    message.channel.sendEmbed(evier);
}
    
}}
module.exports = cuisine
