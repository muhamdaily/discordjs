const terminal = require('../terminal');
const path = require('path');
const fs = require('fs');

module.exports = (client) => {
    client.handleEvents = async () => {
        terminal.info('Starting to load events...');
        try {
            const eventFolders = fs.readdirSync('./src/events');
            for (const folder of eventFolders) {
                const eventFiles = fs.readdirSync(`./src/events/${folder}`).filter(file => file.endsWith('.js'));
                for (const file of eventFiles) {
                    const event = require(`../events/${folder}/${file}`);
                    if (event.once) {
                        client.once(event.name, (...args) => event.execute(...args, client));
                    } else {
                        client.on(event.name, (...args) => event.execute(...args, client));
                    }
                }
            }
            terminal.success('Successfully loaded all events!');
        } catch (error) {
            terminal.error(error);
        }
    };
};
