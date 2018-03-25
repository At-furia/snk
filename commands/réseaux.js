const Discord = require('discord.js');

function réseaux(message,prefix){
    if(message.content.startsWith(prefix + 'réseaux') || (message.content.startsWith(prefix + 'rés'))){
        var réseaux_embed = new Discord.RichEmbed()
            .setColor('#D9F200')
            .setTitle('http://snk-france.fr/')
            .addField("Site", "En construction")
            .setDescription("Nos réseaux sociaux !","https://vignette.wikia.nocookie.net/shingekinokyojin/images/2/2e/Eren_anime_character_image.png")
            .setThumbnail("https://pbs.twimg.com/profile_images/955736782271926272/vlmq1MWv_400x400.jpg")
            .setURL("https://twitter.com/FR_SNK")
            .addField("Twitter", "https://twitter.com/FR_SNK")
            .addField("Facebook", "https://www.facebook.com/Shingeki-no-kyojin-3-147624222254357/ \nPage Facebook de SNK-FR : https://www.facebook.com/SNKFrance/")
            .addField("Youtube", " Chaine Youtube de SNK-FR : https://www.youtube.com/channel/UCKzU9176ms-0z6Kmjpz2Onw")
            .addField("Partenaires", "Twitter de Bla Bla Manga : https://twitter.com/BlaBla_Manga \nChaine Youtube de Bla Bla Manga : https://www.youtube.com/channel/UCMj7bG6yzvJAn1rfGN-kE9g")
            .setFooter("Crée par Alex_ et Eren Jäger","https://vignette.wikia.nocookie.net/shingekinokyojin/images/2/2e/Eren_anime_character_image.png")
        message.channel.sendEmbed(réseaux_embed);
        console.log("Commande réseaux demandée"); 

        }   
    }
module.exports = réseaux
