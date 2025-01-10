const {Client, Interaction, ApplicationCommandOptionType, PermissionFlagsBits,} = require('discord.js');
const { embed_Ban } = require("./embeds/ban")
  
  module.exports = {
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
  
    callback: async (client, interaction) => {
      const targetUserId = interaction.options.get('target-user').value;
      const reason =
        interaction.options.get('reason')?.value || 'Razon sin definir';
  
      await interaction.deferReply();
  
      const targetUser = await interaction.guild.members.fetch(targetUserId);
  
      if (!targetUser) {
        await interaction.editReply("Usuario no encontrado en el servidor");
        return;
      }
  
      if (targetUser.id === interaction.guild.ownerId) {
        await interaction.editReply(
          "No puedes banear a ese usuario porque es el propietario del servidor."
        );
        return;
      }
  
      const targetUserRolePosition = targetUser.roles.highest.position; // Highest role of the target user
      const requestUserRolePosition = interaction.member.roles.highest.position; // Highest role of the user running the cmd
      const botRolePosition = interaction.guild.members.me.roles.highest.position; // Highest role of the bot
  
      if (targetUserRolePosition >= requestUserRolePosition) {
        await interaction.editReply(
          "No puedo banear a ese usuario porque tiene el mismo rol o un rol superior al tuyo."
        );
        return;
      }
  
      if (targetUserRolePosition >= botRolePosition) {
        await interaction.editReply(
          "No puedo banear a ese usuario porque tiene el mismo rol o un rol superior al mío."
        );
        return;
      }
  
      // Ban the targetUser
      try {
        await targetUser.ban({ reason });
        await interaction.editReply(
          `${targetUser} ha sido BANEADO del servidor\nRazón: ${reason}`
        );
      } catch (error) {
        console.log(`Ha habido un error baneando al usuario: ${error}`);
      }
    },
  
    name: 'ban',
    description: 'Banea al usuario del servidor',
    options: [
      {
        name: 'target-user',
        description: 'Usuario al que quieres banear',
        type: ApplicationCommandOptionType.Mentionable,
        required: true,
      },
      {
        name: 'reason',
        description: 'La razón del baneo',
        type: ApplicationCommandOptionType.String,
      },
    ],
    permissionsRequired: [PermissionFlagsBits.BanMembers],
    botPermissions: [PermissionFlagsBits.BanMembers],
  };