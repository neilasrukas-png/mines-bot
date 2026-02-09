const { Client, GatewayIntentBits } = require('discord.js');

// Tokenas paimamas iš environment variable Railway
const token = process.env.DISCORD_TOKEN;

// Komandų prefixas
const prefix = "!";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Įvyksta, kai botas prisijungia
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

// Prisijungimas su tikru tokenu
client.login('MTQ3MDM0NjI4ODYxNTc4NDUzMA.GFySl1.xs2FPuFcoNJpU0wSeqY7u2DXMO9eu9VyVMnlrQ');
