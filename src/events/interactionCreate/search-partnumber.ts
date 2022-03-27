import { Interaction } from 'discord.js';
import { MOUSER_API_TOKEN } from '../../config/environment';
import { searchByPatnumber } from '../../MouserApi/v1/SearchApi';

export default async function (interaction: Interaction) {
    if (!interaction.isCommand()) return;
    if (interaction.commandName !== 'search') return;
    if (interaction.options.getSubcommand() !== 'partnumber') return;

    const partnumber = interaction.options.getString('partnumber', true);

    const response = await searchByPatnumber({
        apiKey: MOUSER_API_TOKEN,
        mouserPartNumber: partnumber.trim(),
    });

    const text = [];

    text.push(`Encontrado ${response.SearchResults.NumberOfResult} resultados`);
    text.concat(
        response.SearchResults.Parts.map((product) => product.ProductDetailUrl),
    );

    await interaction.reply(text.join('\n'));
}
