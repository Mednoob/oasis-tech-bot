const Discord = require("discord.js")
const {Client, Attachment} = require('discord.js');
const bot = new Client();

module.exports = {
  name: "retrieveife",
  helpname: "Retrieve IFE",
  description: "Give you an IFE",
  alias: ["retrieveife"],
  usage: "-retrieveife",
  run: async (client, message, args) => {
    
   const endchannel = client.channels.cache.get("746892776561704990")
    
    if(!message.member.roles.cache.has("746790626606973009")) return message.channel.send({embed: {
      description: "You don't have that product!",
      color: "RED"
    }}).then(restrictmsg => restrictmsg.delete({timeout: 10000}));
    
//------------------------------IFE Embed---------------------------------------
    
    const ifeembed = new Discord.MessageEmbed()
  .setColor("GREEN")
    .setTitle('Product Retrieved!')
    .setDescription("Thank you for purchasing Oasis tech IFE!")
  .setTimestamp()
  .setFooter("If you believe that there is an error when sending product, please contact our support team! Consequator#8181 or Med#3754")
    
//------------------------------IFE Embed--------------------------------------
    endchannel.send({embed: {
      color: "GREEN",
      title: "Product Retrieve",
      description: `Retriever Tag: ${message.author.tag}\nSend Status: Retrieved in DM`,
      thumbnail: {
        url: message.author.avatarURL({dynamic: true, size: 2048})
      }}}) 
    
    client.users.cache.get(message.author.id).send({embed: ifeembed})
    client.users.cache.get(message.author.id).send({files: ["https://cdn.discordapp.com/attachments/745548605074702408/746771715127902359/BTS_-_Save_Me_tempo_150.mid"]})
  
    message.channel.send({embed: {
      color: '00b803',
      title: 'Retrieved!',
      description: "Product retrieved , please check your DM",
      fields: [{
        name: "Product Type",
        value: "IFE",
        inline: true
      }]

    }})
    
    //
  }
}    


    