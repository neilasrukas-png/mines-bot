const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const token = "MTQ3MDM0NjI4ODYxNTc4NDUzMA.GFySl1.xs2FPuFcoNJpU0wSeqY7u2DXMO9eu9VyVMnlrQ";

client.once('ready', () => {
  console.log(`✅ Prisijungta kaip ${client.user.tag}`);
});

client.login(token).catch(err => {
  console.error("❌ Login klaida:", err);
});