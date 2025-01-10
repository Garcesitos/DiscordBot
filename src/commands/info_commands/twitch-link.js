const {EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'twitch-link',
    description: 'Tutotial para enlazar discord con tu suscripción del canal',

  callback: async(client, interaction) =>{
    await interaction.deferReply();
    const embed = new EmbedBuilder()
    .setTitle(`test`)
    .setColor('#ff0051')
    .setDescription(`¡Bienvenido a nuestro servidor!`)
    interaction.reply({embeds: [embed]})

  },
};