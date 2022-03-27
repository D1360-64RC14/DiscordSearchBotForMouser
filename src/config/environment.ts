import DotEnv from 'dotenv';

DotEnv.config({
    path: __dirname + '/../../.env',
    debug: true,
    override: true,
});

export const DISCORD_BOT_TOKEN = process.env['DISCORD_BOT_TOKEN']!;
export const MOUSER_API_TOKEN = process.env['MOUSER_API_TOKEN']!;
export const DISCORD_BOT_ID = process.env['DISCORD_BOT_ID']!;

const mandatory_envs = {
    DISCORD_BOT_TOKEN,
    MOUSER_API_TOKEN,
    DISCORD_BOT_ID,
};

for (const [key, value] of Object.entries(mandatory_envs)) {
    if (value === null || value?.trim() === '' || value === undefined) {
        throw TypeError(`Variável de ambiente ${key} obrigatória!`);
    }
}
