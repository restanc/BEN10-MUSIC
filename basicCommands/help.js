const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'yardım',
  aliases: ['yardim', 'yrd'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Benimi çağırdın? yardıma geldim.',
        iconURL: 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
        {
          name: '▶️  Klasik',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
        // Music commands category
        {
          name: '▶️  Muzik',
          value: '`start`, `stop`, `history`,`volume`,`pause`,`resume`,`247`',
          inline: true,
        },
        //fun category
        {
          name: '▶️  Eğlence',
          value: ' `ascii`, `joke`, `meme`, `roll`',
          inline: true,
        },
        //image category
        {
          name: '▶️  Fotoğraf',
          value: '`randomkedi`, `randomkopek`',
          inline: true,
        },
        //anime category
        {
          name: '▶️  Anime',
          value: '`<prefix>animecommands`',
          inline: true,
        },
        // Utility commands category
        
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1170652474563117138/1224660177039396876/MULTI_MUSIC_v1.5.png?ex=661e4cab&is=660bd7ab&hm=f7a542462fabaf9c1530ece5aa72597cff3ac032876bba46df5ddba7e122ea99&`)
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
