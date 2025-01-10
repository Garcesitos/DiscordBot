const {Client, Interaction, ApplicationCommandOptionType, PermissionFlagsBits,} = require('discord.js');
  
  module.exports = {
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
  
    callback: async (client, interaction) => {
      const targetUserId = interaction.options.get('target-user').value;
      const reason =
        interaction.options.get('reason')?.value || 'No reason provided';
  
      await interaction.deferReply();
  
      const targetUser = await interaction.guild.members.fetch(targetUserId);
  
      if (!targetUser) {
        await interaction.editReply("Usuario no encontrado en el servidor.");
        return;
      }
  
      if (targetUser.id === interaction.guild.ownerId) {
        await interaction.editReply(
          "No puedes expulsar a este usuario, es el dueño del servidor."
        );
        return;
      }
  
      const targetUserRolePosition = targetUser.roles.highest.position; // Highest role of the target user
      const requestUserRolePosition = interaction.member.roles.highest.position; // Highest role of the user running the cmd
      const botRolePosition = interaction.guild.members.me.roles.highest.position; // Highest role of the bot
  
      if (targetUserRolePosition >= requestUserRolePosition) {
        await interaction.editReply(
          "No puedo expulsar a ese usuario porque tiene el mismo rol o un rol superior al tuyo."
        );
        return;
      }
  
      if (targetUserRolePosition >= botRolePosition) {
        await interaction.editReply(
          "No puedo expulsar a ese usuario porque tiene el mismo rol o un rol superior al mío."
        );
        return;
      }
  
      // Kick the targetUser
      try {
        await targetUser.kick({ reason });
        await interaction.editReply(
          `${targetUser} ha sido expulsado del servidor\nRazón: ${reason}`
        );
      } catch (error) {
        console.log(`Ha habido un error baneando al usuario: ${error}`);
      }
    },
  
    name: 'kick',
    description: 'Expulsa a un usuario del servidor',
    options: [
      {
        name: 'target-user',
        description: 'Usuario que quieras expulsar.',
        type: ApplicationCommandOptionType.Mentionable,
        required: true,
      },
      {
        name: 'reason',
        description: 'La razón de la expulsión',
        type: ApplicationCommandOptionType.String,
      },
    ],
    permissionsRequired: [PermissionFlagsBits.KickMembers],
    botPermissions: [PermissionFlagsBits.KickMembers],
  };