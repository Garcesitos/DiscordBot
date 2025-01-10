const { EmbedBuilder } = require('discord.js');
const { version } = require('../../../package.json');
const config = require('../../../config.json');

module.exports = {
    name: 'botinfo',
    description: 'Muestra la información del bot',

    callback: async (client, interaction) => {
        try {
            await interaction.deferReply();

            // Simular un error de prueba
            // throw new Error("Este es un error de ejemplo");
            const embed = new EmbedBuilder()
            embed.setAuthor({
                name: `${client.user.username}`,
                url: null,
              });
              embed.setTitle("Información acerca del Bot");
              embed.setURL(null);
              embed.setDescription(`Este BOT ha sido creado única y exclusivamente para la moderación de este servidor de Discord.\n\n\n· __*Desarrollador*__ :  [Garcesitos](https://instagram.com/agarces03_)\n· Versión del BOT : ${version}`);
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

            // Use interaction.editReply to send or edit the initial reply
            await interaction.editReply({ embeds: [embed] });
        } catch (error) {
            // Manejar el error e imprimir detalles
            console.error(`Ha ocurrido un error en el comando 'botinfo': ${error.message}`);

            // Agregar detalles adicionales como la ruta del archivo y el número de línea
            if (error.stack) {
                // Obtener la información de la pila (stack trace)
                const stackLines = error.stack.split('\n');
                // La segunda línea suele contener la información de la llamada, que incluye la ruta del archivo y el número de línea
                if (stackLines.length > 1) {
                    console.error(`Detalles: ${stackLines[1].trim()}`);
                }
            }
            // Responder al usuario indicando que ha ocurrido un error
            await interaction.followUp('¡Oops! Ha ocurrido un error al ejecutar el comando.');
        }
    },
};


/*

embed.setAuthor({
    name: `${client.user.username}`,
    url: "Información acerca del Bot",
  })
  embed.setTitle("Información acerca del Bot")
  embed.setURL("Proximamente")
  embed.setDescription(`Este BOT ha sido creado única y exclusivamente para la moderación de este servidor de Discord.\n\n\n· __*Desarrollador*__ :  [Garcesitos](https://instagram.com/agarces03_)\n· Versión del BOT : ${version}`)
  embed.addFields(
    {
      name: "",
      value: "*Ejecuta: ``/comandos`` para ver todos los comandos disponibles*",
      inline: true
    },
  )
  embed.setThumbnail("https://cdn.discordapp.com/avatars/1176559168291868743/c04d76227fcff9ad6d65ae9666c4526d.webp?size=80")
  embed.setColor("#f50000")
  embed.setFooter({
    text: "ElGarridos",
    iconURL: "https://cdn.discordapp.com/icons/1080246697470464101/4d430d4348a4e47e292a5c033eb3e65d.webp?size=240",
    })
  embed.setTimestamp();

  */