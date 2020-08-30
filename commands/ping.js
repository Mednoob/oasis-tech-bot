const Discord = require("discord.js")

module.exports = {
  name: "ping",
  helpname: "Ping",
  description: "Ping Pong!",
  alias: [""],
  usage: "-ping",
  run: async (client, message, args) => {
    const pingembed = new Discord.MessageEmbed()
    .setDescription(`:ping_pong: Pong! ${client.ws.ping} `)
    message.channel.send(pingembed)
  }
}