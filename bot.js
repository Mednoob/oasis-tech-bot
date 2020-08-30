const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();
const fs = require("fs");
const { prefix } = require("./config.json");
require("dotenv").config();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


client.aliases = new Discord.Collection();
client.commands = new Discord.Collection();

const commandFile = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
commandFile.forEach(file => {
  const command = require(`./commands/${file}`)
  client.commands.set(command.name, command);
  command.alias.forEach(alias => {
  client.aliases.set(alias, command);
})});

const Acti = (client.users.cache.size);
client.on('ready', () => {
client.user.setStatus('Online')
console.log("Bot is Ready to Use!");
  const ActivityList = ['Bot under development'];
  setInterval(function() {
    let Activity =
      ActivityList[Math.floor(Math.random() * ActivityList.length)];
    client.user.setActivity(Activity);
  }, 3000);
});


//------------------------Message Event-------------------------------------

client.on("message", message => {
  if(!message.content.startsWith(prefix)) return;
  let args = message.content.split(" ")
  let cmd = message.content.toLowerCase().split(" ")[0]
  cmd = cmd.slice(prefix.length)
  try {
    const filecmd = client.commands.get(cmd) || client.aliases.get(cmd)
    if(!filecmd) return;
    filecmd.run(client, message, args)
  } catch(err) {
    console.error(err)
  } finally {
    console.log(`${cmd}`)
  }
})



//-----------------------Message Event--------------------------------------


client.login(process.env.TOKEN)

