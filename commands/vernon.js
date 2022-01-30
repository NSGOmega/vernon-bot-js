const { MessageEmbed } = require('discord.js');

let idCounter = 0;


var num = 1;

function pad(n){
    var string = "" + num;
    var pad = "0000";
    n = pad.substring(0, pad.length - string.length) + string;
    num++;
    return n;
}
    
let list = [
    { link: "https://vernonbot.xyz/vernon-img/0.jpeg", version: "Carat", worth: 200, era: "24h", quality: "Epic", title: `[⭐️⭐️⭐️] 24h Carat Vernon`, id: pad(1) },
    { link: "http://vernonbot.xyz/vernon-img/0.jpeg", version: "Carat", worth: 200, era: "24h", quality: "Epic", title: `[⭐️⭐️⭐️] 24h Carat Vernon`, id: pad(2) },
    
    
];

console.log(list[0].id)
console.log(list[1].id)



module.exports = {
  category: 'Fun',
  description: 'Replies with a picture of vernon', // Required for slash commands

  slash: false, // Create both a slash and legacy command
  testOnly: false, // Only register a slash command for the testing guilds

  callback: ({ message, text, }) => {

    const user = message.author
    const link = "https://lh6.googleusercontent.com/WvI2UHXrbMDapxo2FexbzqBBF30RcGg7PxhU-BRo7Sl7S4D7Kze6fk0ni6uuhKBMURaWWbpUUyeTZXPN7A_58Rne0kBhWPRypkirFn3MrkldDS_ZLvnw_INVhsbd-Ba1Sm5faZ805g"


    let commonEmbed = new MessageEmbed()
      .setAuthor({ name: `${user.username} Just unboxed: `, iconURL: user.avatarURL(), url: list[0].link })
      .setTitle(` **${list[0].title}** `)
      .setURL(list[0].link)


      .addFields(
        { name: "ID: ", value: "`" + list[0].id + "`" , inline: true },
        { name: "Worth: ", value: "`" + list[0].worth + "🥕`", inline: false }
      

      )
      .addFields(
          { name: 'Quality: ', value: "`" + list[0].quality + "`", inline: true },
          { name: 'Era: ', value: "`" + list[0].era + "`" , inline: true},
          { name: 'Version: ', value: "`" + list[0].version + "`" , inline: true},    
      )


    
      .setImage(list[0].link)
      .setColor("RED")
      .setTimestamp()
	    .setFooter({ text: 'Unboxed with !vernon', iconURL: message.author.avatarURL(), url: list[0].link });



      message.channel.send({embeds: [commonEmbed]}).then(async embedMessage => {
        await embedMessage.react('💖');
        await embedMessage.react('🗑');
    });


    

  },
}