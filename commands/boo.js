const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pra")
    .setDescription("Replies with boo!"),
  async excute(interaction) {
    await interaction.reply("boo!");
  },
};
