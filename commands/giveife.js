module.exports = {
  name: "giveife",
  helpname: "Give IFE",
  description: "Give IFE role",
  alias: ["giveife"],
  usage: "-giveife",
  run: async(client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send({embed: {
      description: "You don't have permission to do that!"
    }}).then(nopermmsg => nopermmsg.delete({timeout: 2000}))
    const giverolemember = message.mentions.members.first();
    const giverolerole = message.guild.roles.cache.find(r => r.name === "IFE");
    if(!giverolemember) return message.channel.send({embed: {
      description: "Please, mention the person!",
      color: "RED"
    }}).then(nomentionmsg => nomentionmsg.delete({timeout: 2000}))
    if(giverolemember.roles.cache.has("746790626606973009")) return message.channel.send({embed: {
      description: "This user already have the IFE product!",
      color: "RED"
    }}).then(havepermmsg => havepermmsg.delete({timeout: 2000}))
    
     await giverolemember.roles.add(giverolerole)
    message.channel.send({embed: {
      title: 'Product has gived.', //
      description: `IFE Product given to <@${giverolemember.id}>`
    }})
      client.channels.cache.get("747012275021414472").send({embed: {
        title: "IFE Give",
        description: `Giver Tag: ${message.author.tag}\nMentioned User: <@${giverolemember.id}>\nSend Status: IFE Permission Given`,
        thumbnail: {
          url: message.author.avatarURL({dynamic: true, size: 2048})
          
        }
      }})
    }
}