exports.run = (bot, message) => {
    const fs = require("fs");

    const FileSync = require ('lowdb/adapters/FileSync')
    const low = require('lowdb')

    const adapter = new FileSync('database.json');
    const db = low(adapter);
    var prefix = "<"

    var msgauthor = message.author.username;
    var xp = db.get("xp").filter({username: msgauthor}).find('xp').value()
    var ptc = db.get("ptc").filter({username: msgauthor}).find('ptc').value()
    var ptckill = db.get("ptckill").filter({username: msgauthor}).find('ptckill').value()
    var xpfinal = Object.values(xp);
    var ptcfinal = Object.values(ptc);
    var ptckillfinal = Object.values(ptckill);
    var xp_embed = new Discord.RichEmbed()
        .addField("Messages :", `${message.author.username} : ${xpfinal[1]} messages postés.` )
        .addField("Minijeux :", `Chasse de Titans : ${ptcfinal[1] += -1} points.
Apocalypse Titans : ${ptckillfinal[1] += -1} Titans tués. ` )
    message.channel.send({embed: xp_embed});
}