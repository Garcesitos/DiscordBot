const {EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'setup',
    description: 'Los componentes y perifericos que utilizo para streamear',

  callback: async(client, interaction) =>{
    await interaction.deferReply();
    const embed = new EmbedBuilder()
    .setTitle(`test`)
    .setColor('#ff0051')
    .setDescription(`¡Bienvenido a nuestro servidor!`)
    interaction.reply({embeds: [embed]})

  },
};