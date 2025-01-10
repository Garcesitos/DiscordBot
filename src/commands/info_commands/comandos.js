const {EmbedBuilder } = require('discord.js');

module.exports = {
    callback: async (client, interaction) => {
        // Obtén el ID del rol del usuario que envía el mensaje
        const roleId = '1174102880895115404'; // ID del rol común
        const roleIdWithMoreCommands = '1174102852927496354'; // ID del rol con más permisos
        const comandos = require ('../../index.js');

        // Verifica si el usuario tiene el rol con más comandos
        const Higher_Role = interaction.member.roles.cache.has(roleIdWithMoreCommands);

        // Crea el embed base
        const embed = new EmbedBuilder()
        embed.setAuthor({
          name: `${client.user.username}`,
          url: "https://example.com",
        });
        embed.setTitle("Lista de los **Comandos** disponibles");
        embed.setURL(null);
        embed.setDescription("· ``/horarios``: *Horario de los directos*  \n· ``/redes``: *Todas las redes sociales en las que me uedes seguir!*\n· ``/setup``: *Los componentes y perifericos que utilizo para stremear*\n· ``/sub``: *Si estás suscrito al canal de twitch se te otorgará un rol especial*\n· ``/twitch-link``: *Tutorial para enlazar discord con tu suscripción del canal*\n· ``/prime``: *Tutotial para conseguir una suscripción gratuita*\n· ``/botinfo``: *Información sobre Garridos Moderator*");
        embed.addFields(
          {
            name: "algo",
            value: "*Ejecuta: ``/comandos`` para ver todos los comandos disponibles*",
            inline: false
          },
        );
        embed.setThumbnail("https://cdn.discordapp.com/avatars/1176559168291868743/c04d76227fcff9ad6d65ae9666c4526d.webp?size=80");
        embed.setColor("#f50000");
        embed.setFooter({
          text: "ElGarridos",
          iconURL: "https://cdn.discordapp.com/icons/1080246697470464101/4d430d4348a4e47e292a5c033eb3e65d.webp?size=240",
        });
        embed.setTimestamp();

        // Responde con el embed
        await interaction.reply({ embeds: [embed] });
    },

    name: 'comandos',
    description: 'Muestra la lista de comandos disponibles',
};