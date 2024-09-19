const { EmbedBuilder } = require('discord.js');

const color = require('../../colors.json');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction) return;
        if (!interaction.isChatInputCommand()) return;

        const guildID = process.env.guildID;
        const logChannel = process.env.logChannel;

        var messageGuild = await client.guilds.fetch(guildID);
        var channels = await messageGuild.channels.fetch(logChannel);

        var command = interaction;
        var guild = interaction.guild;
        var user = interaction.user;
        var channel = interaction.channel;

        const icon = client.user.displayAvatarURL({ dynamic: true });

        const embed = new EmbedBuilder()
            .setColor(color.primary)
            .setTitle('☘️ Command Logs')
            .setDescription(`**${user.globalName}** (\`${user.id}\`) used command \`${command}\``)
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'Guild', value: `* **${guild.name}** (\`${guild.id}\`)` },
                { name: 'Channel', value: `* **${channel.name}** (\`${channel.id}\`)` }
            )
            .setFooter({ text: client.user.username, iconURL: icon })
            .setTimestamp()

        await channels.send({ embeds: [embed] });
    }
}
