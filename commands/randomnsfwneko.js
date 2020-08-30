const Discord = require("discord.js")
const { developerid } = require("../config.json")
const NekosLife = require("nekos.life")
const Nekos = new NekosLife()

module.exports = {
  name: "randomnsfwneko",
  helpname: "Random NSFW Neko",
  description: "Show random NSFW neko image",
  usage: "-randomnsfwneko",
  alias: ["nsfwneko"],
  run: async(client, message, args) => {
    if(!message.member.roles.cache.has("748536204999524402")) return;
    if(!message.channel.id == "748538080843006003") return;
        message.channel.startTyping()
        const NSFWNekoImg = await Nekos.nsfw.neko()
        const NSFWNekoEmbed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription("Here's your random NSFW neko! >////< Nyan!")
        .setImage(NSFWNekoImg.url)
        .setFooter("Using Nekos.life API")
        message.channel.send(NSFWNekoEmbed)
        message.channel.stopTyping(true)
  }
}