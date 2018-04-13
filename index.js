    const Discord = require('discord.js');
    const low = require('lowdb')
    const FileSync = require ('lowdb/adapters/FileSync')
    const fs = require("fs");
    const config = require("./config.json");

    const adapter = new FileSync('database.json');
    const db = low(adapter);


    db.defaults({xp: [], sugg: []}).write()

    var bot = new Discord.Client();
    var prefix = "<"
    var randnum = 0;

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
        const kill = require("./commands/kill.js");
        const manger = require("./commands/manger.js");
        const help = require("./commands/help.js");

        kick(message, prefix, bot)       
        ban(message, prefix, bot)
        réseaux(message, prefix, bot)
        pf(message, prefix, bot)
        admin(message, prefix, bot)
        action(message, prefix, bot)
        kill(message, prefix, bot)
        manger(message, prefix, bot)
        help(message, prefix, bot)

    })

    bot.on("guildMemberAdd", member => {
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
        member.sendMessage(bienvenue_embed);

        var bienvenue2_embed = new Discord.RichEmbed()
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
        member.sendMessage(bienvenue2_embed);
        member.addRole(role)
    });

    bot.on('message', message => {

        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
    
    let guild = message.member.guild;
    let Role = guild.roles.find('name', "Le Bataillon d'Exploration");
    let Roleremoveentrainement = guild.roles.find('name', "Brigades d'Entraînements");
    
    if(!message.content.startsWith(prefix)) return;
    
    if (message.content.startsWith(prefix + 'bataillon')) {
        
        if(!message.member.roles.some(r=>["Brigades d'Entraînements"].includes(r.name)) )
    return message.reply("Tu as déjà choisi un corps d'armée, tu ne peux pas en choisir un autre !");
        
        if (message.member.roles.has(Role.id)) {
            message.channel.sendMessage('tu possède déjà ce rôle !');
    }
        else {
        message.member.addRole(Role);
        message.channel.sendMessage("Tu as rejoint le Bataillon d'Exploration !");
        message.member.removeRole(Roleremoveentrainement);
    };}});


    bot.on('message', message => {

        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
    
    let guild = message.member.guild;
    let Role = guild.roles.find('name', "Titan Shifter");
    let Roleremoveentrainement = guild.roles.find('name', "Brigades d'Entraînements");
    
    if(!message.content.startsWith(prefix)) return;
    
    if (message.content.startsWith(prefix + 'shifter')) {
        
        if(!message.member.roles.some(r=>["Brigades d'Entraînements"].includes(r.name)) )
    return message.reply("Tu as déjà choisi un corps d'armée, tu ne peux pas en choisir un autre !");
        
        if (message.member.roles.has(Role.id)) {
            message.channel.sendMessage('tu possède déjà ce rôle !');
    }
        else {
        message.member.addRole(Role);
        message.channel.sendMessage("Tu as rejoint les Titans Shifter !");
        message.member.removeRole(Roleremoveentrainement);
    };}});

    bot.on('message', message => {

        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
    
    let guild = message.member.guild;
    let Role = guild.roles.find('name', 'La Garnison');
    let Roleremoveentrainement = guild.roles.find('name', "Brigades d'Entraînements");
    
    if(!message.content.startsWith(prefix)) return;
    
    if (message.content.startsWith(prefix + 'garnison')) {
        
        if(!message.member.roles.some(r=>["Brigades d'Entraînements"].includes(r.name)) )
    return message.reply("Tu as déjà choisi un corps d'armée, tu ne peux pas en choisir un autre !");
        
        if (message.member.roles.has(Role.id)) {
            message.channel.sendMessage('tu possède déjà ce rôle !');
    }
        else {
        message.member.addRole(Role);
        message.channel.sendMessage('Tu as rejoint la Garnison !');
        message.member.removeRole(Roleremoveentrainement);
    };}});

    bot.on('message', message => {

        if (message.author.bot) return;
        if (message.channel.type === 'dm') return;
    
    let guild = message.member.guild;
    let Role = guild.roles.find('name', 'Les Brigades Spéciales');
    let Roleremoveentrainement = guild.roles.find('name', "Brigades d'Entraînements");
    
    if(!message.content.startsWith(prefix)) return;
    
    if (message.content.startsWith(prefix + 'b-spéciale')) {
        
        if(!message.member.roles.some(r=>["Brigades d'Entraînements"].includes(r.name)) )
    return message.reply("Tu as déjà choisi un corps d'armée, tu ne peux pas en choisir un autre !");
        
        if (message.member.roles.has(Role.id)) {
            message.channel.sendMessage('tu possède déjà ce rôle !');
    }
        else {
        message.member.addRole(Role);
        message.channel.sendMessage('Tu as rejoint Les Brigades Spéciales !');
        message.member.removeRole(Roleremoveentrainement);
    };}});

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

