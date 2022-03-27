import { Interaction } from 'discord.js';

export default async function (interaction: Interaction) {
    if (!interaction.isCommand()) return;
    if (interaction.commandName !== 'partnumber') return;

    const partnumber = interaction.options.getString('partnumber', true);
}
