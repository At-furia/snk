const Discord = require('discord.js');

function salon(message,prefix){
    let tchn = message.guild.channels.find("name", "maison-abandonnée");
    if (message.channel === tchn) { 
            if (message.author.bot) return;
    if (message.content === prefix + "Salon"){

    var salon = new Discord.RichEmbed()
    .setDescription("Vous voilà dans un grand salon avec pleins de meubles.")
    .addField("Contenus importants du Salon", `Table
Canapé
Télé
Meubles
Pendule
Tableaux
Cheminée
`)
    message.channel.sendEmbed(salon);

}

if (message.content === prefix + "Table"){
    var table = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Table", "Une énorme table de plusieurs mètres se trouve devant vous, mais il n'y a rien dessus, dommage..")
    message.channel.sendEmbed(table);
}

if (message.content === prefix + "Canapé"){
    var canape = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Canapé", "Ce canapé est confortable, malheuresement vous ne pouvez pas prendre quelques minutes de repos chez un inconnu")
    message.channel.sendEmbed(canape);
}

if (message.content === prefix + "Télé"){
    var tele = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Télé", "Vous ne trouvez pas la télécommande pour allumer la télé, puis te toute façon vous n'en avez pas besoin")
    message.channel.sendEmbed(tele);
}

if (message.content === prefix + "Meubles"){
    var meubles = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Meubles", "Il n'y a rien d'utile dans les meubles")
    .addField("Meubles", "En cherchant mieux, vous trouvez une clef 🔑")
    message.channel.sendEmbed(meubles);
}

if (message.content === prefix + "Pendule"){
    var pendule = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Pendule", "L'heure indique 7h32, est ce vraiment utile ?")
    message.channel.sendEmbed(pendule);
}

if (message.content === prefix + "Tableaux"){
    var Tableaux = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Tableaux", "Des vieux tableaux avec toutes sorte de peinture, rien de plus")
    message.channel.sendEmbed(Tableaux);
}

if (message.content === prefix + "Cheminée"){
    var Cheminée = new Discord.RichEmbed()
    .setDescription("Prise de notes.")
    .addField("Cheminée", "Après quelques calculs, vous pouvez affirmer que le Père Noël ne passe pas dans cette cheminée.")
    message.channel.sendEmbed(Cheminée);
}
}
}

    module.exports = salon
