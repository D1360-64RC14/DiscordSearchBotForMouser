import { Client } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { DISCORD_BOT_ID, DISCORD_BOT_TOKEN } from '../../config/environment';
import { Routes } from 'discord-api-types/v10';

const commands = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription(
            'Replies with Pong as a message that only you can see.',
        ),
    new SlashCommandBuilder()
        .setName('search')
        .setDescription('Search products from Mouser')
        .addSubcommand((sub) =>
            sub
                .setName('partnumber')
                .setDescription('Search products by partnumber')
                .addStringOption((strOpt) =>
                    strOpt
                        .setName('partnumber')
                        .setDescription('Product partnumber')
                        .setRequired(true),
                ),
        )
        .addSubcommand((sub) =>
            sub
                .setName('keyword')
                .setDescription('Search products by keyword')
                .addStringOption((strOpt) =>
                    strOpt
                        .setName('keyword')
                        .setDescription('Search keyword')
                        .setRequired(true),
                ),
        ),
].map((c) => c.toJSON());

export default function (client: Client) {
    const rest = new REST().setToken(DISCORD_BOT_TOKEN);

    rest.put(Routes.applicationCommands(DISCORD_BOT_ID), { body: commands })
        .then(() => console.log('Comandos atualizados com sucesso'))
        .catch(console.error);
}
