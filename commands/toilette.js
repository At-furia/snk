const Discord = require('discord.js');

function toilette(message,prefix){
let tchn = message.guild.channels.find("name", "maison-abandonnée");
    if (message.channel === tchn) { 
    if (message.author.bot) return;
    if (message.content === prefix + "Toilette"){

    var chiotte = new Discord.RichEmbed()
    .setDescription("Vous ouvrez une porte et vous trouvez.. les toilettes")
    .addField("Contenus importants des toilettes", `Rien, inutile de chercher une utilité a cet endroit.`)
    message.channel.sendEmbed(chiotte);
    }}
}
    module.exports = toilette

