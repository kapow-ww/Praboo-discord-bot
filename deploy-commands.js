const { SlashCommandBuilder, Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");
const dotenv = require("dotenv");

dotenv.config();
const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
  new SlashCommandBuilder()
    .setName("speak")
    .setDescription("Replies with your input!")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The input to echo back")
        .setRequired(true)
    ),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

//create commands
rest
  .put(Routes.applicationCommands(process.env.CLIENT_ID), {
    body: commands,
  })
  .then((data) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch(console.error);

// delete all commands
// rest
//   .put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] })
//   .then(() => console.log("Successfully deleted all guild commands."))
//   .catch(console.error);

// rest
//   .delete(Routes.applicationGuildCommand(clientId, guildId, "commandId"))
//   .then(() => console.log("Successfully deleted guild command"))
//   .catch(console.error);
