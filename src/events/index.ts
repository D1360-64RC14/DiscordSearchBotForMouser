import { client } from '../config/discordClient';

import chatOutput from './messageCreate/chat-output';
import clientReady from './ready/client-ready';
import pingPong from './interactionCreate/ping-pong';
import registerCommands from './ready/register-commands';

client.on('messageCreate', chatOutput);

client.on('ready', clientReady);
client.on('ready', registerCommands);

client.on('interactionCreate', pingPong);
