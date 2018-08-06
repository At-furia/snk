const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ xp: [], sugg: [], story: [], blagues:[], ptc:[], pt:[], ptckill:[], emojimort:[], titre:[], inventaireplayer:[], argent:[], argentplayer:[], shop:[], inventaire:[], banque: [], localisation:[], boss:[]}).write()

function boss(message,prefix){
    db.defaults({ xp: [], sugg: [], story: [], blagues:[], ptc:[], pt:[], ptckill:[], emojimort:[], titre:[], inventaireplayer:[], argent:[], argentplayer:[], shop:[], inventaire:[], banque: [], localisation:[], boss:[]}).write()

    var joueur = message.author.username;
    if (message.author.bot) return;
    var viedb = db.get("boss").filter({ boss: "titan" }).find('vie').value();
    var vie = Object.values(viedb)

    if (message.content === prefix + "bs") {
        titanalive = true;
        message.channel.sendMessage("Un titan géant arrive et tente de tuer tout humains, vous décidez d'unir vos forces pour essayer de le tuer ('<f' Pour combattre le Titan)")
        var timeout = setTimeout(function () {

            titanalive = false;
            message.channel.send("")

                .catch(console.error); // add error handling here
        }, 1 * 43200000);
    }
    var vielolmdr = Math.ceil(Math.random() * 50);
    
    let chs = message.guild.channels.find("name", "titans");

    if (message.channel === chs ) {
    if (message.content === prefix + "f") {
            if (titanalive && message.content != null) {
                if (vie[1] >= 150)
                db.get("boss").find({ boss: "titan" }).assign({ vie: vie[1] -= vielolmdr }).write();
                message.reply(`Attaque le titan et lui fait perdre ${vielolmdr} points de vie ! [${vie[1]}/15000]`)
            }
            if (vie[1] <= 150 && vie[2] <= 1) {
                message.reply("Le titan se met a hurler et puis s'écroule au sol, vous l'avez vaincu !")
                db.get("boss").find({ boss: "titan" }).assign({ alive: vie[2] = 2 }).write();
                titanalive = false
            }
    }
    }
    
    
        var vieedb = db.get("boss").filter({ boss: "humains" }).find('vie').value();
    var viee = Object.values(vieedb)
    
    if (message.content === prefix + "bh") {
        titanalivee = true;
        message.channel.sendMessage("Vous décidez d'attaquer les humains, battez vous et tuez les tous ! ('<f' pour attaquer les humains)")
        var timeout = setTimeout(function () {

            titanalivee = false;
            message.channel.send("")

                .catch(console.error); // add error handling here
        }, 1 * 43200000);
    }
    var vielolmddr = Math.ceil(Math.random() * 50);
    
    
    let chds = message.guild.channels.find("name", "humains");

    if (message.channel === chds ) {
    if (message.content === prefix + "f") {
            if (titanalivee && message.content != null) {
                if (viee[1] >= 150)
                db.get("boss").find({ boss: "humains" }).assign({ vie: viee[1] -= vielolmddr }).write();
                message.reply(`Attaque le titan et lui fait perdre ${vielolmddr} points de vie ! [${viee[1]}/20000]`)
            }
            if (viee[1] <= 150 && viee[2] <= 1) {
                message.reply("Tout les humains présents ont été tués !")
                db.get("boss").find({ boss: "humains" }).assign({ alive: viee[2] = 2 }).write();
                titanalivee = false
            }
    }
    }
    }
module.exports = boss
