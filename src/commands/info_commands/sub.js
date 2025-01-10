const {EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'sub',
    description: 'Si estás subscrito al canal de twitch se te otorgará un rol especial',

  callback: async(client, interaction) =>{
    await interaction.deferReply();
    const embed = new EmbedBuilder()
    .setTitle(`test`)
    .setColor('#ff0051')
    .setDescription(`¡Bienvenido a nuestro servidor!`)
    interaction.reply({embeds: [embed]})

  },
};