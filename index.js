const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')


const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({xp: [], sugg: [], kill:[], ptc:[], ptckill:[]}).write()

var bot = new Discord.Client();
var prefix = ("<");
var randnum = 0;
var rkill = db.get('kill').size().value();

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'SNK - <help', type: 3}})
    console.log("Bot Ready !");

});

bot.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Brigades d'Entraînements");
    member.guild.channels.find("name", "brigade-d-entrainement");
    var bienvenue_embed = new Discord.RichEmbed()

    
    .addField(`Présentation`,`
    Vous venez d'integrer le monde de Shingeki No Kyojin - FR,
    nous vous félicitions pour votre intégrations au brigades d'entraînements.
    
    *Vous devez désormais choisir un corps d'armée entre :
    -La Garnison
    -Le Bataillon d'Exploration
    -Les Brigades Spéciales

    SNK-FR vous expliquera le fonctionnement plus bas dans vos messages :ok_hand:

    Soyez poli et courtois, un français correct est demandé au minimum.
    Le respect est de vigueur, les propos rascistes, injure ou autre ne seront pas toléré.`)
    .setFooter( `*Ne vous inquietez pas, la faction c'est juste pour le RP, histoire de s'amuser, vous aurez les même droits sur le 
    serveur quel que soit votre faction.
    Aussi, nous vous demandons de jouer le jeu et de choisir un pseudo de personnage en lien avec SNK`)
    .addBlankField()
    member.sendMessage(bienvenue_embed);

    var bienvenue2_embed = new Discord.RichEmbed()
    .addField(`Présentation de SNK-FR`,`
    Bonjour je me présente : SNK-FR, je suis votre "guide" dans cette ville !
    Nous allons commencer par choisir votre corps d'armée !
    Pour cela il vous suffit de taper <garnison OU <bataillon OU <b-spéciales
    
    Une fois votre corps d'armée choisit, vous avez a disposition plusieurs commandes
    qui vous seront détaillées en tapant <help !
    Il vous sera aussi possible de gagner des titres grâce a des "jeux" !`)
    member.sendMessage(bienvenue2_embed);
    member.addRole(role)
});

bot.on('message', message => {
if (message.content === prefix + "att"){
var bienvenue_embed = new Discord.RichEmbed()

    .addField(`Présentation`,`
    Vous venez d'integrer le monde de Shingeki No Kyojin - FR,
    nous vous félicitions pour votre intégrations au brigades d'entraînements.
    
    *Vous devez désormais choisir un corps d'armée entre :
    -La Garnison
    -Le Bataillon d'Exploration
    -Les Brigades Spéciales

    SNK-FR vous expliquera le fonctionnement plus bas dans vos messages :ok_hand:

    Soyez poli et courtois, un français correct est demandé au minimum.
    Le respect est de vigueur, les propos rascistes, injure ou autre ne seront pas toléré.`)
    .setFooter( `*Ne vous inquietez pas, la faction c'est juste pour le RP, histoire de s'amuser, vous aurez les même droits sur le 
    serveur quel que soit votre faction.
    Aussi, nous vous demandons de jouer le jeu et de choisir un pseudo de personnage en lien avec SNK`)
    .addBlankField()
    message.channel.sendEmbed(bienvenue_embed);

    var bienvenue2_embed = new Discord.RichEmbed()
    .addField(`Présentation de SNK-FR`,`
    Bonjour je me présente : SNK-FR, je suis votre "guide" dans cette ville !
    Nous allons commencer par choisir votre corps d'armée !
    Pour cela il vous suffit de taper <garnison OU <bataillon OU <b-spéciales
    
    Une fois votre corps d'armée choisit, vous avez a disposition plusieurs commandes
    qui vous seront détaillées en tapant <help !
    Il vous sera aussi possible de gagner des titres grâce a des "jeux" !`)
    message.channel.sendEmbed(bienvenue2_embed);

}})

bot.on('message', message => {
if (message.content === prefix + "stats"){
    message.reply(' :tools: Commande actuellement en maintenance ! :tools: ')
}})

bot.on('message', message => {
if (message.content === prefix + "sugg"){
    message.reply(' :tools: Commande actuellement en maintenance ! :tools: ')
}})

bot.on('message', message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
  
  let guild = message.member.guild;
  let Role = guild.roles.find('name', "Le Bataillon d'Exploration");
  let Roleremovegarnison = guild.roles.find('name', 'La Garnison');
  let Roleremovespéciale = guild.roles.find('name', 'Les Brigades Spéciales');
  
  if(!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + 'bataillon') || message.content.startsWith(prefix + 'bataillon') ) {
    if (message.member.roles.has(Role.id)) {
        message.channel.sendMessage('tu possède déjà ce rôle !');
        console.log(`${message.author.username} possède déjà ce rôle !`);
   }
    else {
    message.member.addRole(Role);
    message.channel.sendMessage("Tu as rejoint le Bataillon d'Exploration !");
    message.member.removeRole(Roleremovegarnison);
    message.member.removeRole(Roleremovespéciale);
    console.log(`${message.author.username} got a role`);
  };}});

  bot.on('message', message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
  
  let guild = message.member.guild;
  let Role = guild.roles.find('name', 'La Garnison');
  let Roleremoveexploration = guild.roles.find('name', "Le Bataillon d'Exploration");
  let Roleremovespéciale = guild.roles.find('name', 'Les Brigades Spéciales');
  
  if(!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + 'garnison') || message.content.startsWith(prefix + 'garnison') ) {
    if (message.member.roles.has(Role.id)) {
        message.channel.sendMessage('tu possède déjà ce rôle !');
        console.log(`${message.author.username} possède déjà ce rôle !`);
   }
    else {
    message.member.addRole(Role);
    message.channel.sendMessage('Tu as rejoint la Garnison !');
    message.member.removeRole(Roleremoveexploration);
    message.member.removeRole(Roleremovespéciale);
    console.log(`${message.author.username} got a role`);
  };}});

  bot.on('message', message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
  
  let guild = message.member.guild;
  let Role = guild.roles.find('name', 'Les Brigades Spéciales');
  let Roleremovegarnison = guild.roles.find('name', 'La Garnison');
  let Roleremoveexploration = guild.roles.find('name', "Le Bataillon d'Exploration");
  
  if(!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + 'b-spéciale') || message.content.startsWith(prefix + 'b-spéciale') ) {
    if (message.member.roles.has(Role.id)) {
        message.channel.sendMessage('tu possède déjà ce rôle !');
        console.log(`${message.author.username} possède déjà ce rôle !`);
   }
    else {
    message.member.addRole(Role);
    message.channel.sendMessage('Tu as rejoint Les Brigades Spéciales !');
    message.member.removeRole(Roleremovegarnison);
    message.member.removeRole(Roleremoveexploration);
    console.log(`${message.author.username} got a role`);
  };}});



bot.on('message', message => {

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

    }

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){

        case  "kick":

    if (!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")){
        message.reply("Tu n'as pas le droit de kick ! ;)")
    }else{
        var memberkick = message.mentions.users.first();
        console.log(memberkick)
        console.log(message.guild.member(memberkick).kickable)
        if(!memberkick){
            message.reply("L'utilisateur n'existe pas !");
        }else{
            if(!message.guild.member(memberkick).kickable){
                message.reply("Utilisateur impossible a kick !");
            }else{
                message.guild.member(memberkick).kick().then((member) => {
                message.channel.send(`${member.displayName} a été kick du serveur !`);
            }).catch(() => {
                message.channel.send("Kick Refusé!")
            })
        }
    }}

    break;

    case  "ban":

    if (!message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS")){
        message.reply("Tu n'as pas le droit de ban ! ;)")
    }else{
        var memberban = message.mentions.users.first();
        console.log(memberban)
        console.log(message.guild.member(memberban).bannable)
        if(!memberban){
            message.reply("L'utilisateur n'existe pas !");
        }else{
            if(!message.guild.member(memberban).bannable){
                message.reply("Utilisateur impossible a ban !");
            }else{
                message.guild.member(memberban).ban().then((member) => {
                message.channel.send(`${member.displayName}a été ban du serveur !`);
            }).catch(() => {
                message.channel.send("Ban Refusé!")
            })
        }
    }}
            
            case "kill" :
            
            if(!message.member.roles.some(r=>["Escuade Livaï","La Garnison","Les Brigades Spéciales","Le Bataillon d'Exploration"].includes(r.name)) )
            return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
            
            randomkill();

            var titankill = Math.floor(Math.random() * 101);
            var kill = db.get(`kill[${randnum}].kill_value`).toString().value();
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
            
        break;
            
case "alex" : 

           var xp = db.get("xp").filter({username: msgauthor}).find('xp').value()
        var ptc = db.get("ptc").filter({username: msgauthor}).find('ptc').value()
        var ptckill = db.get("ptckill").filter({username: msgauthor}).find('ptckill').value()
        var ptcfinal = Object.values(ptc);
        var xpfinal = Object.values(xp);
        var ptckillfinal = Object.values(ptckill);
        var xp_embed = new Discord.RichEmbed()
            .addField("Messages :", `${message.author.username} : ${xpfinal[1]} messages postés` )
            .addField("Minijeux :", `Chasse de Titans : ${ptcfinal[1]} points
Apocalypse Titans : ${ptckillfinal[1]} Titans tués ` )
        message.channel.send({embed: xp_embed});
            
            break;
    // case "sugg":

    // var value = message.content.substr(6);
 //       if(!message.member.roles.some(r=>["Escuade Livaï","Le Bataillon d'Exploration","Les Brigades Spéciales","La Garnison"].includes(r.name)) )
 //       return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
 //       var author = message.author.username.toString();
 //       var number = db.get('sugg').map('id').value();
  //      console.log(value);
  //      message.reply("La suggestion a bien été prise ajoutée dans les demandes !")

 //       db.get('sugg')
   //         .push({ story_value: value, story_author: author})
  //          .write();
  //      break;
//*
// case "stats" : 

//            var xp = db.get("xp").filter({username: msgauthor}).find('xp').value()
//        var ptc = db.get("ptc").filter({username: msgauthor}).find('ptc').value()
 //       var ptckill = db.get("ptckill").filter({username: msgauthor}).find('ptckill').value()
 //       var ptcfinal = Object.values(ptc);
 //       var ptckillfinal = Object.values(ptckill);
 //       var xp_embed = new Discord.RichEmbed()
 //           .addField("Messages :", `${message.author.username} : ${xpfinal[1]} messages postés` )
 //           .addField("Minijeux :", `Chasse de Titans : ${ptcfinal[1]} points
//Apocalypse Titans : ${ptckillfinal[1]} Titans tués ` )
 //       message.channel.send({embed: xp_embed});

    }
    

    if (message.content === prefix + "help"){
    var help_embed = new Discord.RichEmbed()
            .setColor('#D9F200')
            .addField("Fonctionnement des commandes", "Chaque membre possède les commande de son grade sur le discord ainsi que les commandes des grades inférieurs ")
            .addField("Commandes Brigade d'entrainement", "<réseaux Affiche les différents réseaux sociaux de la communauté SNK - FR\n<b-spéciales Rejoindre Les Brigades spéciales\n<garnison Rejoindre La Garnison\n<bataillon Rejoindre Le Bataillon d'Exploration")
            .addField("Commandes Bataillon d'exploration, Garnison et Brigades Spéciales ", "<sugg Envoyer une suggestion d'amélioration du serveur Discord. :x: \n<stats Voir ses stats sur le serveur. :x: \n<chasse Pour lancer le minijeu 'Chasse' (Vos stats ne sont enregistrées)\n<kill Pour lancer le minijeu 'Apocalypse Titans' (Vos stats sont enregistrées) ")
            .addField("Commandes Esquade Livaï", "<admin Affiche les commandes Admin.")
            .setFooter("Crée par Alex_ et Eren Jäger")
        message.channel.sendEmbed(help_embed);
        console.log("Commande Help demandée"); 

    }

    if (message.content === prefix + "réseaux"){
        var réseaux_embed = new Discord.RichEmbed()
                .setColor('#D9F200')
                .addField("Site", "En construction")
                .addField("Twitter", "https://twitter.com/FR_SNK")
                .addField("Facebook", "https://www.facebook.com/Shingeki-no-kyojin-3-147624222254357/ \nhttps://www.facebook.com/SNKFrance/")
                .addField("Youtube", "https://www.youtube.com/channel/UCKzU9176ms-0z6Kmjpz2Onw")
                .addField("Partenaires", "https://twitter.com/BlaBla_Manga \nhttps://www.youtube.com/channel/UCMj7bG6yzvJAn1rfGN-kE9g")
                .setFooter("Crée par Alex_ et Eren Jäger")
            message.channel.sendEmbed(réseaux_embed);
            console.log("Commande réseaux demandée"); 
    
        }

        if (message.content === prefix + "admin"){
            if(!message.member.roles.some(r=>["Escuade Livaï","test"].includes(r.name)) )
            return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
            
            var admin_embed = new Discord.RichEmbed()
                    .setColor('#D9F200')
                    .addField("Commandes Modération", "/kick @PseudoDuMembre\n/ban @PseudoDuMembre")
                    .setFooter("Crée par Alex_ et Eren Jäger")
                message.author.sendMessage(admin_embed);
                console.log("Commande Admin demandée"); 
        
        
    }



}); 

var number_random = 0;

var party_launch = false;

bot.on('message', function(message){
    if(message.content == prefix + "chasse"){
        if(!message.member.roles.some(r=>["Escuade Livaï","La Garnison","Les Brigades Spéciales","Le Bataillon d'Exploration"].includes(r.name)) )
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

            message.reply('à trouvé le bon nombre de Titans et gagne 1 point !');

            var msgauthor = message.author.username;

    if(message.author.bot)return;

    if(!db.get("ptc").find({username: msgauthor}).value()){
        db.get("ptc").push({username: msgauthor, ptc: 1}).write();
    }else{
        var userptcdb = db.get("ptc").filter({username: msgauthor}).find('ptc').value();
        console.log(userptcdb);
        var userptc = Object.values(userptcdb)
        console.log(userptc);
        console.log(`Nombre d'ptc : ${userptc[1]}`)

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

    }
})

function randomkill(min, max) {
    min = Math.ceil(0);
    max = Math.floor(rkill);
    randnum = Math.floor(Math.random() * (max - min) + min);

}

  bot.login(process.env.TOKEN);


