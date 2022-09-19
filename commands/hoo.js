const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("yah")
    .setDescription("Replies with hoo!"),
  async execute(interaction) {
    return interaction.reply("hoo!");
  },
};
