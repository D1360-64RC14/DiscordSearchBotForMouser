import { Client } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { DISCORD_BOT_ID, DISCORD_BOT_TOKEN } from '../../config/environment';
import { Routes } from 'discord-api-types/v10';

const commands = [
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription(
            'Replies with pong and delete the message after 5 seconds.',
        )
        .toJSON(),
    new SlashCommandBuilder()
        .setName('partnumber')
        .setDescription('Search by product partnumber')
        .addStringOption((option) =>
            option
                .setName('partnumber')
                .setDescription('Product partnumber')
                .setRequired(true),
        )
        .toJSON(),
];

export default function (client: Client) {
    const rest = new REST().setToken(DISCORD_BOT_TOKEN);

    rest.put(Routes.applicationCommands(DISCORD_BOT_ID), { body: commands })
        .then(() => console.log('Comandos atualizados com sucesso'))
        .catch(console.error);
}
