function pf(message,prefix){
    if(message.content === prefix + "pf"){
message.reply("Commande incomplète : <pf pile OU <pf face")       
        
    }
    if(message.content.startsWith(prefix + 'pf face')){
        random_pf();
        if (randnum == 1){
            message.reply("face, tu as gagné !");
            console.log(randnum);
        }

        if (randnum == 0){
            message.reply("pile, tu as perdu !");
            console.log(randnum);
        }
    }
        if(message.content.startsWith(prefix + 'pf pile')){
            random_pf();
            if (randnum == 1){
            message.reply("pile, tu as gagné !");
            console.log(randnum);
        }

            if (randnum == 0){
            message.reply("face, tu as perdu !");
            console.log(randnum);
        }
    }
}
function random_pf(min, max) {
    min = Math.ceil(0);
    max = Math.floor(1);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}
module.exports = pf

