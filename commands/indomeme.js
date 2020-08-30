const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "indomeme",
    helpname: "Indo Meme",
    description: "Gives you an indonesia meme",
    alias: ["indomemes","indomeme"],
    usage: "-indomemes",
    run: async (client, message, args) =>{ 
      if(!message.channel.id.includes("746435507696697355")) return message.delete();
        const subReddits = ["indonesia"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
  
        message.channel.send(memeEmbed);
    }
}