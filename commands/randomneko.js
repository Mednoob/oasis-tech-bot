const Discord = require("discord.js")
const { developerid } = require("../config.json")
const NekosLife = require("nekos.life")
const Nekos = new NekosLife()

module.exports = {
    name: "randomneko",
    helpname: "Random Neko",
    description: "Show random neko image",
    usage: "-randomneko",
    alias: ["neko"],
    run: async(client, message, args) => {
      if(!message.member.roles.cache.has("748536204999524402")) return;
        message.channel.startTyping()
        const NekoImg = await Nekos.sfw.neko()
        const NekoEmbed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription("Here's your random neko! Nyan!")
        .setImage(NekoImg.url)
        .setFooter("Using Nekos.life API")
        message.channel.send(NekoEmbed)
        message.channel.stopTyping(true)
    }
}