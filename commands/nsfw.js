const Discord = require("discord.js")
const randomPuppy = require("random-puppy")

module.exports = {
  name: "nsfw",
  helpname: "nsfw",
  description: "Sends a random image from r/nsfw (This command still WIP)",
  alias: ["nsfw"],
  usage: "-nsfw",
  run: async (client, message, args) => {
    if(!message.channel.id.includes("748538080843006003")) return message.delete()
    const subreddit = "indonesia"
    
    const randomimage = await randomPuppy(subreddit).catch(error => message.channel.send("There's an error occured ```" + error + "```"))
    
    const nsfw = new Discord.MessageEmbed()
    .setImage(randomimage)
    .setColor("RANDOM")
    
    message.channel.send(nsfw)
  }
}