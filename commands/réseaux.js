const Discord = require('discord.js');

function réseaux(message,prefix){
    if(message.content.startsWith(prefix + 'réseaux') || (message.content.startsWith(prefix + 'rés'))){
        var réseaux_embed = new Discord.RichEmbed()
            .setColor('#D9F200')
            .addField("Site", "En construction")
            .setDescription("Nos réseaux sociaux !","https://vignette.wikia.nocookie.net/shingekinokyojin/images/2/2e/Eren_anime_character_image.png")
            .setThumbnail("https://pbs.twimg.com/profile_images/955736782271926272/vlmq1MWv_400x400.jpg")
            .setURL("https://twitter.com/FR_SNK")
            .addField("Twitter", "https://twitter.com/FR_SNK")
            .addField("Facebook", "https://www.facebook.com/erenjager.snkfrance.9")
            .addField("Youtube", " Chaine Youtube de SNK-FR : https://www.youtube.com/channel/UCKzU9176ms-0z6Kmjpz2Onw")
            .addField("Twitch", " SNK-FR : https://www.twitch.tv/snkerenjager78/")
            .addField("Autre", "Psn : Eren-Jage_SNKFR\nSnapchat : erenjagersnkfr\nInstagram: https://www.instagram.com/snkfra/")
            .setFooter("Crée par Alex_ et Eren Jäger","https://vignette.wikia.nocookie.net/shingekinokyojin/images/2/2e/Eren_anime_character_image.png")
        message.channel.sendEmbed(réseaux_embed);
        console.log("Commande réseaux demandée"); 

        }   
    }
module.exports = réseaux
