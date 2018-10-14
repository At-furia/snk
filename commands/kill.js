const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

const killadapter = new FileSync('kill.json');
const killdb = low(killadapter);
const adapter = new FileSync('database.json');
const db = low(adapter);

var rkill = killdb.get('kill').size().value();
 
db.defaults({xp: [], sugg: [], ptc: [], ptckill: [],pt: []}).write()

function kill(message,prefix,bot){
 
    db.defaults({xp: [], sugg: [], ptc: [], ptckill: [],pt: []}).write()
        if (message.channel.type === 'dm') return;
    
           if (message.content.startsWith(prefix + 'kill')) {
            var msgauthor = message.author.username;
    
            let tuer = message.guild.channels.find("name", "kill");
        
             if(!message.member.roles.some(r=>["Escouade Livaï","La Garnison","Les Brigades Spéciales","Le Bataillon d'Exploration","test","1ère Division"].includes(r.name)) )
            return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
            
            randomkill();
        
            var titankill = Math.floor(Math.random() * 126);
            var kill = killdb.get(`kill[${randnum}].kill_value`).toString().value();
                
            if (message.channel === tuer) { 
                if (talkedRecently.has(msgauthor)) {
                    message.reply("Tu dois attendre 3 secondes avant de pouvoir refaire la commande.");
                } else {
                 
                  message.reply("a tué " + titankill + " Titans" + `${kill}`)
            var msgauthor = message.author.username;
        }talkedRecently.add(msgauthor);
                setTimeout(() => {
                    // Removes the user from the set after a minute
                    talkedRecently.delete(msgauthor);
                }, 3000);
            }
        }
            function randomkill(min, max) {
                min = Math.ceil(0);
                max = Math.floor(rkill);
                randnum = Math.floor(Math.random() * (max - min) + min);
            
            }
        
              var chance = Math.floor(Math.random() * 101);
        
        var bruh = [10,20,30,40];
        var result = Math.floor((Math.random() * bruh.length) + 0);
        
        
            if (chance > 85) {
                
                       if (titankill > 94 ){
        
                if(!message.member.roles.some(r=>["Les Brigades Spéciales","Le Bataillon d'Exploration"].includes(r.name)) ){
                   var userptcdb = db.get("pt").filter({faction: "garnison"}).find('pt').value();
            var userptc = Object.values(userptcdb)
            db.get("pt").find({faction: "garnison"}).assign({faction: "garnison", pt: userptc[1] += bruh[result]}).write();
        return bot.channels.get("444817395840712704").send(`+ ${bruh[result]} points pour ` + msgauthor + ` de la faction La Garnison (pour avoir tué des Titans)`)
               
          
                }
            
            if(!message.member.roles.some(r=>["Les Brigades Spéciales","La Garnison"].includes(r.name)) ) {
               var userptcdb = db.get("pt").filter({faction: "exploration"}).find('pt').value();
            var userptc = Object.values(userptcdb)
            db.get("pt").find({faction: "exploration"}).assign({faction: "exploration", pt: userptc[1] += bruh[result]}).write();
                return bot.channels.get("444817395840712704").send(`+ ${bruh[result]} points pour ` + msgauthor + ` de la faction Le Bataillon d'Exploration (pour avoir tué des Titans)`)
        
            }
        
            if(!message.member.roles.some(r=>["Le Bataillon d'Exploration","La Garnison"].includes(r.name)) ) {
               var userptcdb = db.get("pt").filter({faction: "spéciale"}).find('pt').value();
            var userptc = Object.values(userptcdb)
            db.get("pt").find({faction: "spéciale"}).assign({faction: "spéciale", pt: userptc[1] += bruh[result]}).write();
                return bot.channels.get("444817395840712704").send(`+ ${bruh[result]} points pour ` + msgauthor + ` de la faction Les Brigades Spéciales (pour avoir tué des Titans)`)
        
            }
            }}
                       
            if (message.content.startsWith(prefix + 'tp')) {
                var ptckill = db.get("pt").filter({faction: "garnison"}).find('pt').value()
                var ptckillfinal = Object.values(ptckill);
                         var ptckiell = db.get("pt").filter({faction: "exploration"}).find('pt').value()
                var ptckillfinale = Object.values(ptckiell);
                         var ptckilel = db.get("pt").filter({faction: "spéciale"}).find('pt').value()
                var ptckillfinael = Object.values(ptckilel);
                var xp_embed = new Discord.RichEmbed()
                    .setColor("#590599")
                    .setDescription("points par faction kill/manger")
                    .addField("Garnison :", `${ptckillfinal[1] -= 1} points` )
                    .addField("Brigade Spéciale :", `${ptckillfinael[1] -= 1} points` )
                    .addField("Bataillon d'exploration :", `${ptckillfinale[1] -= 1} points` )
                message.channel.send({embed: xp_embed});
            }
                   
                       
    }

    module.exports = kill
