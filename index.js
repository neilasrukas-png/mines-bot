// Importuojame Discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// Sukuriame klientą su reikalingais intencija
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Čia įrašyk savo bot tokeną (TIK KABUTĖSE)
const token = "MTQ3MDM0NjI4ODYxNTc4NDUzMA.GFySl1.xs2FPuFcoNJpU0wSeqY7u2DXMO9eu9VyVMnlrQ"

// Įvykis, kai botas prisijungia
client.once('ready', () => {
    console.log(`Prisijungta kaip ${client.user.tag}!`);
});

// Prisijungiame prie Discord su tokenu
client.login(token).catch(err => {
    console.error("Nepavyko prisijungti, patikrink tokeną:", err);
});