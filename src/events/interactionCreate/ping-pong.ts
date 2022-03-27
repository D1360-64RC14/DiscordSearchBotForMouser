import { Interaction } from 'discord.js';

export default async function (interaction: Interaction) {
    if (!interaction.isCommand()) return;
    if (interaction.commandName !== 'ping') return;

    await interaction.reply({
        content: 'Pong 🏓',
        ephemeral: true,
    });
}
