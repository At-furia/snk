function ban(message,prefix,bot){

    if(message.content.startsWith(prefix +'ban')){
               if(message.author.bot)return;

        if (!message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS")){
            message.reply("Tu n'as pas le droit de ban ! ;)")
        }else{
            var memberban = message.mentions.users.first();
            console.log(memberban)
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
    }}

    module.exports = ban
