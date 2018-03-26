    const Discord = require('discord.js');
    const low = require('lowdb')
    const FileSync = require ('lowdb/adapters/FileSync')
    const fs = require("fs");
    const config = require("./config.json");

    const adapter = new FileSync('database.json');
    const killadapter = new FileSync('kill.json');
    const db = low(adapter);
    const killdb = low(killadapter);


    db.defaults({xp: [], sugg: []}).write()

    var bot = new Discord.Client();
    var prefix = "<"
    var randnum = 0;
    var rkill = killdb.get('kill').size().value();

    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: 'SNK - <help', type: 3}})
        bot.user.setStatus("idle")

    });

  bot.login(process.env.TOKEN);

    bot.on('message', message => {
        
        const chasse = require("./commands/chasse.js");
        const kick = require("./commands/kick.js");
        const ban = require("./commands/ban.js");
        const réseaux = require("./commands/réseaux.js");
        const pf = require("./commands/pf.js");
        const admin = require("./commands/admin.js");

        chasse(message, prefix, bot)
        kick(message, prefix, bot)       
        ban(message, prefix, bot)
        réseaux(message, prefix, bot)
        pf(message, prefix, bot)
        admin(message, prefix, bot)

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
        Nous allons commencer par choisir votre corps d'armée !
        Pour cela il vous suffit de taper <garnison OU <bataillon OU <b-spéciales
        
        Une fois votre corps d'armée choisit, vous avez a disposition plusieurs commandes
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

    }); 

bot.on('message', message => {
if (message.content === prefix + "help"){
    var help_embed = new Discord.RichEmbed()
            .setColor('#D9F200')
            .addField("Fonctionnement des commandes", "Chaque membre possède les commande de son grade sur le discord ainsi que les commandes des grades inférieurs ")
            .addField("Commandes Brigade d'entrainement", "<réseaux Affiche les différents réseaux sociaux de la communauté SNK - FR\n<b-spéciales Rejoindre Les Brigades spéciales\n<garnison Rejoindre La Garnison\n<bataillon Rejoindre Le Bataillon d'Exploration")
            .addField("Commandes Bataillon d'exploration, Garnison et Brigades Spéciales ", "<chasse Pour lancer le minijeu 'Chasse' (Vos stats ne sont pas enregistrées)\n<kill Pour lancer le minijeu 'Apocalypse Titans' (Vos stats ne sont pas enregistrées) ")
            .addField("Commandes Esquade Livaï", "<admin Affiche les commandes Admin.")
            .setFooter("Crée par Alex_ et Eren Jäger")
        message.channel.sendEmbed(help_embed);
        console.log("Commande Help demandée"); 

    }})
       
    bot.on('message', message => {
        if (message.content.startsWith(prefix + 'kill')) {

        if(!message.member.roles.some(r=>["Escuade Livaï","La Garnison","Les Brigades Spéciales","Le Bataillon d'Exploration"].includes(r.name)) )
        return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");
        
        randomkill();

        var titankill = Math.floor(Math.random() * 101);
        var kill = killdb.get(`kill[${randnum}].kill_value`).toString().value();
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

        }})
        function randomkill(min, max) {
            min = Math.ceil(0);
            max = Math.floor(rkill);
            randnum = Math.floor(Math.random() * (max - min) + min);
        
        }
