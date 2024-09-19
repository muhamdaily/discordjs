<p align="center">
    <a href="https://github.com/muhamdaily/discordjs" target="_blank">
        <img src="https://raw.githubusercontent.com/muhamdaily/assets/29cfa5fdbe0868697cd29e12b748607d8a3c5223/djs.svg" alt="Logo">
    </a>
</p>

<div align="center">

# DiscordJS Kit

The Slash Command Package is our base package for the discord.js v14 bot. Use this package if you are trying to build a Discord bot with the latest version.

![GitHub repo size](https://img.shields.io/github/repo-size/muhamdaily/discordjs)
![GitHub contributors](https://img.shields.io/github/contributors/muhamdaily/discordjs)
![GitHub stars](https://img.shields.io/github/stars/muhamdaily/discordjs?style=social)
![GitHub forks](https://img.shields.io/github/forks/muhamdaily/discordjs?style=social)

</div>

## Main Features

### Slash Commands
The package supports Discord Slash Commands. Slash Commands are a way to interact with your bot by typing a "/" followed by a command, providing a streamlined and intuitive user experience.

### Prefix Commands
In addition to Slash Commands, the package also supports traditional Prefix Commands. These are commands that are triggered by a specific prefix followed by the command name.

## Requirements
- NodeJS `v18.11.0` or higher
- Code Editor (Visual Studio Code, Sublime Text, Notepad)

## Installation
To use **SlashCommandPackage**, follow these steps:

1. Clone the repository using the command below in the terminal.
    ```bash
    git clone https://github.com/muhamdaily/discordjs.git
    ```

2. Open the terminal in the `SlashCommandPackage` folder and run the following command:
    ```bash
    npm install
    ```

3. Open the file `.env.example`, copy all its contents, and paste them into a new file called `.env`. Fill in all the required sections in the `.env` file.

4. Alternatively, you can create a `.env` file by running the command:
    ```bash
    cp .env.example .env
    ```
5. Configure `src/config.json` to your liking. This file contains the configuration for the bot.
    ```json
    {
        "developer": [
            "MASUKKAN ID DEVELOPER DISINI", // use comma (,) to separate the ID
        ]
    }
    ```

6. Copy the following command to run the bot:
    ```bash
    npm run start
    ```
    This command will run the `src/index.js` file using **nodemon**.

## Contribute to SlashCommandPackage
To contribute to **SlashCommandPackage**, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make changes and commit: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create a pull request.

Or see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors
Thanks to the following people who have contributed to this project:

- [@muhamdaily](https://github.com/muhamdaily) 📖

## Contact
If you want to contact me, please send an email via <muhammadmauribi@gmail.com>.

## License
This SlashCommandPackage repository is open-source software licensed under the [MIT License](LICENSE).