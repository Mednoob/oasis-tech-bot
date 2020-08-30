const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    helpname: "Meme",
    description: "Gives you a meme",
    alias: ["memes","meme"],
    usage: "-memes",
    run: async (client, message, args) =>{ 
      if(!message.channel.id.includes("746435507696697355")) return message.delete();
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
  
        message.channel.send(memeEmbed);
    }
}