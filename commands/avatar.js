const Discord = require("discord.js")

module.exports = {
  name: "avatar",
  helpname: "Avatar",
  description: "Send avatar",
  alias: ["ava"],
  usage: "-avatar [user]",
  run: async (client, message, args) => {
    const mentionuser= message.mentions.users.first()
    
    if(!mentionuser){ 
      message.channel.send({embed: {
        title: `${message.author.tag} Avatar`,
        image: {
          url: message.author.avatarURL({format: "png", dynamic: true, size: 2048})
        }
      }}).catch(
      error => message.channel.send("There's an error occured ```" + error + "```"
      ))
    } else {
      message.channel.send({embed: {
        title: `${mentionuser.tag} Avatar`,
        image: {
          url: mentionuser.avatarURL({format: "png", dynamic: true, size: 2048})
        }
      }}).catch(
        error => message.channel.send("There's an error occured ```" + error + "```"
      ))
    }
  }
}