const Discord = require('discord.js');

function admin(message,prefix){

    if(message.content.startsWith(prefix + 'admin')){

        if(!message.member.roles.some(r=>["Escouade Livaï","test"].includes(r.name)) )
        return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
        
        var admin_embed = new Discord.RichEmbed()
                .setColor('#D9F200')
                .addField("Commandes Modération", "<kick @PseudoDuMembre\n<ban @PseudoDuMembre")
                .setFooter("Crée par Alex_ et Eren Jäger")
            message.author.sendMessage(admin_embed);
            console.log("Commande Admin demandée")  ; 
    }
}
module.exports = admin
