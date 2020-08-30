const Discord = require("discord.js")
const { developerid } = require("../config.json")
const NekosLife = require("nekos.life")
const Nekos = new NekosLife()

module.exports = {
    name: "randomnekogif",
    helpname: "Random Neko GIF",
    description: "Show random neko GIF image",
    usage: "-randomnekogif",
    alias: ["nekogif"],
    run: async(client, message, args) => {
      if(!message.member.roles.cache.has("748536204999524402")) return;
        message.channel.startTyping()
        const NekoGifImg = await Nekos.sfw.nekoGif()
        const NekoGifEmbed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription("Here's your random neko GIF! Nyan!")
        .setImage(NekoGifImg.url)
        .setFooter("Using Nekos.life API")
        message.channel.send(NekoGifEmbed)
        message.channel.stopTyping(true)
    }
}