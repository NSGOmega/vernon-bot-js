const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const mongoose = require("mongoose")

require("dotenv").config()

const { Intents } = DiscordJS

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})




client.on('ready', async() => {
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, "features"),
    testServers: ["770727600322248726", "752704745700982876" ],
    botOwners: ["117506271715917829", "192365711954411520"],
    mongoUri: process.env.MONGO_URI

  })

  client.user.setActivity(`!vernon | ${client.guilds.cache.size} servers`,
  { 
    type: 'STREAMING',
    url: "https://www.twitch.tv/omegattv_"
 });
})

client.login(process.env.TOKEN)
