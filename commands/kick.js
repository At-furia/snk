function kick(message,prefix,bot){

    if(message.content.startsWith(prefix +'kick')){
            if(message.author.bot)return;

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
            message.channel.send(`${member.displayName}a été kick du serveur !`);
        }).catch(() => {
            message.channel.send("Kick Refusé!")
            })
        }
    }}
}}

module.exports = kick
