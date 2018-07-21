const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

const mangeradapter = new FileSync('manger.json');
const mangerdb = low(mangeradapter);
const adapter = new FileSync('database.json');
const db = low(adapter);

var rmanger = mangerdb.get('manger').size().value();
db.defaults({xp: [], sugg: [], ptc: [], ptckill: [],pt: []}).write()



function manger(message,prefix,bot){

db.defaults({xp: [], sugg: [], ptc: [], ptckill: [],pt: []}).write()

    if (message.content.startsWith(prefix + 'manger')) {

    let miam = message.guild.channels.find("name", "manger");

    if(!message.member.roles.some(r=>["Titan Shifter","test"].includes(r.name)) )
    return message.reply("Vous devez être un Titan pour utiliser cette commande !");
    
    randommanger();

    var titankille = Math.floor(Math.random() * 251);
    var bouffer = mangerdb.get(`manger[${randnum}].manger_value`).toString().value();
        
    if (message.channel === miam) { 

    message.reply("a tué " + titankille + " Humains" + `${bouffer}`)
    var msgauthor = message.author.username;

if(message.author.bot)return;
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


    if (chance > 75) {
        
               if (titankille > 51 ){
                   
                   var userptcdb = db.get("pt").filter({faction: "shifter"}).find('pt').value();
    var userptc = Object.values(userptcdb)
    db.get("pt").find({faction: "shifter"}).assign({faction: "shifter", pt: userptc[1] += bruh[result]}).write();
                   bot.channels.get("444817395840712704").send(`+ ${bruh[result]} points pour ` + msgauthor + ` de la faction Titans Shifter (pour avoir tué des Humains)`)
               } 
    }
    
     if (message.content.startsWith(prefix + 'tp')) {
            var ptckill = db.get("pt").filter({faction: "garnison"}).find('pt').value()
            var ptckillfinal = Object.values(ptckill);
                     var ptckiell = db.get("pt").filter({faction: "exploration"}).find('pt').value()
            var ptckillfinale = Object.values(ptckiell);
                     var ptckilel = db.get("pt").filter({faction: "spéciale"}).find('pt').value()
            var ptckillfinael = Object.values(ptckilel);
                              var pteckilel = db.get("pt").filter({faction: "shifter"}).find('pt').value()
            var pteckillfinael = Object.values(pteckilel);
            var xp_embed = new Discord.RichEmbed()
                .setColor("#590599")
                .setDescription("points par faction (reset toute les 23h, sauf si crash entre temps)")
                .addField("Garnison :", `${ptckillfinal[1] -= 1} points` )
                .addField("Brigade Spéciale :", `${ptckillfinael[1] -= 1} points` )
                .addField("Bataillon d'exploration :", `${ptckillfinale[1] -= 1} points` )
                .addField("Titans Shifter :", `${pteckillfinael[1] -= 1} points` )

            message.channel.send({embed: xp_embed});
        }
               
}

    module.exports = manger
