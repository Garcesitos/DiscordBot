const {SlashCommandBuilder} = require('discord.js');
const { EmbedBuilder } = require('discord.js');

  module.exports = {
    data: new SlashCommandBuilder()
    .setName('clearchat')
    .setDescription('elimina los mensajes de un canal')
    .addIntegerOption((option) => {
        return option
        .setName('cantidad')
        .setDescription('cantidad de mensajes a eliminar (1-99)')
        .setRequired(true)
    }),

      async execute (client, interaction) {
        if (!interaction.member.permission.has('MANAGE_MESSAGES')) return interaction.reply({content: "No tienes permiso para usar este comando"})
        if (!interaction.guild.me.permission.has('MANAGE_MESSAGES')) return interaction.reply({content: "No tengo permiso para usar este comando"})
    
        let cantidad = interaction.options.getInteger('cantidad')

        if(isNaN(cantidad || cantidad < 1)) { // si la cantidad es invalida, devolver el mensaje >>
            return interaction.reply({content: "Especifica una cantidad de mensajes a eliminar (1-99)", ephemeral: true})
        }
        if(parseInt(cantidad) > 99 ) { // si la cantidad supera 99, devovler mensaje >>
            return interaction.reply({content: "Cantidad inválida, porfavor introduce una cantidad entre 1 y 99", ephemeral: true})

        } else {
            try {
                let { size } = await interaction.channel.bulkDelete(cantidad) // recoge la información sobre la cantidad de mensajes a eliminar >>
            await interaction.reply({content: `Eliminados ${size} mensajes del canal ${channel}`})
            } catch(e) { // si el mensaje tiene más de 14 días, devolver mensaje >>
                console.log(e)
                interaction.reply({content: 'No puedo eliminar mensajes posteriores a 14 días.', ephemeral: true})
            }
        }
    }
    };