import {
    DMChannel,
    Message,
    NewsChannel,
    PartialDMChannel,
    TextChannel,
    ThreadChannel,
} from 'discord.js';

export default async function (message: Message) {
    const channel =
        (message.channel as TextChannel | ThreadChannel | NewsChannel).name ||
        (message.channel as DMChannel | PartialDMChannel).recipient.username;

    const username = message.author.username;
    const msg = message.content;

    console.log(`[#${channel}] ${username}: ${msg}`);
}
