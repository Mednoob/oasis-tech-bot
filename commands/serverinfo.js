const Discord = require("discord.js")

module.exports = {
  name: "serverinfo",
  helpname: "Server Info",
  description: "Show server statistic",
  alias: ["servstats", "serverstats", "servinfo"],
  usage: "-serverinfo",
  run: async (client, message, args) => {
    const statsembed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Server Statistic")
    .setDescription(`This is the server info\n\n**Server Name:** ${message.guild.name}\n**Server Owner:** <@${message.guild.ownerID}>\n**Server Region:** ${message.guild.region}\n**Member Count:** ${message.guild.memberCount}\n**Role Count:** ${message.guild.roles.cache.size}`)
    .setThumbnail('https://i.gyazo.com/694943295dd820fe797972053987d579.png')
    message.channel.send(statsembed)
  }
}