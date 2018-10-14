const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

const mangeradapter = new FileSync('manger.json');
const mangerdb = low(mangeradapter);
const adapter = new FileSync('database.json');
const db = low(adapter);
const talkedRecently = new Set();

var rmanger = mangerdb.get('manger').size().value();
db.defaults({xp: [], sugg: [], ptc: [], ptckill: [],pt: []}).write()



function manger(message,prefix,bot){
    if (message.channel.type === 'dm') return;

    db.defaults({xp: [], sugg: [], ptc: [], ptckill: [],pt: []}).write()
    
        if (message.content.startsWith(prefix + 'manger')) {
        if(message.author.bot)return;
            var msgauthor = message.author.username;

        let miam = message.guild.channels.find("name", "🍽-manger");
    
        if(!message.member.roles.some(r=>["Titan Shifter","test","Escouade Livaï"].includes(r.name)) )
        return message.reply("Vous devez être un Titan pour utiliser cette commande !");
        
        randommanger();
    
        var titankille = Math.floor(Math.random() * 251);
        var bouffer = mangerdb.get(`manger[${randnum}].manger_value`).toString().value();
            
        if (message.channel === miam) { 
    if (talkedRecently.has(msgauthor)) {
                    message.reply("Tu dois attendre 3 secondes avant de pouvoir refaire la commande.");
                } else {
                 
                         message.reply("a tué " + titankille + " Humains" + `${bouffer}`)

        }talkedRecently.add(msgauthor);
                setTimeout(() => {
                    // Removes the user from the set after a minute
                    talkedRecently.delete(msgauthor);
                }, 3000);
            } else {
    
        message.reply("Merci d'utiliser cette commande dans le salon #manger 😉")
            }
       }
        function randommanger(min, max) {
            min = Math.ceil(0);
            max = Math.floor(rmanger);
            randnum = Math.floor(Math.random() * (max - min) + min);
        
        }
        
          var chance = Math.floor(Math.random() * 101);
    
        var bruh = [10,20,30,40];
    var result = Math.floor((Math.random() * bruh.length) + 0);
    
    
        if (chance > 80) {
            
                   if (titankille > 187 ){
                       
                       var userptcdb = db.get("pt").filter({faction: "shifter"}).find('pt').value();
        var userptc = Object.values(userptcdb)
        db.get("pt").find({faction: "shifter"}).assign({faction: "shifter", pt: userptc[1] += bruh[result]}).write();
                       bot.channels.get("444817395840712704").send(`+ ${bruh[result]} points pour ` + msgauthor + ` de la faction Titans Shifter (pour avoir tué des Humains)`)
                   } 
        }
       
    
    
     if (message.content.startsWith(prefix + 'tp')) {
        
                              var pteckilel = db.get("pt").filter({faction: "shifter"}).find('pt').value()
            var pteckillfinael = Object.values(pteckilel);
            var xp_embed = new Discord.RichEmbed()
                .setColor("#590599")
                .addField("Titans Shifter :", `${pteckillfinael[1] -= 1} points` )

            message.channel.send({embed: xp_embed});
        }
               
}

    module.exports = manger
