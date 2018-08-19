    const Discord = require('discord.js');
    const low = require('lowdb')
    const FileSync = require ('lowdb/adapters/FileSync')
    const fs = require("fs");
    const config = require("./config.json");
    require('events').EventEmitter.prototype._maxListeners = 200;

    const adapter = new FileSync('database.json');
    const db = low(adapter);
    const killadapter = new FileSync('kill.json');
    const killdb = low(killadapter);
    const mangeradapter = new FileSync('manger.json');
    const mangerdb = low(mangeradapter);

    db.defaults({xp: [], sugg: [], ptc: [], ptckill: [],pt: [], boss: [], chasse: []}).write()

    var bot = new Discord.Client();
    var prefix = "<"
    var randnum = 0;
    var rkill = killdb.get('kill').size().value();
    var rmanger = mangerdb.get('manger').size().value();


    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: 'SNK - <help', type: 3}})
        bot.user.setStatus("idle")
        bot.channels.get("444817395840712704").send(`Bot redémarré, points a mettre a jour`);
    });

  bot.login(process.env.TOKEN);


      bot.on('guildMemberAdd', member => {
           let role = member.guild.roles.find("name", "Brigades d'Entraînements");
        member.guild.channels.find("name", "brigade-d-entrainement");
        var bienvenue_embed = new Discord.RichEmbed()

        
        .addField(`Présentation`,`
        Vous venez d'integrer le monde de SNK-FRANCE,
        nous vous félicitions pour votre intégrations au brigades d'entraînements.
        
        *Vous devez désormais choisir un corps d'armée entre :
        -La Garnison
        -Le Bataillon d'Exploration 
        -Les Brigades Spéciales
        *Cependant si vous préférez rejoindre le camps des titans, vous pouvez integrez également
        -Titan Shifter
        SNK-FR vous expliquera le fonctionnement plus bas dans vos messages :ok_hand:
        Soyez poli et courtois, un français correct est demandé au minimum.
        Le respect est de vigueur, les propos rascistes, injure ou autre ne seront pas toléré.`)
        .setFooter( `*Ne vous inquietez pas, la faction c'est juste pour le RP, histoire de s'amuser, vous aurez les même droits sur le 
        serveur quel que soit votre faction.
        Aussi, nous vous demandons de jouer le jeu et de choisir un pseudo de personnage en lien avec SNK`)
        .addBlankField()
         .addField(`Présentation de SNK-FR`,`
        Bonjour je me présente : SNK-FR, je suis votre "guide" dans cette ville, je ne peux malheuresement pas vous répondre directement en message privé, il faudra donc tout me dire sur un des canaux de discussion !
        Pour cela deux choix s'offre a vous :
        -Rejoindre l'armée humaine: 
        Pour cela il vous suffit de taper <garnison OU <bataillon OU <b-spéciales 
        -Rejoindre le camps des titans:
        Pour cela il vous suffit de taper  <shifter  
        Une fois votre camp choisit, vous avez a disposition plusieurs commandes
        qui vous seront détaillées en tapant <help !
        Il vous sera aussi possible de gagner des titres grâce a des "jeux" !`)
        member.sendMessage(bienvenue_embed);

        
          member.addRole(role);

      })

    bot.on('message', message => {
        
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
       // const shifter = require("./commands/shifter.js");        
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
        // shifter(message, prefix, bot)
      //  msgstats(message, prefix, bot)
        spoil(message, prefix, bot)
        trois(message, prefix, bot)
        haine(message, prefix, bot)
        love(message, prefix, bot)
        report(message, prefix, bot)
        boss(message, prefix, bot)


    })

   // bot.on("guildMemberAdd", member => {
      //  const nouveaux = require("./commands/nouveaux.js");

     //   nouveaux(member, bot)

    //  })

bot.on('message', function(message){
    if (message.channel.type === 'dm') return;
    if(message.author.bot)return;
var chassedb = db.get("chasse").find('nombre').value()
    var nombre = Object.values(chassedb);
  let chs = message.guild.channels.find("name", "🔭-chasse");
    if (message.channel === chs ) {

    if(message.content == prefix + "chasse"){
        if(!message.member.roles.some(r=>["Titan Shifter","Escouade Livaï","La Garnison","Les Brigades Spéciales","Le Bataillon d'Exploration","1ère Division"].includes(r.name)) )
        return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
         
        if (nombre[0] == "azertyuiop"){
        message.reply("chasse lancée ! :telescope: Je vois des Titans au loin, essaye de les compter ! Tu as juste à me donner un nombre, et je te dirais s'il y en a plus ou moins ... D'après moi il y a entre 0 et 500 Titans !")
        number_random = Math.floor(Math.random() * (500 - 0) + 0)
        console.log(number_random);
        db.get("chasse").find({ partieetat: "attente" }).assign({ partieetat: nombre[1] = "start", nombre: nombre[0] = number_random }).write();

        } else {
            message.reply("Une chasse est déjà en cours !")
        }
    }
    

    if(nombre[1] == "start"){


            if(message.content > nombre[0]){

                message.reply("Il y a moins de Titans !")
                db.get("chasse").find("nombre").assign({essais: nombre[2] += 1}).write();

            }
            else if (message.content < nombre[0]){

                message.reply("Il y a plus de Titans !")
                db.get("chasse").find("nombre").assign({essais: nombre[2] += 1}).write();

            }
            
            if (message.content == nombre[0]) {
            var msgauthor = message.author.username;

            message.reply(`à trouvé le bon nombre de Titans et fais gagner 5 points a sa faction ! (en `+`${nombre[2]}` + ` essais)`);
            bot.channels.get("444817395840712704").send(`+ 5 points pour ` + msgauthor + ` (à gagné une chasse)`)
                 db.get("chasse").find("nombre").assign({
                nombre: nombre[0] = "azertyuiop",
                partieetat: nombre[1] = "attente",
                     essais: nombre[2] = 1
            }).write();
    if(!db.get("ptc").find({username: msgauthor}).value()){
        db.get("ptc").push({username: msgauthor, ptc: 1}).write();
    } else{
    var userptcdb = db.get("ptc").filter({username: msgauthor}).find('ptc').value();
    var userptc = Object.values(userptcdb)
    db.get("ptc").find({username: msgauthor}).assign({username: msgauthor, ptc: userptc[1] += 1}).write();
                }
            }
        }  
    }
})


bot.on('message', message =>{
        if (message.channel.type === 'dm') return;

            var msgauthor = message.author.username;
            if(message.author.bot)return;
    
        if(!db.get("xp").find({username: msgauthor}).value()){
            db.get("xp").push({username: msgauthor, xp: 1}).write();
        }else{
            var userxpdb = db.get("xp").filter({username: msgauthor}).find('xp').value();
            console.log(userxpdb);
            var userxp = Object.values(userxpdb)
            console.log(userxp);
            console.log(`Nombre d'xp : ${userxp[1]}`)
    
            db.get("xp").find({username: msgauthor}).assign({username: msgauthor, xp: userxp[1] += 1}).write();
    
            var msgauthor = message.author.username;
            var killtest = 0
            if(message.author.bot)return;
        
            if(!db.get("ptckill").find({username: msgauthor}).value()){
                db.get("ptckill").push({username: msgauthor, ptckill: 1}).write();
           }else{
               var userptckilldb = db.get("ptckill").filter({username: msgauthor}).find('ptckill').value();
                console.log(userptckilldb);
                var userptckill = Object.values(userptckilldb)
                db.get("ptckill").find({username: msgauthor}).assign({username: msgauthor, ptckill: userptckill[1] += killtest}).write();
        
           }}
    
    
    
            var msgauthor = message.author.username;
            var killteste = 0
           if(message.author.bot)return;
        
           if(!db.get("ptc").find({username: msgauthor}).value()){
                db.get("ptc").push({username: msgauthor, ptc: 1}).write();
          }else{
               var userptcdb = db.get("ptc").filter({username: msgauthor}).find('ptc').value();
               console.log(userptcdb);
                var userptc = Object.values(userptcdb)
                db.get("ptc").find({username: msgauthor}).assign({username: msgauthor, ptc: userptc[1] += killteste}).write();
               
    
        if (message.content === prefix + "msgstat"){        
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
                var joueur = message.author.tag;

                let ttt = message.guild.channels.find("name", "event-des-3-lettres");
                    if (message.channel === ttt) {                    

                        bot.channels.get("458016809208250399").send(message.content.slice(0, message.content.length) + joueur);
                    }     
                }
            )
bot.on('message', message => {

                if (message.author.bot) return;
                if (message.channel.type === 'dm') return;

                let tttt = message.guild.channels.find("name", "event-des-3-lettres-admin");
                    if (message.channel === tttt) {                    

                        bot.channels.get("458016496212246540").send(message.content.slice(0, message.content.length));
                    }     
                }
            )
bot.on('message', message => {

       if (message.author.bot) return;
                if (message.channel.type === 'dm') return;
               let salonvip = message.guild.channels.find("name", "parler-via-le-bot");
                   if (message.channel === salonvip) {                    

                       bot.channels.get("427917961441968128").send(message.content.slice(0, message.content.length));
                   }     
                }
            )
bot.on('message', message => {

                if (message.author.bot) return;
                if (message.channel.type === 'dm') return;

                let sald = message.guild.channels.find("name", "bot-vers-autres-salons");
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

            var joueur = message.author.username;
            if (message.author.bot) return;
            if (message.content === prefix + "question") {
                var sayings = ["Oui.",
                                            "Non.",
                                            "Je ne sais pas.",
                                            "Peut être..",
                                            "Je valide !",
                                            "J'adore.",
                                            "Je ne suis pas Google.",
                                            "Je ne peux pas y répondre tout de suite.",
                                            "La mer Noire",
                                        "42"];
    
                var result = Math.floor((Math.random() * sayings.length) + 0);

               var mdrembed = new Discord.RichEmbed()
                .setTitle("Questions/Réponses")
                .addField(`Question de ${joueur} :`,`${message.content.slice(10, message.content.length)}`)
                .addField("Réponse :",`${sayings[result]}`);
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

    if (message.content === prefix + "role") {
    let rolegive = message.guild.roles.find('name', "Brigades d'Entraînements");
    let shifterr = message.guild.roles.find('name', 'Titan Shifter');
    let garnisone = message.guild.roles.find('name', 'La Garnison');
    let btl = message.guild.roles.find('name', "Le Bataillon d'Exploration");
    let briged = message.guild.roles.find('name', 'Les Brigades Spéciales');

    if(message.author.bot)return;

message.guild.members.filter(m => !m.user.bot).map(async member => await member.removeRole(shifterr));
message.guild.members.filter(m => !m.user.bot).map(async member => await member.removeRole(briged));
message.guild.members.filter(m => !m.user.bot).map(async member => await member.removeRole(btl));
message.guild.members.filter(m => !m.user.bot).map(async member => await member.removeRole(garnisone));
message.guild.members.filter(m => !m.user.bot).map(async member => await member.addRole(rolegive));
    
    }})
