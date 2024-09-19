const { Client, Partials, GatewayIntentBits, Collection } = require('discord.js');

const client = new Client({
    allowedMentions: {
        parse: [
            'users',
            'roles'
        ],
        repliedUser: false
    },
    autoReconnect: true,
    disabledEvents: [
        "TYPING_START"
    ],
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.Reaction,
        Partials.User,
        Partials.GuildScheduledEvent
    ],
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.MessageContent
    ],
    restTimeOffset: 0
});

const fs = require('fs');
const terminal = require('./terminal');

client.commands = new Collection();
client.prefixCommands = new Collection();

require('dotenv').config();
if (!process.env.token) terminal.error('Exiting, no token is set') && process.exit(1);

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/slashCommands");
const prefixFolders = fs.readdirSync("./src/prefixCommands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    terminal.info('Logging in...');
    client.handleEvents();
    client.handleCommands(commandFolders);
    client.handlePrefixes(prefixFolders);
    client.login(process.env.token);
})();
