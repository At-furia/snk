
    var number_random = 0;
    var party_launch = false;

function chasse(message,prefix){
    if(message.content.startsWith(prefix + 'chasse')){
        if(!message.member.roles.some(r=>["Escuade Livaï","La Garnison","Les Brigades Spéciales","Le Bataillon d'Exploration"].includes(r.name)) )
        return message.reply("Vous n'êtes pas assez gradé pour utiliser cette commande !");

            message.reply("Chasse lancée ! :telescope: Je vois des Titans au loin, essaye de les compter ! tu as juste me dire combien tu vois et je te dirais si j'en vois autant ou pas.. D'après moi il y'a entre 0 et 500 Titans !  ")

        party_launch = true;

        number_random = Math.floor(Math.random() * (500 - 0) + 0)

        console.log(number_random);
    }

    if(party_launch && message.content  != null){


        if(Number.isInteger(parseInt(message.content))){


        if(message.content > number_random){

                message.reply("Il y'a moins de Titans !")
            }
            else if(message.content < number_random){

                message.reply("Il y'a plus de Titans !")
            

            }else{(message.content = number_random) 

                message.reply('à trouvé le bon nombre de Titans et gagne 1 point !');

                var msgauthor = message.author.username;
        
            party_launch = false;
            
            }
        }
    }   
        if(message.content == "chasse stop"){

            if(party_launch == true){
    
                message.reply("Les Titans sont partis...")
    
                party_launch = false;
    
            }else{
    
                message.reply("Il n'y a pas de Titans dans les environs.")
            }
        }
    }

    module.exports = chasse
