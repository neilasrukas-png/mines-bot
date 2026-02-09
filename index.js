const { Client, GatewayIntentBits } = require('discord.js');

// Tokenas paimamas iš environment variable Railway (ar tavo lokalaus kompiuterio)
const token = process.env.DISCORD_TOKEN;

// Prefixas komandoms
const prefix = "!";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Kai botas prisijungia
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Paprasta komanda !ping
client.on('messageCreate', message => {
    if (message.author.bot) return; // ignoruoti kitus botus

    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong!');
    }
});

// Prisijungimas su tokenu
client.login(token);
