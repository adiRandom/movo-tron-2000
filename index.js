const Discord = require("discord.js");
const client = new Discord.Client();
// const DBL = require("dblapi.js");
const token = "NzAxNTIxMjQ3MTk2MDIwNzY4.XpyvFw.gbYcrtwLCRflfPgE9wwT4Pe4W7U"
// const dbl = new DBL(token, client);

client.on('message', async (msg) => {
    if (msg.channel.id === '699309436019277945' && msg.author.username === 'adi_random' && msg.content.match(new RegExp("[Yy]o+"))) {
        const channel = await client.channels.fetch('670707818327834655');
        msg.member.edit({
            channel
        }).catch(e=>console.log(e))
    }
})

client.login(token);