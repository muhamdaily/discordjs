const terminal = require('../../terminal');

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.author.bot) return;
        if (!message.content.startsWith(`${process.env.prefix}`)) return;

        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.prefixCommands.get(commandName) || client.prefixCommands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;

        terminal.info(`${message.author.username} (${message.author.id}) | ${message.guild.name} (${message.guild.id}) > [ ${message.content} ]`);

        try {
            await command.execute(message, { args, argsArray: args });
        } catch (error) {
            terminal.error(error.stack);
            await message.reply({
                content: 'There was an error while executing this command!'
            });
        }
    },
};
