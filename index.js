const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')


const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({xp: [], sugg: []}).write()

var bot = new Discord.Client();
var prefix = ("<");
var randnum = 0;

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'SNK - <help', type: 0}})
    console.log("Bot Ready !");

});

bot.login('process.env.TOKEN');

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

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
  
  let guild = message.member.guild;
  let Role = guild.roles.find('name', "Le Bataillon d'Exploration");
  
  if(!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + 'bataillon') || message.content.startsWith(prefix + 'bataillon') ) {
    if (message.member.roles.has(Role.id)) {
        message.channel.sendMessage('tu possède déjà ce rôle !');
        console.log(`${message.author.username} possède déjà ce rôle !`);
   }
    else {
    message.member.addRole(Role);
    message.channel.sendMessage("Tu as rejoint le Bataillon d'Exploration !");
    console.log(`${message.author.username} got a role`);
  };}});

  bot.on('message', message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
  
  let guild = message.member.guild;
  let Role = guild.roles.find('name', 'La Garnison');
  
  if(!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + 'garnison') || message.content.startsWith(prefix + 'garnison') ) {
    if (message.member.roles.has(Role.id)) {
        message.channel.sendMessage('tu possède déjà ce rôle !');
        console.log(`${message.author.username} possède déjà ce rôle !`);
   }
    else {
    message.member.addRole(Role);
    message.channel.sendMessage('Tu as rejoint la Garnison !');
    console.log(`${message.author.username} got a role`);
  };}});

  bot.on('message', message => {

    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
  
  let guild = message.member.guild;
  let Role = guild.roles.find('name', 'Les Brigades Spéciales');
  
  if(!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + 'b-spéciale') || message.content.startsWith(prefix + 'b-spéciale') ) {
    if (message.member.roles.has(Role.id)) {
        message.channel.sendMessage('tu possède déjà ce rôle !');
        console.log(`${message.author.username} possède déjà ce rôle !`);
   }
    else {
    message.member.addRole(Role);
    message.channel.sendMessage('Tu as rejoint Les Brigades Spéciales !');
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

    break;

    case "sugg":

    var value = message.content.substr(6);
        if(!message.member.roles.some(r=>["Escuade Livaï","Le Bataillon d'Exploration","Les Brigades Spéciales","La Garnison"].includes(r.name)) )
        return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
        var author = message.author.username.toString();
        var number = db.get('sugg').map('id').value();
        console.log(value);
        message.reply("La suggestion a bien été prise ajoutée dans les demandes !")

        db.get('sugg')
            .push({ story_value: value, story_author: author})
            .write();
        break;

        case "stats" : 

        if(!message.member.roles.some(r=>["Escuade Livaï","Le Bataillon d'Exploration","Les Brigades Spéciales","La Garnison"].includes(r.name)) )
        return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
        var userMessageDB = db.get("xp").filter({username: msgauthor}).find("xp").value();
        var userXP = Object.values(userxpdb);
        var stats_embed = new Discord.RichEmbed()
            .setTitle(`Nombre de messages sur le serveur`)
            .addField("Messages", `${userXP[1]} messages`, true)
            .addField("Nom du membre", msgauthor, true)

            message.channel.send({embed: stats_embed});

    }
    

    if (message.content === prefix + "help"){
    var help_embed = new Discord.RichEmbed()
            .setColor('#D9F200')
            .addField("Fonctionnement des commandes", "Chaque membre possède les commande de son grade sur le discord ainsi que les commandes des grades inférieurs ")
            .addField("Commandes Brigade d'entrainement", "<réseaux Affiche les différents réseaux sociaux de la communauté SNK - FR\n<b-spéciales Rejoindre Les Brigades spéciales\n<garnison Rejoindre La Garnison\n<bataillon Rejoindre Le Bataillon d'Exploration")
            .addField("Commandes Bataillon d'exploration, Garnison et Brigades Spéciales ", "<sugg Envoyer une suggestion d'amélioration du serveur Discord.\n<stats Voir son nombre de messages sur le serveur. ")
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


  


