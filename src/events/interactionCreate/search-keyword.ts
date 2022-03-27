import { Interaction } from 'discord.js';
import { MOUSER_API_TOKEN } from '../../config/environment';
import { searchByKeyword } from '../../MouserApi/v1/SearchApi';

export default async function (interaction: Interaction) {
    if (!interaction.isCommand()) return;
    if (interaction.commandName !== 'search') return;
    if (interaction.options.getSubcommand() !== 'keyword') return;

    const keyword = interaction.options.getString('keyword', true);

    const response = await searchByKeyword({
        apiKey: MOUSER_API_TOKEN,
        keyword: keyword.trim(),
    });

    const text = [];

    text.push(`Encontrado ${response.SearchResults.NumberOfResult} resultados`);
    text.concat(
        response.SearchResults.Parts.map((product) => product.ProductDetailUrl),
    );

    await interaction.reply(text.join('\n'));
}
