const Discord = require("discord.js")
const { developerid } = require("../config.json")
const NekosLife = require("nekos.life")
const Nekos = new NekosLife()

module.exports = {
  name: "randomnsfwnekogif",
  helpname: "Random NSFW Neko GIF",
  description: "Show random NSFW neko GIF image",
  usage: "-randomnsfwnekogif",
  alias: ["nsfwnekogif"],
  run: async(client, message, args) => {
    if(!message.member.roles.cache.has("748536204999524402")) return;
    if(!message.channel.id == "748538080843006003") return;
        message.channel.startTyping()
        const NSFWNekoGifImg = await Nekos.nsfw.nekoGif()
        const NSFWNekoGifEmbed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription("Here's your random NSFW neko GIF! >////< Nyan!")
        .setImage(NSFWNekoGifImg.url)
        .setFooter("Using Nekos.life API")
        message.channel.send(NSFWNekoGifEmbed)
        message.channel.stopTyping(true)
  }
}