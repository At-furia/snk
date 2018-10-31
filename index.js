    const Discord = require('discord.js');
    const low = require('lowdb')
    const FileSync = require ('lowdb/adapters/FileSync')
    const fs = require("fs");
    const config = require("./config.json");
    require('events').EventEmitter.prototype._maxListeners = 300;

    const adapter = new FileSync('database.json');
    const db = low(adapter);
    const killadapter = new FileSync('kill.json');
    const killdb = low(killadapter);
    const mangeradapter = new FileSync('manger.json');
    const mangerdb = low(mangeradapter);

    db.defaults({xp: [], sugg: [], ptc: [], ptckill: [],pt: [], boss: [], chasse: [], pt: [], roulette: []}).write()

    var bot = new Discord.Client();
    var prefix = "<"
    var randnum = 0;
    var rkill = killdb.get('kill').size().value();
    var rmanger = mangerdb.get('manger').size().value();


    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: 'SNK - <help', type: 3}})
        bot.user.setStatus("idle")
        bot.channels.get("444817395840712704").send(`Bot redémarré, points a mettre a jour`);
         var interval = setInterval (function () {
         
        bot.channels.get("389511539347947520").send("[Message Automatique]Ce canal est un salon d'accueil, tout hors sujet/flood sera passible de mute.\nPour les Brigades d'Entraînements, rejoignez une faction avec <fac (c'est aléatoire). ")
                        .catch(console.error); // add error handling here
     }, 1 * 28800001);
    });

  bot.login(process.env.TOKEN);


      bot.on('guildMemberAdd', member => {

        let brig = member.guild.roles.find(role => role.name ===  "Les Brigades Spéciales");
        let bataillon = member.guild.roles.find(role => role.name === "Le Bataillon d'Exploration");
        let shifter = member.guild.roles.find(role => role.name === "Titan Shifter");
        let garnison = member.guild.roles.find(role => role.name === "La Garnison");
        member.guild.channels.find(channels => channels.name === "brigade-d-entrainement");
        var bienvenue_embed = new Discord.RichEmbed()

        
        .addField(`Présentation`,`
        Vous venez d'intégrer le monde de SNK-FRANCE,
        nous vous félicitions pour votre intégrations au brigades d'entraînements.
        
        *Nous allons désormais vous choisir un corps d'armée entre :
        -La Garnison
        -Le Bataillon d'Exploration 
        -Les Brigades Spéciales
        -Titan Shifter
        Suivant ce que notre voyant vois de mieux pour vous !
        Soyez poli et courtois, un français correct est demandé au minimum.
        Le respect est de vigueur, les propos racistes, injure ou autre ne seront pas toléré.`)
        .setFooter( `*Ne vous inquietez pas, la faction c'est juste pour le RP, histoire de s'amuser, vous aurez les même droits sur le 
        serveur quel que soit votre faction.
        Aussi, nous vous demandons de jouer le jeu et de choisir un pseudo un minimum sérieux !`)
        .addBlankField()
         .addField(`Présentation de SNK-FR`,`
        Bonjour je me présente : SNK-FR, je suis votre "guide" dans ce discord, je ne peux malheureusement pas vous répondre directement en message privé, il faudra donc tout me dire sur un des canaux de discussion !
        Vous avez a disposition plusieurs commandes de jeux, musiques, etc..
        qui vous seront détaillées en tapant <help ou en demandant a d'autres membres (ou aux modos et admins) !
        Il vous sera aussi possible de gagner des titres grâce a des "évènements spéciaux" !`)
        member.sendMessage(bienvenue_embed);
          
    function random(min, max) {
        min = Math.ceil(1);
        max = Math.floor(3);
        randnum = Math.floor(Math.random() * (max - min + 1) + min);
    }

    random();
    if (randnum == 1) {
        member.addRole(shifter);
    }
    if (randnum == 2) {
        member.addRole(bataillon);
    }
    if (randnum == 3) {
        member.addRole(garnison);
    }
    if (randnum == 4) {
        member.addRole(shifter);
    }
        
      })

    bot.on('message', message => {
            if (message.channel.type === 'dm') return;

        const kick = require("./commands/kick.js");
        const ban = require("./commands/ban.js");
        const réseaux = require("./commands/réseaux.js");
        const pf = require("./commands/pf.js");
        const admin = require("./commands/admin.js");
        const action = require("./commands/action.js");
        const kill = require("./commands/kill.js");
        const manger = require("./commands/manger.js");
        const help = require("./commands/help.js");
        const spéciale = require("./commands/spéciale.js");
      //  const garnison = require("./commands/garnison.js");
       // const bataillon = require("./commands/bataillon.js");
      //  const msgstats = require("./commands/msgstats.js");
        const spoil = require("./commands/spoil.js");        
        const trois = require("./commands/trois.js");
        const haine = require("./commands/haine.js");
        const love = require("./commands/love.js");
        const report = require("./commands/report.js");
        const boss = require("./commands/boss.js");

        kick(message, prefix, bot)       
        ban(message, prefix, bot)
        réseaux(message, prefix, bot)
        pf(message, prefix, bot)
        admin(message, prefix, bot)
        action(message, prefix, bot)
        kill(message, prefix, bot)
        manger(message, prefix, bot)
        help(message, prefix, bot)
        spéciale(message, prefix, bot)
       // garnison(message, prefix, bot)
      //  bataillon(message, prefix, bot)
      //  msgstats(message, prefix, bot)
        spoil(message, prefix, bot)
        trois(message, prefix, bot)
        haine(message, prefix, bot)
        love(message, prefix, bot)
        report(message, prefix, bot)
        boss(message, prefix, bot)

//mdr c ici
    })

   // bot.on("guildMemberAdd", member => {
      //  const nouveaux = require("./commands/nouveaux.js");

     //   nouveaux(member, bot)

    //  })


bot.on('message', function (message) {
    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;
    var chassedb = db.get("chasse").find('nombre').value()
    var nombre = Object.values(chassedb);
    let chs = message.guild.channels.find(channels => channels.name === "🔭-chasse");
    if (message.channel === chs) {
        if (message.content == prefix + "chasse") {
            if (!message.member.roles.some(r => ["Titan Shifter", "Escouade Livaï", "La Garnison", "Les Brigades Spéciales", "Le Bataillon d'Exploration", "1ère Division"].includes(r.name)))
                return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
            if (nombre[3] <= 4) {
                if (nombre[0] == "azertyuiop") {
                    message.reply("chasse lancée ! :telescope: Je vois des Titans au loin, essaye de les compter ! Tu as juste à me donner un nombre, et je te dirais s'il y en a plus ou moins ... D'après moi il y a entre 0 et 1000 Titans !")
                    number_random = Math.floor(Math.random() * (1000 - 0) + 0)
                    console.log(number_random);
                    db.get("chasse").find({ partieetat: "attente" }).assign({ partieetat: nombre[1] = "start", nombre: nombre[0] = number_random, essaisold: nombre[4] = 0,essais: nombre[2] = 1 }).write();
                } else {
                    message.reply("Une chasse est déjà en cours !")
                }
            }
           if (nombre[3] >= 5) {
               if (nombre[0] == "azertyuiop") {
                    message.reply("chasse lancée ! :telescope: Je vois des Titans **cuirassés** au loin, essaye de les compter ! Tu as juste à me donner un nombre, et je te dirais s'il y en a plus ou moins ... D'après moi il y a entre 0 et 1000 Titans !")
                    number_random = Math.floor(Math.random() * (1000 - 0) + 0)
                   console.log(number_random);
                    db.get("chasse").find({ partieetat: "attente" }).assign({ partieetat: nombre[1] = "start", nombre: nombre[0] = number_random, essaisold: nombre[4] = 0,essais: nombre[2] = 1  }).write();
         } else {
                   message.reply("Une chasse est déjà en cours !")
                }
           }
        }
        if (nombre[1] == "start") {
            if (message.content > nombre[0]) {
                message.reply("Il y a moins de Titans !")
                db.get("chasse").find("nombre").assign({ essais: nombre[2] += 1 }).write();
            }
            else if (message.content < nombre[0]) {
                message.reply("Il y a plus de Titans !")
                db.get("chasse").find("nombre").assign({ essais: nombre[2] += 1 }).write();
            }
            if (message.content == nombre[0]) {
                if (nombre[3] <= 4) {
                    var msgauthor = message.author.username;
                    message.reply(`à trouvé le bon nombre de Titans et fais gagner des points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                    db.get("chasse").find("nombre").assign({
                        nombre: nombre[0] = "azertyuiop",
                        partieetat: nombre[1] = "attente",
                        essaisold: nombre[4] = nombre[2],
                        spécial: nombre[3] += 1

                    }).write();
                    if (!db.get("ptc").find({ username: msgauthor }).value()) {
                        db.get("ptc").push({ username: msgauthor, ptc: 1 }).write();
                    } else {
                        var userptcdb = db.get("ptc").filter({ username: msgauthor }).find('ptc').value();
                        var userptc = Object.values(userptcdb)
                        db.get("ptc").find({ username: msgauthor }).assign({ username: msgauthor, ptc: userptc[1] += 1 }).write();
                        if (!message.member.roles.some(r => ["Les Brigades Spéciales", "Le Bataillon d'Exploration", "Titan Shifter"].includes(r.name))) {
                            var userptcdb = db.get("pt").filter({ faction: "garnison" }).find('pt').value();
                            var userptc = Object.values(userptcdb)
                            if (nombre[4] <= 5) {
                                db.get("pt").find({ faction: "garnison" }).assign({ faction: "garnison", pt: userptc[1] += 100 }).write();
                                return bot.channels.get("444817395840712704").send(`+ 100 points pour ` + msgauthor + ` de la faction La Garnison (pour avoir gagné une chasse)`)
                           //  && message.reply(`à trouvé le bon nombre de Titans et fais gagner 100 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                            }
                            if (nombre[4] >= 5 && nombre[4] <= 10) {
                                db.get("pt").find({ faction: "garnison" }).assign({ faction: "garnison", pt: userptc[1] += 50 }).write();
                                return bot.channels.get("444817395840712704").send(`+ 50 points pour ` + msgauthor + ` de la faction La Garnison (pour avoir gagné une chasse)`)
                          //   &&   message.reply(`à trouvé le bon nombre de Titans et fais gagner 50 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                          }
                            if (nombre[4] >= 15) {
                                db.get("pt").find({ faction: "garnison" }).assign({ faction: "garnison", pt: userptc[1] += 10 }).write();
                                return bot.channels.get("444817395840712704").send(`+ 10 points pour ` + msgauthor + ` de la faction La Garnison (pour avoir gagné une chasse)`)
                           //   &&  message.reply(`à trouvé le bon nombre de Titans et fais gagner 10 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                          }
                        }
                        if (!message.member.roles.some(r => ["Les Brigades Spéciales", "La Garnison", "Titan Shifter"].includes(r.name))) {
                            var userptcdb = db.get("pt").filter({ faction: "exploration" }).find('pt').value();
                            var userptc = Object.values(userptcdb)
                            if (nombre[4] <= 5) {
                                db.get("pt").find({ faction: "exploration" }).assign({ faction: "exploration", pt: userptc[1] += 100 }).write();
                                return bot.channels.get("444817395840712704").send(`+ 100 points pour ` + msgauthor + ` de la faction Le Bataillon d'Exploration (pour avoir gagné une chasse)`)
                         //   &&  message.reply(`à trouvé le bon nombre de Titans et fais gagner 100 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                            }
                            if (nombre[4] >= 5 && nombre[4] <= 10) {
                                db.get("pt").find({ faction: "exploration" }).assign({ faction: "exploration", pt: userptc[1] += 50 }).write();
                                return bot.channels.get("444817395840712704").send(`+ 50 points pour ` + msgauthor + ` de la faction Le Bataillon d'Exploration (pour avoir gagné une chasse)`)
                         //   &&  message.reply(`à trouvé le bon nombre de Titans et fais gagner 50 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                            }
                            if (nombre[4] >= 15) {
                                db.get("pt").find({ faction: "exploration" }).assign({ faction: "exploration", pt: userptc[1] += 10 }).write();
                                return bot.channels.get("444817395840712704").send(`+ 10 points pour ` + msgauthor + ` de la faction Le Bataillon d'Exploration (pour avoir gagné une chasse)`)
                           //   && message.reply(`à trouvé le bon nombre de Titans et fais gagner 10 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                           }
                        }
                        if (!message.member.roles.some(r => ["Le Bataillon d'Exploration", "La Garnison", "Titan Shifter"].includes(r.name))) {
                            var userptcdb = db.get("pt").filter({ faction: "spéciale" }).find('pt').value();
                            var userptc = Object.values(userptcdb)
                            if (nombre[4] <= 5) {
                                db.get("pt").find({ faction: "spéciale" }).assign({ faction: "spéciale", pt: userptc[1] += 100 }).write();
                                return bot.channels.get("444817395840712704").send(`+ 100 points pour ` + msgauthor + ` de la faction Les Brigades Spéciales (pour avoir gagné une chasse)`)
                           // &&    message.reply(`à trouvé le bon nombre de Titans et fais gagner 100 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                          }
                            if (nombre[4] >= 5 && nombre[4] <= 10) {
                                db.get("pt").find({ faction: "spéciale" }).assign({ faction: "spéciale", pt: userptc[1] += 50 }).write();
                                return bot.channels.get("444817395840712704").send(`+ 50 points pour ` + msgauthor + ` de la faction Les Brigades Spéciales (pour avoir gagné une chasse)`)
                           // &&  message.reply(`à trouvé le bon nombre de Titans et fais gagner 50 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                            }
                            if (nombre[4] >= 15) {
                                db.get("pt").find({ faction: "spéciale" }).assign({ faction: "spéciale", pt: userptc[1] += 10 }).write();
                                return bot.channels.get("444817395840712704").send(`+ 10 points pour ` + msgauthor + ` de la faction Les Brigades Spéciales (pour avoir gagné une chasse)`)
                         //   &&  message.reply(`à trouvé le bon nombre de Titans et fais gagner 10 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                            }
                        }
                        if (!message.member.roles.some(r => ["Le Bataillon d'Exploration", "La Garnison", "Les Brigades Spéciales"].includes(r.name))) {
                            var userptcdb = db.get("pt").filter({ faction: "shifter" }).find('pt').value();
                            var userptc = Object.values(userptcdb)
                            if (nombre[4] <= 5) {
                                db.get("pt").find({ faction: "shifter" }).assign({ faction: "shifter", pt: userptc[1] += 100 }).write();
                                return bot.channels.get("444817395840712704").send(`+ 100 points pour ` + msgauthor + ` de la faction Titans Shifter (pour avoir gagné une chasse)`)
                           // &&  message.reply(`à trouvé le bon nombre de Titans et fais gagner 100 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                            }
                            if (nombre[4] >= 5 && nombre[4] <= 10) {
                                db.get("pt").find({ faction: "shifter" }).assign({ faction: "shifter", pt: userptc[1] += 50 }).write();
                                return bot.channels.get("444817395840712704").send(`+ 50 points pour ` + msgauthor + ` de la faction Titans Shifter (pour avoir gagné une chasse)`)
                            // &&  message.reply(`à trouvé le bon nombre de Titans et fais gagner 50 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                           }
                            if (nombre[4] >= 15) {
                                db.get("pt").find({ faction: "shifter" }).assign({ faction: "shifter", pt: userptc[1] += 10 }).write();
                                return bot.channels.get("444817395840712704").send(`+ 10 points pour ` + msgauthor + ` de la faction Titans Shifter (pour avoir gagné une chasse)`)
                             // && message.reply(`à trouvé le bon nombre de Titans et fais gagner 10 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                            }
                        }
                    }
                }
                if (message.content == nombre[0]) {
                    if (nombre[3] >= 5) {
                       var msgauthor = message.author.username;
                       message.reply(`à trouvé le bon nombre de Titans et fais gagner des points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                       db.get("chasse").find("nombre").assign({
                            nombre: nombre[0] = "azertyuiop",
                            partieetat: nombre[1] = "attente",
                            essaisold: nombre[4] = nombre[2],
                            spécial: nombre[3] -= 4
                        }).write();
                        if (!db.get("ptc").find({ username: msgauthor }).value()) {
                            db.get("ptc").push({ username: msgauthor, ptc: 1 }).write();
                        } else {
                            var userptcdb = db.get("ptc").filter({ username: msgauthor }).find('ptc').value();
                            var userptc = Object.values(userptcdb)
                            db.get("ptc").find({ username: msgauthor }).assign({ username: msgauthor, ptc: userptc[1] += 1 }).write();
                            if (!message.member.roles.some(r => ["Les Brigades Spéciales", "Le Bataillon d'Exploration", "Titan Shifter"].includes(r.name))) {
                                var userptcdb = db.get("pt").filter({ faction: "garnison" }).find('pt').value();
                                var userptc = Object.values(userptcdb)
                                if (nombre[4] <= 5) {
                                    db.get("pt").find({ faction: "garnison" }).assign({ faction: "garnison", pt: userptc[1] += 500 }).write();
                                    return bot.channels.get("444817395840712704").send(`+ 500 points pour ` + msgauthor + ` de la faction La Garnison (pour avoir gagné une chasse)`)
                         //   &&  message.reply(`à trouvé le bon nombre de Titans et fais gagner 500 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                                }
                                if (nombre[4] >= 5 && nombre[4] <= 10) {
                                    db.get("pt").find({ faction: "garnison" }).assign({ faction: "garnison", pt: userptc[1] += 250 }).write();
                                    return bot.channels.get("444817395840712704").send(`+ 250 points pour ` + msgauthor + ` de la faction La Garnison (pour avoir gagné une chasse)`)
                         //    &&   message.reply(`à trouvé le bon nombre de Titans et fais gagner 250 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                              }
                                if (nombre[4] >= 15) {
                                    db.get("pt").find({ faction: "garnison" }).assign({ faction: "garnison", pt: userptc[1] += 50 }).write();
                                    return bot.channels.get("444817395840712704").send(`+ 50 points pour ` + msgauthor + ` de la faction La Garnison (pour avoir gagné une chasse)`)
                           //   && message.reply(`à trouvé le bon nombre de Titans et fais gagner 50 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                               }
                            }
                            if (!message.member.roles.some(r => ["Les Brigades Spéciales", "La Garnison", "Titan Shifter"].includes(r.name))) {
                                var userptcdb = db.get("pt").filter({ faction: "exploration" }).find('pt').value();
                                var userptc = Object.values(userptcdb)
                                if (nombre[4] <= 5) {
                                    db.get("pt").find({ faction: "exploration" }).assign({ faction: "exploration", pt: userptc[1] += 500 }).write();
                               return bot.channels.get("444817395840712704").send(`+ 500 points pour ` + msgauthor + ` de la faction Le Bataillon d'Exploration (pour avoir gagné une chasse)`)
                       //    && message.reply(`à trouvé le bon nombre de Titans et fais gagner 500 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                              }
                                if (nombre[4] >= 5 && nombre[4] <= 10) {
                                    db.get("pt").find({ faction: "exploration" }).assign({ faction: "exploration", pt: userptc[1] += 250 }).write();
                                    return bot.channels.get("444817395840712704").send(`+ 250 points pour ` + msgauthor + ` de la faction Le Bataillon d'Exploration (pour avoir gagné une chasse)`)
                          //   &&    message.reply(`à trouvé le bon nombre de Titans et fais gagner 250 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                             }
                                if (nombre[4] >= 15) {
                                    db.get("pt").find({ faction: "exploration" }).assign({ faction: "exploration", pt: userptc[1] += 50 }).write();
                                    return bot.channels.get("444817395840712704").send(`+ 50 points pour ` + msgauthor + ` de la faction Le Bataillon d'Exploration (pour avoir gagné une chasse)`)
                         //   &&   message.reply(`à trouvé le bon nombre de Titans et fais gagner 50 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                               }
                            }
                            if (!message.member.roles.some(r => ["Le Bataillon d'Exploration", "La Garnison", "Titan Shifter"].includes(r.name))) {
                                var userptcdb = db.get("pt").filter({ faction: "spéciale" }).find('pt').value();
                                var userptc = Object.values(userptcdb)
                                if (nombre[4] <= 5) {
                                    db.get("pt").find({ faction: "spéciale" }).assign({ faction: "spéciale", pt: userptc[1] += 500 }).write();
                                    return bot.channels.get("444817395840712704").send(`+ 500 points pour ` + msgauthor + ` de la faction Les Brigades Spéciales (pour avoir gagné une chasse)`)
                           //  &&  message.reply(`à trouvé le bon nombre de Titans et fais gagner 500 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                               }
                                if (nombre[4] >= 5 && nombre[4] <= 10) {
                                    db.get("pt").find({ faction: "spéciale" }).assign({ faction: "spéciale", pt: userptc[1] += 250 }).write();
                                    return bot.channels.get("444817395840712704").send(`+ 250 points pour ` + msgauthor + ` de la faction Les Brigades Spéciales (pour avoir gagné une chasse)`)
                          //  &&  message.reply(`à trouvé le bon nombre de Titans et fais gagner 250 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                                }
                                if (nombre[4] >= 15) {
                                    db.get("pt").find({ faction: "spéciale" }).assign({ faction: "spéciale", pt: userptc[1] += 50 }).write();
                                    return bot.channels.get("444817395840712704").send(`+ 50 points pour ` + msgauthor + ` de la faction Les Brigades Spéciales (pour avoir gagné une chasse)`)
                           //   && message.reply(`à trouvé le bon nombre de Titans et fais gagner 50 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                               }
                            }
                            if (!message.member.roles.some(r => ["Le Bataillon d'Exploration", "La Garnison", "Les Brigades Spéciales"].includes(r.name))) {
                                var userptcdb = db.get("pt").filter({ faction: "shifter" }).find('pt').value();
                                var userptc = Object.values(userptcdb)
                                if (nombre[4] <= 5) {
                                    db.get("pt").find({ faction: "shifter" }).assign({ faction: "shifter", pt: userptc[1] += 500 }).write();
                                    return bot.channels.get("444817395840712704").send(`+ 500 points pour ` + msgauthor + ` de la faction Titans Shifter (pour avoir gagné une chasse)`)
                          //  &&  message.reply(`à trouvé le bon nombre de Titans et fais gagner 500 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                               }
                                if (nombre[4] >= 5 && nombre[4] <= 10) {
                                    db.get("pt").find({ faction: "shifter" }).assign({ faction: "shifter", pt: userptc[1] += 250 }).write();
                                    return bot.channels.get("444817395840712704").send(`+ 250 points pour ` + msgauthor + ` de la faction Titans Shifter (pour avoir gagné une chasse)`)
                          //   &&  message.reply(`à trouvé le bon nombre de Titans et fais gagner 250 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                               }
                                if (nombre[4] >= 15) {
                                    db.get("pt").find({ faction: "shifter" }).assign({ faction: "shifter", pt: userptc[1] += 50 }).write();
                                    return bot.channels.get("444817395840712704").send(`+ 50 points pour ` + msgauthor + ` de la faction Titans Shifter (pour avoir gagné une chasse)`)
                           //  && message.reply(`à trouvé le bon nombre de Titans et fais gagner 50 points a sa faction ! (en ` + `${nombre[2]}` + ` essais)`);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})

bot.on('message', message =>{
        if (message.channel.type === 'dm') return;

            var msgauthor = message.author.username;
            if(message.author.bot)return;
    
       // if(!db.get("xp").find({username: msgauthor}).value()){
        //    db.get("xp").push({username: msgauthor, xp: 1}).write();
       // }else{
         //   var userxpdb = db.get("xp").filter({username: msgauthor}).find('xp').value();
          //  console.log(userxpdb);
          //  var userxp = Object.values(userxpdb)
           // console.log(userxp);
          //  console.log(`Nombre d'xp : ${userxp[1]}`)
    
          //  db.get("xp").find({username: msgauthor}).assign({username: msgauthor, xp: userxp[1] += 1}).write();
    
           // var msgauthor = message.author.username;
            var killtest = 0
            if(message.author.bot)return;
        
            if(!db.get("ptckill").find({username: msgauthor}).value()){
                db.get("ptckill").push({username: msgauthor, ptckill: 1}).write();
           }else{
               var userptckilldb = db.get("ptckill").filter({username: msgauthor}).find('ptckill').value();
             //   console.log(userptckilldb);
                var userptckill = Object.values(userptckilldb)
                db.get("ptckill").find({username: msgauthor}).assign({username: msgauthor, ptckill: userptckill[1] += killtest}).write();
        
           }
//}
    
    
    
            var msgauthor = message.author.username;
            var killteste = 0
           if(message.author.bot)return;
        
           if(!db.get("ptc").find({username: msgauthor}).value()){
                db.get("ptc").push({username: msgauthor, ptc: 1}).write();
          }else{
               var userptcdb = db.get("ptc").filter({username: msgauthor}).find('ptc').value();
             //  console.log(userptcdb);
                var userptc = Object.values(userptcdb)
                db.get("ptc").find({username: msgauthor}).assign({username: msgauthor, ptc: userptc[1] += killteste}).write();
               
    
        if (message.content === prefix + "azeazd"){        
            var xp = db.get("xp").filter({username: msgauthor}).find('xp').value()
            var ptc = db.get("ptc").filter({username: msgauthor}).find('ptc').value()
            var ptckill = db.get("ptckill").filter({username: msgauthor}).find('ptckill').value()
            var xpfinal = Object.values(xp);
            var ptcfinal = Object.values(ptc);
            var ptckillfinal = Object.values(ptckill);
            var xp_embed = new Discord.RichEmbed()
                .setColor("#590599")
                .setDescription("Stats depuis le dernier redémarrage du bot")
                .addField("Messages :", `${message.author.username} : ${xpfinal[1]} messages postés` )
                .addField("Minijeux :", `Chasse de Titans : ${ptcfinal[1] += -1} points
Titans Apocalypse Titans (kill) : ${ptckillfinal[1] += -1} Titans tués ` )
            message.channel.send({embed: xp_embed});
    }}})
bot.on('message', message => {

                if (message.author.bot) return;
                if (message.channel.type === 'dm') return;
    
let cpourlesvip = message.guild.channels.find(channels => channels.name ===  "parler-via-le-bot");
if (message.channel === cpourlesvip) { 
    
if(message.content.startsWith(prefix +'ta')){
    bot.channels.get("427917961441968128").send(message.content.slice(3, message.content.length));
    } 
if(message.content.startsWith(prefix +'en')){
    bot.channels.get("389511539347947520").send(message.content.slice(3, message.content.length));
   }
}
    let pUser = message.mentions.users.first()
      let vipbote = message.guild.channels.find(channels => channels.name ===  "vip-mp-bot");
                    if (message.channel === vipbote) { 
                            if (message.content.startsWith(prefix + "mp")) {
                
        if (!pUser) {
        }
        else {
            pUser.sendMessage(message.content.slice(3, message.content.length));

        }
    }
                    }   
})
    
bot.on('message', message => {

                if (message.author.bot) return;
                if (message.channel.type === 'dm') return;

                let sald = message.guild.channels.find(channels => channels.name ===  "bot-vers-autres-salons");
                    if (message.channel === sald) { 
                        
                    if(message.content.startsWith(prefix +'t')){
                        bot.channels.get("427917961441968128").send(message.content.slice(2, message.content.length));
                        } 
                    if(message.content.startsWith(prefix +'be')){
                        bot.channels.get("389215030563962890").send(message.content.slice(3, message.content.length));
                       } 
                    if(message.content.startsWith(prefix +'g')){
                        bot.channels.get("389511187680854017").send(message.content.slice(2, message.content.length));
                       } 
                    if(message.content.startsWith(prefix +'ts')){
                        bot.channels.get("431966899946127365").send(message.content.slice(3, message.content.length));
                       } 
                    if(message.content.startsWith(prefix +'s')){
                        bot.channels.get("422177927501709312").send(message.content.slice(2, message.content.length));
                       }
                    if(message.content.startsWith(prefix +'a')){
                        bot.channels.get("422178790572294144").send(message.content.slice(2, message.content.length));
                       }    
                    if(message.content.startsWith(prefix +'bs')){
                        bot.channels.get("389511416933122058").send(message.content.slice(3, message.content.length));
                       }
                    if(message.content.startsWith(prefix +'e')){
                        bot.channels.get("389511539347947520").send(message.content.slice(2, message.content.length));
                       } 
                    }
                }
            )
    
bot.on('message', function (message) {
    if (message.channel.type === 'dm') return;

            var joueur = message.author.username;
            if (message.author.bot) return;
            if (message.content === prefix + "question") {
                var sayings = ["","Oui.","Non.","Peut être.."];
                                           // "Je ne sais pas.",
                                          
                                          //  "Je valide !",
                                            //"J'adore.",
                                          //  "Je ne suis pas Google.",
                                          //  "Je ne peux pas y répondre tout de suite.",
                                          //  "La mer Noire",
                                       // "42"
                              
    
            //    var result = Math.floor((Math.random() * sayings.length) + 0);
                result = Math.ceil(Math.random() * 3);
        var repalea = sayings[result];

               var mdrembed = new Discord.RichEmbed()
                .setTitle("Questions/Réponses")
                .addField(`Question de ${joueur} :`,`${message.content.slice(10, message.content.length)}`)
                .addField("Réponse :",`${repalea}`);
                message.channel.send(mdrembed)
        }
            //    if (message.content === prefix + "kill") {
           //         message.reply("La commande est désactivée temporairement suite a un problème technique")
          //     }
    })


 // bot.on('message',function(message){
  //  if(message.author.bot)return;
  //  let guild = message.member.guild;

  //  let modo = guild.roles.find('name', 'Escouade Mike');
  //  let admin = guild.roles.find('name', 'Escouade Livaï');

  //  if (message.member.roles.has(admin.id || modo.id)) {

 // if(message.content.includes('putain') ||
//message.content.includes('putin') ||
//message.content.includes('fdp') ||
//message.content.includes('connard') ||
//message.content.includes('bite') ||
//message.content.includes('pute') ||
//message.content.includes('salope')||
//message.content.includes('branler')||
//message.content.includes('branlette')||
//message.content.includes('sexe')||
//message.content.includes('baise')||
//message.content.includes('nique ta mère')
 // ){
  //    message.delete()
  //  message.reply("a été averti pour cause : Mot interdit.");

  //  var inventaireembed = new Discord.RichEmbed()
  //  .setTitle("Avertissement pour les mots interdits (modos et admins)")
   // .addField("Membre :", message.member.displayName)
    //.addField("Canal :", message.channel.name)
  //  .addField("Message :", message.content)
  //  bot.channels.get("428143543144546305").send({ embed: inventaireembed });
   //     }
//}
//})

         bot.on('message', message => {

            if (message.author.bot) return;
            if (message.channel.type === 'dm') return;
            var joueur = message.author.mentions;
            let userVar = message.author

            let ttt = message.guild.channels.find(channels => channels.name === "mini-jeux-🎲");
          if (message.channel === ttt) {     
                   if(!message.member.roles.some(r=>["Escouade Livaï","Animateur"].includes(r.name)) ) 
                       return message.delete();
                 }
            }
        )

         bot.on('message', message => {

            if (message.author.bot) return;
            if (message.channel.type === 'dm') return;
            var joueur = message.author.mentions;
            let userVar = message.author

            let ttt = message.guild.channels.find(channels => channels.name ===  "mini-jeux-🎲");
          if (message.channel === ttt) {     
                   if(!message.member.roles.some(r=>["Escouade Livaï","Animateur"].includes(r.name)) ) 
return bot.channels.get("483094336259489812").send(message.content.slice(0, message.content.length) + " " + userVar); 
                }
            }
        )
  bot.on('message', message => {

    abc = Math.ceil(Math.random() * 100);
    if(message.author.bot)return;
    if (message.channel.type === 'dm') return;

    if (message.content === prefix + "roulette") {

        message.reply(`a fait tourner la roulette et obtient le numéro ${abc} !`)
    }
  })

bot.on('message', message => {
    let userVar = message.author
    let pUser = message.mentions.users.first()

    if (message.author.bot) return;
    if (message.channel.type === 'dm') {
      if(message.content.includes('@')){
          message.reply("Impossible de répondre a votre demande si elle contient une mention")
         } else {

  //    message.delete()
        bot.channels.get("493791648309051412").send(message.content.slice(0, message.content.length)+ " " + userVar); 

    }}


    if (message.content.startsWith(prefix + "mp")) {
                if(!message.member.roles.some(r=>["Escouade Livaï","Escouade Mike"].includes(r.name)) ) 
                    return;
                {
        if (!pUser) {
        }
        else {
            pUser.sendMessage(message.content.slice(3, message.content.length));

        }
    }
        if (message.content.startsWith(prefix + "repeat")) {

        var interval = setInterval (function () {
                     pUser.sendMessage(message.content.slice(7, message.content.length))
                        .catch(console.error); // add error handling here
     }, 1 * 1000);
        }
    }

if (message.content.startsWith(prefix + 'pts')) {
            var ptckill = db.get("pt").filter({faction: "garnison"}).find('pt').value()
            var ptckillfinal = Object.values(ptckill);
                     var ptckiell = db.get("pt").filter({faction: "exploration"}).find('pt').value()
            var ptckillfinale = Object.values(ptckiell);              
            var ptckiells = db.get("pt").filter({faction: "shifter"}).find('pt').value()
            var ptckillfinales = Object.values(ptckiells);
                     var ptckilel = db.get("pt").filter({faction: "spéciale"}).find('pt').value()
            var ptckillfinael = Object.values(ptckilel);
            var xp_embed = new Discord.RichEmbed()
                .setColor("#590599")
                .setDescription("points par faction pour les chasses")
                .addField("Garnison :", `${ptckillfinal[1] -= 1} points` )
                .addField("Brigade Spéciale :", `${ptckillfinael[1] -= 1} points` )
                .addField("Bataillon d'exploration :", `${ptckillfinale[1] -= 1} points` )
                .addField("Titans Shifter :", `${ptckillfinales[1] -= 1} points` )
            message.channel.send({embed: xp_embed});
        }
    
    })

//       
 // bot.on('message', message => {

  //  abcc = Math.ceil(Math.random() * 58);
 //   if(message.author.bot)return;
 //   if (message.channel.type === 'dm') return;
//var roulettedb = db.get("roulette").find('rou').value()
//var randoum = Object.values(roulettedb);
      
//    if (message.content === prefix + "500abo") {
//if(!message.member.roles.some(r=>["Escouade Livaï"].includes(r.name)) ) 
        //            return;
    //    {
         //       if(randoum[1] == "1"){

      //  message.reply(`a fait tourner la roulette et obtient le numéro 56 bravo au gagnant !`)
    //                 db.get("roulette").find({ rourourou: "1" }).assign({ rourourou: randoum[1] = "2", rou: randoum[0] = "2" }).write();

   // } else {
    //    message.reply(`a fait tourner la roulette et obtient le numéro ${abcc} bravo au gagnant !`)
    //    }
     //   }
     //   }
 // })
bot.on('message', message => {

    abcc = Math.ceil(Math.random() * 18);
    if(message.author.bot)return;
    if (message.channel.type === 'dm') return;

    if (message.content === prefix + "500abo") {
if(!message.member.roles.some(r=>["Escouade Livaï"].includes(r.name)) ) return;

        message.reply(`a fait tourner la roulette et obtient le numéro ${abcc} bravo au gagnant !`)
    }
  })

 bot.on('message', message => {
    var msgauthor = message.author.username
      var chance = Math.floor(Math.random() * 101);
      var orbe_random = Math.floor(Math.random() * 5);
    let userVar = message.author

            if (message.author.bot) return;
            if (message.channel.type === 'dm') return;
            if (message.content === prefix + "ereri"){
 number = 69;
 imageNumber = Math.floor (Math.random()* (number - 1 + 1)) + 1;
message.channel.send( {files: ["./discordrpg/" + "1 (" + imageNumber + ").jpg"]} )
            }
   //  if(!db.get("xp").find({id: message.member.id,username: msgauthor}).value()){
//d//b.get("xp").push({id: message.member.id,username: msgauthor, xp: 1}).write();
//} 
   //      if (chance > 90) {
             

//if(!message.member.roles.some(r=>["Les Brigades Spéciales","Le Bataillon d'Exploration","Titan Shifter"].includes(r.name)) ){
  //  var userorbedb = db.get("xp").filter({id: message.author.id}).find('xp').value();
 //   var userorbe = Object.values(userorbedb);
 //   console.log(`${msgauthor} : ${userorbe[2]} Orbes`)
 //   db.get("xp").find({id: message.member.id}).assign({id: userorbe[0] = message.author.id,username: userorbe[1] = message.author.username, xp: userorbe[2] += orbe_random}).write();
//return bot.channels.get("500327368628633612").send(`+ 5 points pour ` + userVar + ` de la faction La Garnison et gagne ` + orbe_random + ` Orbes`)
//}
//if(!message.member.roles.some(r=>["Les Brigades Spéciales","La Garnison","Titan Shifter"].includes(r.name)) ) {
 //   var userorbedb = db.get("xp").filter({id: message.author.id}).find('xp').value();
//    var userorbe = Object.values(userorbedb);
//console.log(`${msgauthor} : ${userorbe[2]} Orbes`)
//db.get("xp").find({id: message.member.id}).assign({id: userorbe[0] = message.author.id,username: userorbe[1] = message.author.username, xp: userorbe[2] += orbe_random}).write();
//return bot.channels.get("500327274336485406").send(`+ 5 points pour ` + userVar + ` de la faction Le Bataillon d'Exploration et gagne ` + orbe_random + ` Orbes`)
///}
//if(!message.member.roles.some(r=>["Le Bataillon d'Exploration","La Garnison","Titan Shifter"].includes(r.name)) ) {
  //  var userorbedb = db.get("xp").filter({id: message.author.id}).find('xp').value();
 //   var userorbe = Object.values(userorbedb);
 //   console.log(`${msgauthor} : ${userorbe[2]} Orbes`)
 //   db.get("xp").find({id: message.member.id}).assign({id: userorbe[0] = message.author.id,username: userorbe[1] = message.author.username, xp: userorbe[2] += orbe_random}).write();
//return bot.channels.get("500327274407657473").send(`+ 5 points pour ` + userVar + ` de la faction Les Brigades Spéciales et gagne ` + orbe_random + ` Orbes`)
//}
//if(!message.member.roles.some(r=>["Le Bataillon d'Exploration","La Garnison","Les Brigades Spéciales"].includes(r.name)) ) {
//var userorbedb = db.get("xp").filter({id: message.author.id}).find('xp').value();
//var userorbe = Object.values(userorbedb);
//console.log(`${msgauthor} : ${userorbe[2]} Orbes`)
//db.get("xp").find({id: message.member.id}).assign({id: userorbe[0] = message.author.id,username: userorbe[1] = message.author.username, xp: userorbe[2] += orbe_random}).write();
//return bot.channels.get("500327349645213706").send(`+ 5 points pour ` + userVar + ` de la faction Les Titan Shifter et gagne ` + orbe_random + ` Orbes`)
//}       
// }
 //   if (message.content === prefix + "orbe"){        
    //            var orbe = db.get("xp").filter({id: message.member.id}).find('xp').value()
    //            var orbefinal = Object.values(orbe);
     //           var xp_embed = new Discord.RichEmbed()
       //             .setColor("#590599")
      //              .setTitle("💎Nombres d'orbes récoltées💎")
      ////              .addField("Orbes :", `${message.author.username} : ${orbefinal[2]}💎` )
   //             message.channel.send({embed: xp_embed});
 //}//
   //  let pUser = message.mentions.users.first()

   // if (message.content.startsWith(prefix + "orbe")) {
   //     if (!pUser) {
    //    }
   //     else {
  //           if(!db.get("xp").find({id: pUser.id}).value()){
//db.get("xp").push({id: pUser.id,username :pUser.username, xp: 1}).write();
//} 
         //   var orbee = db.get("xp").filter({id: pUser.id}).find('xp').value()
         //       var orbefinale = Object.values(orbee);
          //      var xp_embede = new Discord.RichEmbed()
          //          .setColor("#590599")
           //         .setTitle("💎Nombres d'orbes récoltées💎")
          //          .addField("Orbes :", `${pUser.username} : ${orbefinale[2]}💎` )
          //      message.channel.send({embed: xp_embede});
 //}}
              if (message.content === prefix + "shop"){

     var shop = new Discord.RichEmbed()
                .setTitle("Shop SNK-FR")
                .setDescription("Shop pour échanger vos orbes contre différentes choses !")
                .addField("Rôles basiques :","**Voleur de nourriture** : 100-0 Orbes\n**Chapardeur de patate** : 300 Orbes\n**Soldat désobéissant** : 500 Orbes\n**Pacte avec le Démon** : 666 Orbes\n**Obsédé de Titans** : 750 Orbes\n**Chasseur de titans** : 1000 Orbes\n**Mangeur de Titants** : 1500 Orbes")
                .addField("Rôles Bataillon :","**As de la découpe** : 2500 Orbes\n**Maître des Explorations** : 10000 Orbes")
                .addField("Rôles Garnison :","**Soldats alcoolique** : 2500 Orbes\n**As du tir au canon** : 10000 Orbes")
                .addField("Rôles Brigades :","**As de la corruption** : 2500 Orbes\n**Protecteur du Roi** : 10000 Orbes")
                .addField("Rôles Shifter :","**Titan Cuirassé** : 2500 Orbes\n**Titan Féminin** : 10000 Orbes")
                .addField("Rôles Spéciaux :","**As de la manœuvre Tridimensionnelle** : 25000 Orbes (être level 20 minimum)")
                message.channel.send(shop)
                 }    
        })
               
        

bot.on('message', message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    let userVar = message.author

    let ttt = message.guild.channels.find(channels => channels.name ===  "le-relai-du-staff-c");
  if (message.channel === ttt) {     
 bot.channels.get("436943584403652640").send(message.content.slice(0, message.content.length)); 

}
let teet = message.guild.channels.find(channels => channels.name ===  "le-relai-du-staff");
if (message.channel === teet) {     
bot.channels.get("501112189390946304").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}
let avertc = message.guild.channels.find(channels => channels.name ===  "avertissement-c");
if (message.channel === avertc) {     
bot.channels.get("428143543144546305").send(message.content.slice(0, message.content.length)); 

}
let avert = message.guild.channels.find(channels => channels.name ===  "avertissement");
if (message.channel === avert) {     
bot.channels.get("501112643436937244").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}
let lbdsc = message.guild.channels.find(channels => channels.name ===  "le-bordel-du-staff-c");
if (message.channel === lbdsc) {     
bot.channels.get("451187288995659808").send(message.content.slice(0, message.content.length)); 

}
let lbds = message.guild.channels.find(channels => channels.name ===  "le-bordel-du-staff");
if (message.channel === lbds) {     
bot.channels.get("501112711845904394").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}
    }
)

bot.on('message', message => {

   if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    let userVar = message.author

    let mpbotc = message.guild.channels.find(channels => channels.name ===  "mp-bot-c");
  if (message.channel === mpbotc) {     
 bot.channels.get("493791648309051412").send(message.content.slice(0, message.content.length)); 

}
let mpbot = message.guild.channels.find(channels => channels.name === "mp-bot");
if (message.channel === mpbot) {     
bot.channels.get("501112077805551666").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}

let botsalonc = message.guild.channels.find(channels => channels.name ===  "bot-vers-autres-salons-c");
if (message.channel === botsalonc) {     
bot.channels.get("463010480106242048").send(message.content.slice(0, message.content.length)); 

}
let botsalon = message.guild.channels.find(channels => channels.name ===  "bot-vers-autres-salons");
if (message.channel === botsalon) {     
bot.channels.get("501112132797202433").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}
})



bot.on('message', message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    let userVar = message.author

    let tavernec = message.guild.channels.find(channels => channels.name === "💬taverne-de-trost-c");
  if (message.channel === tavernec) {     
 bot.channels.get("427917961441968128").send(message.content.slice(0, message.content.length)); 
}
let tavern = message.guild.channels.find(channels => channels.name === "💬taverne-de-trost");
if (message.channel === tavern) {     
bot.channels.get("501111126315237410").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}
let cf3c = message.guild.channels.find(channels => channels.name ===  "🏆coupe-des-factions-s3-c");
if (message.channel === cf3c) {     
bot.channels.get("485190525637492737").send(message.content.slice(0, message.content.length)); 

}
let cf3 = message.guild.channels.find(channels => channels.name ===  "🏆coupe-des-factions-s3");
if (message.channel === cf3) {     
bot.channels.get("501111230556143632").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}
let killc = message.guild.channels.find(channels => channels.name ===  "kill-c");
if (message.channel === killc) {     
bot.channels.get("428108625282596865").send(message.content.slice(0, message.content.length)); 

}
let kill = message.guild.channels.find(channels => channels.name ===  "kill");
if (message.channel === kill) {     
bot.channels.get("501111268531240980").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}
let jtrc = message.guild.channels.find(channels => channels.name ===  "jeu-des-3-lettres-c");
if (message.channel === jtrc) {     
bot.channels.get("457567129953107969").send(message.content.slice(0, message.content.length)); 

}
let jtr = message.guild.channels.find(channels => channels.name ===  "jeu-des-3-lettres");
if (message.channel === jtr) {     
bot.channels.get("501111319131324421").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}
let mic = message.guild.channels.find(channels => channels.name ===  "🍽-manger-c");
if (message.channel === mic) {     
bot.channels.get("432671909340250113").send(message.content.slice(0, message.content.length)); 

}
let mi = message.guild.channels.find(channels => channels.name ===  "🍽-manger");
if (message.channel === mi) {     
bot.channels.get("501111381677047818").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}  
let chc = message.guild.channels.find(channels => channels.name ===  "🔭-chasse-c");
if (message.channel === chc) {     
bot.channels.get("427933902372339721").send(message.content.slice(0, message.content.length)); 

}
let ch = message.guild.channels.find(channels => channels.name ===  "🔭-chasse");
if (message.channel === ch) {     
bot.channels.get("501111520659374110").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}  
let acc = message.guild.channels.find(channels => channels.name ===  "action-c");
if (message.channel === acc) {     
bot.channels.get("434002355747291136").send(message.content.slice(0, message.content.length)); 

}
let ac = message.guild.channels.find(channels => channels.name ===  "action");
if (message.channel === ac) {     
bot.channels.get("501111426061041675").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}  
let dessc = message.guild.channels.find(channels => channels.name ===  "🎨dessins-art-c");
if (message.channel === dessc) {     
bot.channels.get("439090294508617738").send(message.content.slice(0, message.content.length)); 

}
let dess = message.guild.channels.find(channels => channels.name ===  "🎨dessins-art");
if (message.channel === dess) {     
bot.channels.get("501111560870166538").send(message.content.slice(0, message.content.length)+ " " + userVar); 

} 
let musc = message.guild.channels.find(channels => channels.name ===  "musique-c");
if (message.channel === musc) {     
bot.channels.get("434002355747291136").send(message.content.slice(0, message.content.length)); 

}
let mus = message.guild.channels.find(channels => channels.name ===  "musique");
if (message.channel === mus) {     
bot.channels.get("501111593518759937").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}    
let frtc = message.guild.channels.find(channels => channels.name ===  "images-montages-photos-c");
if (message.channel === frtc) {     
bot.channels.get("486000157305864193").send(message.content.slice(0, message.content.length)); 

}
let frt = message.guild.channels.find(channels => channels.name ===  "images-montages-photos");
if (message.channel === frt) {     
bot.channels.get("501111655388807179").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}  
let cbc = message.guild.channels.find(channels => channels.name ===  "commandes-bot-c");
if (message.channel === cbc) {     
bot.channels.get("433771526685327362").send(message.content.slice(0, message.content.length)); 

}
let cb = message.guild.channels.find(channels => channels.name ===  "commandes-bot");
if (message.channel === cb) {     
bot.channels.get("502186120704950273").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}     
let dtc = message.guild.channels.find(channels => channels.name ===  "🔞dark-taverne🔞-c");
if (message.channel === dtc) {     
bot.channels.get("485161926956023828").send(message.content.slice(0, message.content.length)); 

}
let dt = message.guild.channels.find(channels => channels.name ===  "🔞dark-taverne🔞");
if (message.channel === dt) {     
bot.channels.get("501111704109711391").send(message.content.slice(0, message.content.length)+ " " + userVar); 

}     
   //   if (message.author.id === "382605080517672961") {
   //  if (message.author.bot) return;
   // var guild = message.member.guild;
   // let mute = guild.roles.find("name", "Muted");
    //let modo = guild.roles.find("name", "Escouade Mike");
  //// message.member.removeRole(modo);
//  message.member.addRole(mute);

//}
 //  if (message.author.id === "382605080517672961") {
 //       message.member.ban();
// }
    }
)

const talkedRecently = new Set();

bot.on('message', message => {

    var msgauthor = message.author.id
    
                if (message.author.bot) return;
                if (message.channel.type === 'dm') return;
               let hlh = message.guild.channels.find(channels => channels.name === "🎃halloween👻");
    if (message.channel === hlh) {
if (message.content == prefix + "mmh") {
    if (talkedRecently.has(msgauthor)) {
        message.reply("⏱️ Vous activez le levier de la machine, malheureusement rien ne se passe, réessayez plus tard !");
    } else {
    lololwin = Math.ceil(Math.random() * 100);
    lololwine = Math.ceil(Math.random() * 100);

    var alphabet = ['','🎃','👻','🍬','🍭','💀',':eye_in_speech_bubble:','🦇','🕷','🕸','🕯',':coffin:']
    var alphabetfake = ['',':eye_in_speech_bubble:','🦇','🕷','🕸','🕯']
    randomf = Math.ceil(Math.random() * 5);
    var lettre_aleatoiref = alphabetfake[randomf];
    random = Math.ceil(Math.random() * 11);
    random1 = Math.ceil(Math.random() * 11);
    random2 = Math.ceil(Math.random() * 11);
    random4 = Math.ceil(Math.random() * 11);
    random6 = Math.ceil(Math.random() * 11);
    random7 = Math.ceil(Math.random() * 11);
    random8 = Math.ceil(Math.random() * 11);
    random3 = Math.ceil(Math.random() * 11);
    var lettre_aleatoire3 = alphabet[random3];
    var lettre_aleatoire = alphabet[random];
    var lettre_aleatoire1 = alphabet[random1];
    var lettre_aleatoire2 = alphabet[random2];
    var lettre_aleatoire4 = alphabet[random4];    
    var lettre_aleatoire6 = alphabet[random6];
    var lettre_aleatoire7 = alphabet[random7];   
    var lettre_aleatoire8 = alphabet[random8];

    if (lololwin >= 36) {
        console.log(lololwin)
        message.channel.send(`:slot_machine: **Vous activez le levier de la Machine Maudite d'Halloween**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n${lettre_aleatoiref} ${lettre_aleatoire4} ${lettre_aleatoire3}:arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\nMalheureusement la chance n'est pas avec vous, la machine s'éteint et se met à faire un sifflement horrible..`)
}
if (lololwin <= 5) {
    console.log(lololwin)
    message.channel.send(`:slot_machine: **Vous activez le levier de la Machine Maudite d'Halloween**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n🎃🎃🎃:arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\nLa machine n'avais même pas fini de tourner que vous avez déjà reçu votre récompense, une aura de force autour de vous, tellement puissante qu'on vous prend pour l'élu, vous devenez un VIP !`)
    let guild = message.member.guild;
    let halov = guild.roles.find(role => role.name === "Brigade Centrale");
    message.member.addRole(halov);
}
if (lololwin >= 6 && lololwin <= 15) {
    console.log(lololwin)
    message.channel.send(`:slot_machine: **Vous activez le levier de la Machine Maudite d'Halloween**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n🍭🍭🍭:arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\n3 🍭 Mais rien ne se passe..Après avoir foutu quelques coups de pieds dans la machine par énervement, un parchemin apparait dans vos mains : *Vous venez de gagner un titre d'honneur de la part du créateur de la machine* !`)
    let guild = message.member.guild;
    let halo = guild.roles.find(role => role.name === "🎃👻🍬**Casse Bonbons**🍬👻🎃");
    message.member.addRole(halo);

}
if (lololwin >= 16 && lololwin <= 25) {
    console.log(lololwin)
    message.channel.send(`:slot_machine: **Vous activez le levier de la Machine Maudite d'Halloween**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n👻👻👻:arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\nA peine les cadrans s'arrêtent, vous voyez quelques pièces tomber dans un bac sous la machine !Vous venez de faire gagner 150 points a votre faction !`)
    if (!message.member.roles.some(r => ["Le Bataillon d'Exploration", "La Garnison", "Les Brigades Spéciales"].includes(r.name))) {
        var userptcdb = db.get("pt").filter({ faction: "shifter" }).find('pt').value();
        var userptc = Object.values(userptcdb)
        db.get("pt").find({ faction: "shifter" }).assign({ faction: "shifter", pt: userptc[1] += 150 }).write();
        return bot.channels.get("444817395840712704").send(`+ 150 points pour ` + msgauthor + ` de la faction Titans Shifter (Roulette d'Halloween)`)
    }
    if (!message.member.roles.some(r => ["Le Bataillon d'Exploration", "La Garnison", "Titan Shifter"].includes(r.name))) {
        var userptcdb = db.get("pt").filter({ faction: "spéciale" }).find('pt').value();
        var userptc = Object.values(userptcdb)
        db.get("pt").find({ faction: "spéciale" }).assign({ faction: "spéciale", pt: userptc[1] += 150 }).write();
        return bot.channels.get("444817395840712704").send(`+ 150 points pour ` + msgauthor + ` de la faction Les Brigades Spéciales (Roulette d'Halloween)`)
    }
    if (!message.member.roles.some(r => ["Les Brigades Spéciales", "Le Bataillon d'Exploration", "Titan Shifter"].includes(r.name))) {
        var userptcdb = db.get("pt").filter({ faction: "garnison" }).find('pt').value();
        var userptc = Object.values(userptcdb)
        db.get("pt").find({ faction: "garnison" }).assign({ faction: "garnison", pt: userptc[1] += 150 }).write();
        return bot.channels.get("444817395840712704").send(`+ 150 points pour ` + msgauthor + ` de la faction La Garnison (Roulette d'Halloween)`)
    }


    if (!message.member.roles.some(r => ["Les Brigades Spéciales", "La Garnison", "Titan Shifter"].includes(r.name))) {
        var userptcdb = db.get("pt").filter({ faction: "exploration" }).find('pt').value();
        var userptc = Object.values(userptcdb)
        db.get("pt").find({ faction: "exploration" }).assign({ faction: "exploration", pt: userptc[1] += 150 }).write();
        return bot.channels.get("444817395840712704").send(`+ 150 points pour ` + msgauthor + ` de la faction Le Bataillon d'Exploration (Roulette d'Halloween)`)
    }

}
    if (lololwin >= 26 && lololwin <= 30) {
        console.log(lololwin)
        message.channel.send(`:slot_machine: **Vous activez le levier de la Machine Maudite d'Halloween**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n🍬🍬🍬:arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\nA peine les cadrans s'arrêtent, vous entendez une pluie de pièces tomber dans un bac sous la machine !Vous venez de faire gagner 1500 points a votre faction !`)
        if (!message.member.roles.some(r => ["Le Bataillon d'Exploration", "La Garnison", "Les Brigades Spéciales"].includes(r.name))) {
            var userptcdb = db.get("pt").filter({ faction: "shifter" }).find('pt').value();
            var userptc = Object.values(userptcdb)
            db.get("pt").find({ faction: "shifter" }).assign({ faction: "shifter", pt: userptc[1] += 1500 }).write();
            return bot.channels.get("444817395840712704").send(`+ 1500 points pour ` + msgauthor + ` de la faction Titans Shifter (Roulette d'Halloween)`)
        }
        if (!message.member.roles.some(r => ["Le Bataillon d'Exploration", "La Garnison", "Titan Shifter"].includes(r.name))) {
            var userptcdb = db.get("pt").filter({ faction: "spéciale" }).find('pt').value();
            var userptc = Object.values(userptcdb)
            db.get("pt").find({ faction: "spéciale" }).assign({ faction: "spéciale", pt: userptc[1] += 1500 }).write();
            return bot.channels.get("444817395840712704").send(`+ 1500 points pour ` + msgauthor + ` de la faction Les Brigades Spéciales (Roulette d'Halloween)`)
        }
        if (!message.member.roles.some(r => ["Les Brigades Spéciales", "Le Bataillon d'Exploration", "Titan Shifter"].includes(r.name))) {
            var userptcdb = db.get("pt").filter({ faction: "garnison" }).find('pt').value();
            var userptc = Object.values(userptcdb)
            db.get("pt").find({ faction: "garnison" }).assign({ faction: "garnison", pt: userptc[1] += 1500 }).write();
            return bot.channels.get("444817395840712704").send(`+ 1500 points pour ` + msgauthor + ` de la faction La Garnison (Roulette d'Halloween)`)
        }


        if (!message.member.roles.some(r => ["Les Brigades Spéciales", "La Garnison", "Titan Shifter"].includes(r.name))) {
            var userptcdb = db.get("pt").filter({ faction: "exploration" }).find('pt').value();
            var userptc = Object.values(userptcdb)
            db.get("pt").find({ faction: "exploration" }).assign({ faction: "exploration", pt: userptc[1] += 1500 }).write();
            return bot.channels.get("444817395840712704").send(`+ 1500 points pour ` + msgauthor + ` de la faction Le Bataillon d'Exploration (Roulette d'Halloween)`)
        }
    }
if (lololwin >= 31 && lololwin <= 35) {
    console.log(lololwin)

    if (lololwine >= 50) {

    message.channel.send(`:slot_machine: **Vous activez le levier de la Machine Maudite d'Halloween**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n💀💀💀:arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\nAprès quelques secondes a attendre devant la machine, une trappe s'ouvre et vous asperge de poudre et d'étincelles..Vous ne savez pas de quoi il s'agit mais vous ne pouvez plus parler, attendez quelques minutes que les effets disparaissent !`)
    }
    if (lololwine <= 49) {

    message.channel.send(`:slot_machine: **Vous activez le levier de la Machine Maudite d'Halloween**\n${lettre_aleatoire} ${lettre_aleatoire1} ${lettre_aleatoire2}\n:coffin::coffin::coffin::arrow_left:\n${lettre_aleatoire6} ${lettre_aleatoire7} ${lettre_aleatoire8}\n\nAprès quelques secondes a attendre devant la machine, une trappe s'ouvre et vous asperge de poudre et d'étincelles..Vous ne savez pas de quoi il s'agit mais vous ne pouvez plus parler, attendez quelques minutes que les effets disparaissent !`)
    }
    let guild = message.member.guild;
    let mute_role = guild.roles.find(role => role.name === "Muted");
    message.member.addRole(mute_role); 
    setTimeout(() => {message.member.removeRole(mute_role);}, 1800 * 1000);
}
}
}talkedRecently.add(msgauthor);
setTimeout(() => {
    talkedRecently.delete(msgauthor);
}, 10800000);
}
})
