// Definir las funciones
const {
  Client,
  GatewayIntentBits,
  Partials,
  EmbedBuilder,
  ActivityType,
  Collection,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  OverwriteType,
} = require("discord.js");
const fs = require('fs');
const config = require("../config.json");
const eventHandler = require('./handlers/eventHandler');
const client = new Client({
    intents: [
      GatewayIntentBits.AutoModerationConfiguration,
      GatewayIntentBits.AutoModerationExecution,
      GatewayIntentBits.DirectMessageReactions,
      GatewayIntentBits.DirectMessageTyping,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.GuildEmojisAndStickers,
      GatewayIntentBits.GuildIntegrations,
      GatewayIntentBits.GuildInvites,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildMessageTyping,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildModeration,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildScheduledEvents,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildWebhooks,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.MessageContent,
    ],
    partials: [
      Partials.Channel,
      Partials.GuildMember,
      Partials.GuildScheduledEvent,
      Partials.Message,
      Partials.Reaction,
      Partials.ThreadMember,
      Partials.User,
    ],
});
eventHandler(client);

// Ban Invitaciones

client.on('message', (message) => {
  // Verifica si el mensaje contiene una invitación de Discord
  if (message.content.includes('discord.gg/') || message.content.includes('discord.com/invite/')) {
    // Banea al usuario que envió el mensaje
    message.guild.members.ban(message.author, { reason: 'Envió una invitación de Discord.' })
      .then((user) => {
        console.log(`Usuario baneado: ${user.tag}`);
      })
      .catch((error) => {
        console.error(`Error al banear al usuario: ${error}`);
      });
  }
});

// Estado del bot 

// Función para escribir el número de miembros en el archivo cada 20 segundos
function writeMemberCountToFile() {
  setInterval(() => {
    const memberCount = client.guilds.cache.get('616736543234850848').members.cache.size; // Obtiene el número de miembros del servidor
    fs.writeFileSync('guildMembers.txt', `${memberCount}`, 'utf8'); // Guarda la información en el archivo cada 20 segundos
    console.log(`Número de miembros guardado: ${memberCount}`);
  }, 20000); // Ejecuta cada 20 segundos
}

// Función para leer el archivo guildMembers.txt cada 30 segundos y retornar su contenido
function readGuildMembersFile() {
  try {
    // Lee el archivo de forma síncrona y devuelve su contenido como una cadena
    const data = fs.readFileSync('guildMembers.txt', 'utf8');
    console.log('Contenido de guildMembers.txt:', data); // Imprime el contenido en la consola
    return data; // Devuelve el contenido del archivo
  } catch (error) {
    console.error('Error al leer el archivo guildMembers.txt:', error);
    return 'Error al leer el archivo'; // Retorna un mensaje de error en caso de falla
  }
}

// Llama a la función para comenzar a escribir el número de miembros cada 20 segundos
writeMemberCountToFile();

// Estado del bot
let status = [
  {
    name: 'Cargando...', // Nombre temporal para la actividad
    type: ActivityType.Watching,
  },
  /*{
    name: 'ElGarridos',
    type: ActivityType.Streaming,
    url: 'https://www.twitch.tv/elgarridos',
  },*/
  
  /*{
    name: 'Custom Status 1',
  },*/
  
  /*{
    name: 'Custom Status 3',
    type: ActivityType.Listening,
  },*/
];

setInterval(() => {
  // Actualizar el estado con la información del archivo
  const fileData = readGuildMembersFile(); // Lee el contenido actualizado del archivo
  status[0].name = `a ${fileData} usuarios `; // Asigna el contenido del archivo como el nombre de la actividad

  let random = Math.floor(Math.random() * status.length);
  client.user.setActivity(status[random]); // Cambia la actividad del bot

  console.log('Estado actualizado:', status[random]); // Imprime el nuevo estado en la consola
}, 30000); // Actualiza cada 30 segundos


// Rol usuario y mensaje de Bienvenida para nuevos miembros
const rolID = '1174102788402331691'
client.on('guildMemberAdd', (member) => {
  console.log(`Nuevo usuario: ${member.user.tag}`);
  asignarRol(member);
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
  console.log(`Usuario actualizado: ${newMember.user.tag}`);
  asignarRol(newMember);
});
client.on('guildMemberAdd', member => {
  const avatarURL = member.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
  const embed = new EmbedBuilder()
  .setTitle(`${member.displayName}`)
  .setColor('#ff0051')
  .setDescription(`¡Bienvenido a la comunidad!`)
  .setFooter({ text: member.displayName })
  .setImage(`${avatarURL}`)
  .setThumbnail("https://imgur.com/QAhwCVN.jpg")
  client.guilds.cache.get('616736543234850848').channels.cache.get('1176223853471617085').send({ embeds: [embed] });
})
function asignarRol(member) {
  const rol = member.guild.roles.cache.get(rolID);
  if (rol) {
    if (!member.roles.cache.has(rolID)) {
      member.roles.add(rol).then(() => {
        console.log(`Se asignó el rol ${rol.name} a ${member.user.tag}`);
      }).catch((error) => {
        console.error(`Error al asignar el rol: ${error.message}`);
      });
    } else {
      console.log(`${member.user.tag} ya tiene el rol ${rol.name}`);
    }
  } else {
    console.error(`El rol con ID ${rolID} no se encontró en el servidor.`);
  }
}



client.on('messageCreate', message => {
  // Check if the message starts with the command '$load'
  if (message.content.startsWith('$load')) {
    // Obtén el número de miembros del servidor
    const memberCount = message.guild.members.cache.size;

    // Guarda la información en el archivo guildMembers.txt
    fs.writeFileSync('guildMembers.txt', `a ${memberCount} usuarios`, 'utf8');

    // Envía la respuesta al canal de texto
    message.channel.send(`The server has ${memberCount} members.`);
  }
});

writeMemberCountToFile();
client.login(config.TOKEN);