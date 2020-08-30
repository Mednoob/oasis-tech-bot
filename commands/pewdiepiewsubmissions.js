const Discord = require("discord.js")
const randomPuppy = require("random-puppy")

module.exports = {
  name: "pewdiepiesubmissions",
  helpname: "Pewdiepie Submissions",
  description: "Sends a random image from r/PewdiepieSubmissions",
  alias: ["pewdsub", "pewdsubmissions", "pewdsubmission", "pewdiepiesubmission"],
  usage: "-pewdiepiesubmissions",
  run: async (client, message, args) => {
    if(!message.channel.id.includes("746435507696697355")) return message.delete();
    const subreddit = "PewdiepieSubmissions"
    
    const randomimage = await randomPuppy(subreddit)
    
    const pewdsembed = new Discord.MessageEmbed()
    .setImage(randomimage)
    .setColor("RANDOM")
    
    message.channel.send(pewdsembed)
  }
}