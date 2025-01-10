const { Client, Interaction, ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');
const ms = require('ms');

module.exports = {
  /**
   *
   * @param {Client} client
   * @param {Interaction} interaction
   */

  callback: async (client, interaction) => {
    const mentionable = interaction.options.get('target-user').value;
    const duration = interaction.options.get('duration').value; // 1d, 1 day, 1s 5s, 5m
    const reason = interaction.options.get('reason')?.value || 'Razón sin definir';

    await interaction.deferReply();

    const targetUser = await interaction.guild.members.fetch(mentionable);
    if (!targetUser) {
      await interaction.editReply("Usuario no encontrado en el servidor.");
      return;
    }

    if (targetUser.user.bot) {
      await interaction.editReply("No puedo suspender a otro bot.");
      return;
    }

    const msDuration = ms(duration);
    if (isNaN(msDuration)) {
      await interaction.editReply('Porfavor proporciona una duración válida.');
      return;
    }

    if (msDuration < 5000 || msDuration > 2.419e9) {
      await interaction.editReply('La duración de la suspensión no puede ser inferior a 5 segundos ni superior a 28 días.');
      return;
    }

    const targetUserRolePosition = targetUser.roles.highest.position; // Highest role of the target user
    const requestUserRolePosition = interaction.member.roles.highest.position; // Highest role of the user running the cmd
    const botRolePosition = interaction.guild.members.me.roles.highest.position; // Highest role of the bot

    if (targetUserRolePosition >= requestUserRolePosition) {
      await interaction.editReply("No puede suspender a ese usuario porque tiene el mismo rol o un rol superior al suyo.");
      return;
    }

    if (targetUserRolePosition >= botRolePosition) {
      await interaction.editReply("No puedo suspender a ese usuario porque tiene el mismo rol o un rol superior que yo.");
      return;
    }

    // Timeout the user
    try {
      const { default: prettyMs } = await import('pretty-ms');

      if (targetUser.isCommunicationDisabled()) {
        await targetUser.timeout(msDuration, reason);
        await interaction.editReply(`La suspensión de ${targetUser} ha sido actualizada a ${prettyMs(msDuration, { verbose: true })}\nRazón: ${reason}`);
        return;
      }

      await targetUser.timeout(msDuration, reason);
      await interaction.editReply(`${targetUser} ha sido suspendido por ${prettyMs(msDuration, { verbose: true })}.\nRazón: ${reason}`);
    } catch (error) {
      console.log(`Ha habido un error con la suspensión: ${error}`);
    }
  },

  name: 'timeout',
  description: 'Suspender/silenciar a un usuario',
  options: [
    {
      name: 'target-user',
      description: 'El usuario que se desee suspender',
      type: ApplicationCommandOptionType.Mentionable,
      required: true,
    },
    {
      name: 'duration',
      description: 'Duración de la suspensión (30m, 1h, 1 day).',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: 'reason',
      description: 'Razón de la suspensión.',
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionsRequired: [PermissionFlagsBits.MuteMembers],
  botPermissions: [PermissionFlagsBits.MuteMembers],
};