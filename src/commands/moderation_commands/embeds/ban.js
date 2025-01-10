const {EmbedBuilder } = require('discord.js');

/* const embed_Ban = new EmbedBuilder()
embed_Ban.setAuthor({
    name: `${client.user.username}`,
    url: "https://example.com",
  });
  embed_Ban.setTitle("Información acerca del Bot");
  embed_Ban.setURL("https://example.com");
  embed_Ban.setDescription(`Este BOT ha sido creado única y exclusivamente para la moderación de este servidor de Discord.\n\n\n· __*Desarrollador*__ :  [Garcesitos](https://instagram.com/agarces03_)\n· Versión del BOT : ${version}`);
  embed_Ban.addFields(
    {
      name: "   ",
      value: "· *Ejecuta: ``/comandos`` para ver todos los comandos disponibles*",
      inline: false
    },
  );
  embed_Ban.setThumbnail("https://cdn.discordapp.com/avatars/1176559168291868743/c04d76227fcff9ad6d65ae9666c4526d.webp?size=80");
  embed_Ban.setColor("#f50000");
  embed.setFooter({
    text: "ElGarridos",
    iconURL: "https://cdn.discordapp.com/icons/1080246697470464101/4d430d4348a4e47e292a5c033eb3e65d.webp?size=240",
  });
  embed.setTimestamp();

  const embed_Ban_Error = new EmbedBuilder
  embed.setAuthor({
    name: `${client.user.username}`,
    url: "https://example.com",
  });
  embed.setTitle("Información acerca del Bot");
  embed.setURL("https://example.com");
  embed.setDescription(`Este BOT ha sido creado única y exclusivamente para la moderación de este servidor de Discord.\n\n\n· __*Desarrollador*__ :  [Garcesitos](https://instagram.com/agarces03_)\n· Versión del BOT : ${version}`);
  embed.addFields(
    {
      name: "   ",
      value: "· *Ejecuta: ``/comandos`` para ver todos los comandos disponibles*",
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

  const embed_Ban_userError = new EmbedBuilder()
embed.setAuthor({
    name: `${client.user.username}`,
    url: "https://example.com",
  });
  embed.setTitle("Información acerca del Bot");
  embed.setURL("https://example.com");
  embed.setDescription(`Este BOT ha sido creado única y exclusivamente para la moderación de este servidor de Discord.\n\n\n· __*Desarrollador*__ :  [Garcesitos](https://instagram.com/agarces03_)\n· Versión del BOT : ${version}`);
  embed.addFields(
    {
      name: "   ",
      value: "· *Ejecuta: ``/comandos`` para ver todos los comandos disponibles*",
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

  const embed_Ban_ownerError = new EmbedBuilder()
embed.setAuthor({
    name: `${client.user.username}`,
    url: "https://example.com",
  });
  embed.setTitle("Información acerca del Bot");
  embed.setURL("https://example.com");
  embed.setDescription(`Este BOT ha sido creado única y exclusivamente para la moderación de este servidor de Discord.\n\n\n· __*Desarrollador*__ :  [Garcesitos](https://instagram.com/agarces03_)\n· Versión del BOT : ${version}`);
  embed.addFields(
    {
      name: "   ",
      value: "· *Ejecuta: ``/comandos`` para ver todos los comandos disponibles*",
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

  const embed_Ban_roleError = new EmbedBuilder()
embed.setAuthor({
    name: `${client.user.username}`,
    url: "https://example.com",
  });
  embed.setTitle("");
  embed.setURL("https://example.com");
  embed.setDescription(`Este BOT ha sido creado única y exclusivamente para la moderación de este servidor de Discord.\n\n\n· __*Desarrollador*__ :  [Garcesitos](https://instagram.com/agarces03_)\n· Versión del BOT : ${version}`);
  embed.addFields(
    {
      name: "   ",
      value: "· *Ejecuta: ``/comandos`` para ver todos los comandos disponibles*",
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


  const embed_Ban_roleBotError = new EmbedBuilder()
  embed.setAuthor({
      name: `${client.user.username}`,
      url: "https://example.com",
    });
    embed.setTitle("Información acerca del Bot");
    embed.setURL("https://example.com");
    embed.setDescription(`Este BOT ha sido creado única y exclusivamente para la moderación de este servidor de Discord.\n\n\n· __*Desarrollador*__ :  [Garcesitos](https://instagram.com/agarces03_)\n· Versión del BOT : ${version}`);
    embed.addFields(
      {
        name: "   ",
        value: "· *Ejecuta: ``/comandos`` para ver todos los comandos disponibles*",
        inline: false
      },
    );
    embed.setThumbnail("https://cdn.discordapp.com/avatars/1176559168291868743/c04d76227fcff9ad6d65ae9666c4526d.webp?size=80");
    embed.setColor("#f50000");
    embed.setFooter({
      text: "ElGarridos",
      iconURL: "https://cdn.discordapp.com/icons/1080246697470464101/4d430d4348a4e47e292a5c033eb3e65d.webp?size=240",
    });
    embed.setTimestamp(); */