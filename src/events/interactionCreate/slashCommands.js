const { EmbedBuilder } = require('discord.js');

const terminal = require('../../terminal');
const color = require('../../colors.json');
const config = require('../../config.json');

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        if (command.developer) {
            const userId = interaction.user.id;
            const isDeveloper = config.developer;

            if (!isDeveloper.includes(userId)) {
                const embed = new EmbedBuilder()
                    .setColor(color.danger)
                    .setDescription(`**Akses Ditolak!**\n\nPerintah ini hanya dapat digunakan oleh developer bot. Anda tidak memiliki izin yang diperlukan untuk menjalankan perintah ini. Jika Anda yakin ini adalah kesalahan, silakan hubungi developer bot untuk bantuan lebih lanjut.`);

                return interaction.reply({ embeds: [embed], ephemeral: true });
            }
        }

        try {
            await command.execute(interaction, client);
        } catch (error) {
            terminal.error(error);
            await interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true
            });
        }
    },
};
