const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require ('lowdb/adapters/FileSync')
const fs = require("fs");

function report(message,prefix,bot){

 if(message.content === prefix + "signalement"){

                                var modo_embed = new Discord.RichEmbed()

                                .setTitle("Outil de signalement SNK")
                                .setDescription("Bievenue sur l'outil de signalement SNK, il vous servira a signaler les mauvais comportement des membres si vous en remarquez")
                                .addField("Comment signaler un membre ?","Il vous faudra utiliser la commande <report ainsi que les éléments suivant :\n- Mentionner le membre @NomDuMembre\n- Raison du signalement\n- Canal ou c'est passé l'acte\n- L'heure de l'acte")
                                .addField("Exemple de report","<report @Alex_#1548 Insultes et troll même après avoir demandé d'arrêter. Canal #brigade-d-entrainement a 15h27")
                                .setFooter("Crée et codé par Alex_")
                                message.channel.send(modo_embed)
                            }
                            if(message.content.startsWith(prefix +'report')){
                                var msgauthor = message.author.tag;
                                if (message.author.bot) return;
                                 
                                message.delete(1); //Supposed to delete message
                                bot.channels.get("459467889544658945").send(msgauthor + "A report : " + message.content.slice(7, message.content.length)); 
                            }
                            }



    module.exports = report
