const Discord = require("discord.js");
const client = new Discord.Client();
// const DBL = require("dblapi.js");
const token = "NzAxNTIxMjQ3MTk2MDIwNzY4.Xp1eCQ.ZWyw6lnYxX9DMiOfOgsz5zGbk-s"
// const dbl = new DBL(token, client);

const general = '699309436019277945'
const dragomir_id = '268447815426899968'

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
            const user = await msg.guild.members.fetch(dragomir_id);
            user.edit({
                mute: true
            })
        }
    }
)

client.login(token);