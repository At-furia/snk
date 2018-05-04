    const Discord = require('discord.js');
    const low = require('lowdb')
    const FileSync = require ('lowdb/adapters/FileSync')
    const fs = require("fs");
    const config = require("./config.json");

    const adapter = new FileSync('database.json');
    const db = low(adapter);
    const killadapter = new FileSync('kill.json');
    const killdb = low(killadapter);
    const mangeradapter = new FileSync('manger.json');
    const mangerdb = low(mangeradapter);

    db.defaults({xp: [], sugg: [], ptc: [], ptckill: []}).write()

    var bot = new Discord.Client();
    var prefix = "<"
    var randnum = 0;
    var rkill = killdb.get('kill').size().value();
    var rmanger = mangerdb.get('manger').size().value();
    var dansee = db.get('danse').size().value();
    var barmann = db.get('barman').size().value();
    var retet = db.get('etet').size().value();



    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: 'SNK - <help', type: 3}})
        bot.user.setStatus("idle")

    });

  bot.login(process.env.TOKEN);

    bot.on('message', message => {
        
        const kick = require("./commands/kick.js");
        const ban = require("./commands/ban.js");
        const réseaux = require("./commands/réseaux.js");
        const pf = require("./commands/pf.js");
        const admin = require("./commands/admin.js");
        const action = require("./commands/action.js");
      //  const kill = require("./commands/kill.js");
     //   const manger = require("./commands/manger.js");
        const help = require("./commands/help.js");
        const spéciale = require("./commands/spéciale.js");
        const garnison = require("./commands/garnison.js");
        const bataillon = require("./commands/bataillon.js");
        const shifter = require("./commands/shifter.js");        
      //  const msgstats = require("./commands/msgstats.js");


        kick(message, prefix, bot)       
        ban(message, prefix, bot)
        réseaux(message, prefix, bot)
        pf(message, prefix, bot)
        admin(message, prefix, bot)
        action(message, prefix, bot)
      //  kill(message, prefix, bot)
       // manger(message, prefix, bot)
        help(message, prefix, bot)
        spéciale(message, prefix, bot)
        garnison(message, prefix, bot)
        bataillon(message, prefix, bot)
        shifter(message, prefix, bot)
      //  msgstats(message, prefix, bot)



    })

    bot.on("guildMemberAdd", member => {
        const nouveaux = require("./commands/nouveaux.js");

        nouveaux(member, bot)

      })

var number_random = 0;

var party_launch = false;

bot.on('message', function(message){

    if(message.content == prefix + "chasse"){
        if(!message.member.roles.some(r=>["Titan Shifter","Escouade Livaï","La Garnison","Les Brigades Spéciales","Le Bataillon d'Exploration"].includes(r.name)) )
        return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
        
        message.reply("Chasse lancée ! :telescope: Je vois des Titans au loin, essaye de les compter ! tu as juste me dire combien tu vois et je te dirais si j'en vois autant ou pas.. D'après moi il y'a entre 0 et 500 Titans !  ")

        party_launch = true;

        number_random = Math.floor(Math.random() * (500 - 0) + 0)

        console.log(number_random);

    }

    if(party_launch && message.content != null){

        if(Number.isInteger(parseInt(message.content))){

            
            if(message.content > number_random){

                message.reply("Il y'a moins de Titans !")
            }
            else if (message.content < number_random){

                message.reply("Il y'a plus de Titans !")
            
            }else{ (message.content = number_random)

            message.reply('à trouvé le bon nombre de Titans !');

            var msgauthor = message.author.username;

    if(message.author.bot)return;

    if(!db.get("ptc").find({username: msgauthor}).value()){
        db.get("ptc").push({username: msgauthor, ptc: 1}).write();
    } else{
    var userptcdb = db.get("ptc").filter({username: msgauthor}).find('ptc').value();
    console.log(userptcdb);
    var userptc = Object.values(userptcdb)
    console.log(userptc);
    console.log(`Nombre d'ptckill : ${userptc[1]}`)
    db.get("ptc").find({username: msgauthor}).assign({username: msgauthor, ptc: userptc[1] += 1}).write();

}
            party_launch = false;
            }
        }  
    }
                
    if(message.content == "chasse stop"){

        if(party_launch = true){

            message.reply("Les Titans sont partis...")

            party_launch = false;

        }else{

            message.reply("Il n'y a pas de Titans dans les environs")
        }
    }})

        bot.on('message', message =>{
        if (message.content === prefix + "kill"){        

    let tuer = message.guild.channels.find("name", "kill");

    if(!message.member.roles.some(r=>["Escouade Livaï","La Garnison","Les Brigades Spéciales","Le Bataillon d'Exploration","test"].includes(r.name)) )
    return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
    
    randomkill();

    var titankill = Math.floor(Math.random() * 126);
    var kill = killdb.get(`kill[${randnum}].kill_value`).toString().value();
        
    if (message.channel === tuer) { 

    message.reply("a tué " + titankill + " Titans" + `${kill}`)
    var msgauthor = message.author.username;

if(message.author.bot)return;
        if(!db.get("ptckill").find({username: msgauthor}).value()){
            db.get("ptckill").push({username: msgauthor, ptckill: 1}).write();
        }else{
            var userptckilldb = db.get("ptckill").filter({username: msgauthor}).find('ptckill').value();
            console.log(userptckilldb);
            var userptckill = Object.values(userptckilldb)
            console.log(userptckill);
            console.log(`Nombre d'ptckill : ${userptckill[1]}`)
            var titankilln = Math.floor(titankill);
            db.get("ptckill").find({username: msgauthor}).assign({username: msgauthor, ptckill: userptckill[1] += titankilln}).write();
    
        }
} else {

    message.reply("Merci d'utiliser cette commande dans le salon #kill 😉")
        }
    }
if (titankill < 10){

    message.reply("C'est tout ? Je vous pensais plus fort que ça... 😔 ")
}
if (titankill > 115) {
    message.reply("😮 WOAW QUELLE FORCE !!! 😍")

}
}
)

    function randomkill(min, max) {
        min = Math.ceil(0);
        max = Math.floor(rkill);
        randnum = Math.floor(Math.random() * (max - min) + min);
    
    }

bot.on('message', message =>{
    
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

bot.on('message', message =>{

if (message.content === prefix + "manger"){        

    let miam = message.guild.channels.find("name", "manger");

    if(!message.member.roles.some(r=>["Titan Shifter","test"].includes(r.name)) )
    return message.reply("Vous devez être un titan pour utiliser cette commande !");
    
    randommanger();

    var titankill = Math.floor(Math.random() * 251);
    var bouffer = mangerdb.get(`manger[${randnum}].manger_value`).toString().value();
        
    if (message.channel === miam) { 
        
    message.reply("a tué " + titankill + " Humains" + `${bouffer}`)
    var msgauthor = message.author.username;

if(message.author.bot)return;
} else {

    message.reply("Merci d'utiliser cette commande dans le salon #manger 😉")
        }
    }})
    function randommanger(min, max) {
        min = Math.ceil(0);
        max = Math.floor(rmanger);
        randnum = Math.floor(Math.random() * (max - min) + min);
    
    }


// EVENT A DELETTE 



bot.on('message', message => {

    if (message.content === prefix + "Boire"){

    let taverne = message.guild.channels.find("name", "la-taverne");
     if (message.author.bot) return;
     rdmtete();
 
    var etet = db.get(`etet[${randnum}].etet_value`).toString().value();
    
    if (message.channel === taverne) { 

     
 
     message.reply(`Tiens ! Voilà une bierre bien fraiche.` +` ${etet}`)
 
 }}})
 function rdmtete(min, max) {
     min = Math.ceil(0);
     max = Math.floor(retet);
     randnum = Math.floor(Math.random() * (max - min) + min);
 }




bot.on('message', message => {

    if (message.author.bot) return;
    let accueil = message.guild.channels.find("name", "accueil");

    if (message.channel === accueil) { 

let guild = message.member.guild;
let taverneier = guild.roles.find('name', '[Event] Accès a la Taverne');

if (message.content === prefix + "Start"){
    message.member.addRole(taverneier);

}}})

bot.on('message', message => {

        if (message.author.bot) return;
        let taverne = message.guild.channels.find("name", "la-taverne");
        if (message.channel === taverne) { 

    let guild = message.member.guild;
    let maison = guild.roles.find('name', '[Event] Accès a la Maison');
    let removetaverne = guild.roles.find('name', '[Event] Accès a la Taverne');


    if (message.content === prefix + "X1d2jT9ML85lol"){
        message.reply("Vous voilà a l'entrée de la maison, la porte est ouverte...")
        message.member.addRole(maison);
    message.member.removeRole(removetaverne);

}}})

bot.on('message', message => {
    let taverne = message.guild.channels.find("name", "la-taverne");
    if (message.channel === taverne) { 
    if (message.author.bot) return;
    random_danse();

    var danseurfou = db.get(`danse[${randnum}].danse_value`).toString().value();

    if (message.content === prefix + "Alcool"){
    
        message.channel.send(`${danseurfou}`)

    }
}})
function random_danse(min, max) {
    min =Math.ceil(0);
    max = Math.floor(dansee);
    randnum = Math.floor(Math.random() * (max - min) + min);
}

bot.on('message', message => {
    let taverne = message.guild.channels.find("name", "la-taverne");
    if (message.channel === taverne) { 
    if (message.author.bot) return;
    random_barman();

    var barmanici = db.get(`barman[${randnum}].barman_value`).toString().value();

    if (message.content === prefix + "Barman"){
    
        message.reply(`Barman : ${barmanici}`)

    }
}})
function random_barman(min, max) {
    min =Math.ceil(0);
    max = Math.floor(barmann);
    randnum = Math.floor(Math.random() * (max - min) + min);
}


bot.on('message', message => {

    const cuisine = require("./commands/cuisine.js");
    const chambre = require("./commands/chambre.js");
    const salon = require("./commands/salon.js");
    const toilette = require("./commands/toilette.js");
    const salledebaim = require("./commands/salledebaim.js");
    const cave = require("./commands/cave.js");
    const jardin = require("./commands/jardin.js");
    const grenier = require("./commands/grenier.js");


    cuisine(message, prefix, bot)
    chambre(message, prefix, bot)       
    salon(message, prefix, bot)
    toilette(message, prefix, bot)
    salledebaim(message, prefix, bot)
    cave(message, prefix, bot)
    jardin(message, prefix, bot)
    grenier(message, prefix, bot)


})

bot.on('message', message => {

        if (message.author.bot) return;
        let caca = message.guild.channels.find("name", "maison-abandonnée");
        if (message.channel === caca) { 

    let guild = message.member.guild;
    let vvv = guild.roles.find('name', "[Event] Accès a la Maison");
    let removecave = guild.roles.find('name', '[Event] Accès a la Cave');


    if (message.content === prefix + "🔑"){
        message.reply("Vous ouvrez la porte de la cave.")
        message.member.addRole(removecave);
    message.member.removeRole(vvv);

}}})


bot.on('message', message => {

    if (message.author.bot) return;
    let kiki = message.guild.channels.find("name", "cave");
    if (message.channel === kiki) { 

    let guild = message.member.guild;
    let Rolecave = guild.roles.find('name', '[Event] Accès a la Cave');
    let removemaisone = guild.roles.find('name', "[Event] Accès a votre Maison");


if (message.content === prefix + "Maison"){

    

    message.member.addRole(removemaisone);
    message.member.removeRole(Rolecave);
      


    }}})
