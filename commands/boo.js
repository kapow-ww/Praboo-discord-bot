const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pra")
    .setDescription("Replies with boo!"),
  async execute(interaction) {
    return interaction.reply("boo!");
  },
};
