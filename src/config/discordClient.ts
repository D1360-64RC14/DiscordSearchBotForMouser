import { Client, Intents } from 'discord.js';
import { DISCORD_BOT_TOKEN } from './environment';

const intents = [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
];

export const client = new Client({ intents });

client.login(DISCORD_BOT_TOKEN);
