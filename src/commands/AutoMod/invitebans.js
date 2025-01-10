const {Client, Interaction, PermissionFlagsBits,} = require('discord.js');
const config = require('../../../config.json');

module.exports = {
    callback: async (client, interaction) => {
        if (message.author.client) return; // Ignorar mensajes de otros bots

  // Verificar si el mensaje contiene una invitación
  if (message.content.includes('https://discord.gg') || message.content.includes('discord.com/invite')) {
    // Banear al usuario
    try {
      await message.member.ban({ reason: 'Envió una invitación al servidor' });
      message.channel.send(`${message.author.tag} ha sido baneado por enviar una invitación.`);
    } catch (error) {
      console.error(`Error al banear al usuario: ${error}`);
    }
  }

    },


    permissionsRequired: [PermissionFlagsBits.BanMembers],
    botPermissions: [PermissionFlagsBits.BanMembers],
}
