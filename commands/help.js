const Discord = require("discord.js")

module.exports = {
  name: "help",
  helpname: "Help",
  description: "Show bot command list",
  alias: ["?", "cmd"],
  usage: "-help",
  run: async (client, message, args) => {
    if(!args[1]) {
    const helpembed = new Discord.MessageEmbed()
    
    //---------------------------------------------------------
    .setColor('#fc8803')
	.setTitle('Commands')
	.setDescription("Prefix for Oasis tech is - ")
	.setThumbnail('https://i.gyazo.com/694943295dd820fe797972053987d579.png')
	.addField('Reddit Commands', 'Commands just for you who love reddit memes\n\n`meme`, `pewdiepiesubmissions`, `indomeme`', true)
  .addField('Anime-Related Commands', 'Of course we have anime-related commands\n\n`randomneko`, `randomnekogif`, `randomnsfwneko`, `randomnsfwnekogif`', true)
	.setTimestamp()
	.setFooter('Bot made by : Oasis tech Team');
    
  //-------------------------------------------------------------------
    
    client.users.cache.get(message.author.id).send(helpembed)
    message.channel.send({embed: {
      description: "Message sent to DM!",
      color: '00b803'
    }}).then(channelembedhelp => channelembedhelp.delete({timeout: 2000}))
    } else {
      const cmdget = client.commands.get(args[1]) || client.aliases.get(args[1])
      if(!cmdget) return message.channel.send({embed: {
        color: "RED",
        description: ":x: Command not found"
      }})
      message.channel.send({
        embed: {
          color: "GREEN",
          title: `${cmdget.helpname} Command`,
          description: cmdget.description,
          fields: [{
            name: "Usage", value: cmdget.usage, inline: true
          }, {
            name: "Alias(es)", value: cmdget.alias.join(", "), inline: false
          }]
        }
      })
    }
    //wkwkkkwkwkwkwkwkkw
  }
}