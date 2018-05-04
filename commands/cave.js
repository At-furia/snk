const Discord = require('discord.js');

function cave(message,prefix){

    
    if (message.author.bot) return;
    if (message.content === prefix + "Porte de la cave"){
        let tchn = message.guild.channels.find("name", "maison-abandonnée");
       if (message.channel === tchn) { 
    var cave = new Discord.RichEmbed()
    .setDescription("Vous arrivez devant la porte de la cave.")
    .addField("Porte de la cave", `Vous avez besoin d'une clef pour ouvrir la porte.`)
    .addField("Porte de la cave", `Cherchez un moyens d'ouvrir la porte.`)

    message.channel.sendEmbed(cave);
    }}
    let cavee = message.guild.channels.find("name", "cave");
   if (message.channel === cavee) { 
    if (message.content === prefix + "Cave"){
        

        var sdb = new Discord.RichEmbed()
        .setDescription("Vous voilà dans la cave, il fais très sombre et la lumière ne marche pas très bien.")
        .addField("Contenus importants de la Cave", `Seaux   
Bouteilles
Vielles machines
Vieux équipements
Cartons`)
    message.channel.sendEmbed(sdb);

    

        } if (message.content === prefix + "Seaux"){
        var miroir = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Seaux", "Des seaux a moitié remplis d'eau ou peut-être de pisse, mais on ne va pas vérifier")
        message.channel.sendEmbed(miroir);
    }

    if (message.content === prefix + "Bouteilles"){
        var bbb = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Seaux", "De l'alcool, partout, des centaines de bouteilles, mais bon ce n'est pas l'heure de boire.")
        message.channel.sendEmbed(bbb);
    }

    if (message.content === prefix + "Vieilles machines"){
        var bbéb = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Vielles machines", "De vielles machines que vous n'avez jamais vu, malheuresement elles ne semblent pas en état de fonctionner..")
        message.channel.sendEmbed(bbéb);
    }

    if (message.content === prefix + "Vieux équipements"){
        var ala = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Vieux équipements", "Des équipements super vieux et en mauvais état, comment ont-ils été aussi abimés ?")
        message.channel.sendEmbed(ala);
    }

    if (message.content === prefix + "Cartons"){
        var br = new Discord.RichEmbed()
        .setDescription("Prise de notes.")
        .addField("Cartons", "Après avoir fouillé dans quelques cartons, vous tombez sur une carte que vous étudierez chez vous.")
        .addField("Cartons", "Si vous pensez avoir fini de tout explorer, vous pouvez rentrer chez vous <Maison")
      //  .setImage("https://cdn.discordapp.com/attachments/317741663613222912/436921256567242764/Capture.JPG")
       // .setFooter("Une 'Porte cachée' se trouve au fond de la cave.")
        message.channel.sendEmbed(br);
    }
    }
}
//let guild = message.member.guild;
   // let tnl = guild.roles.find('name', 'tunnel');


//if (message.content === prefix + "Porte cachée"){
//message.reply("Vous ouvrez la porte et rentrez dans un grand tunnel")
    //   message.member.addRole(tnl);

   
//}
module.exports = cave
