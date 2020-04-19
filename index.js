const Discord = require("discord.js");
const client = new Discord.Client();
// const DBL = require("dblapi.js");
const token = "NzAxNTIxMjQ3MTk2MDIwNzY4.XpyvFw.gbYcrtwLCRflfPgE9wwT4Pe4W7U"
// const dbl = new DBL(token, client);

const general =

    client.on('message', async (msg) => {
            //Move mee
            if (msg.channel.id === general && msg.author.username === 'adi_random' && msg.content.match(new RegExp("[Yy]o+"))) {
                const channel = await client.channels.fetch('670707818327834655');
                msg.member.edit({
                    channel
                }).catch(e => console.log(e))
            }

            if (msg.channel.id === general && msg.author.username === 'discpro' && msg.content.match(new RegExp("[Yy]o+"))) {
                msg.member.edit({
                        mute: true
                    }
                )
            }
            if (msg.channel.id === general && msg.content === "Taci in mm dragomire") {
                console.log(client.users);
            }
        }
    )

client.login(token);