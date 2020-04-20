const Discord = require("discord.js");
const client = new Discord.Client();
// const DBL = require("dblapi.js");
const token = process.env.DISCORD;
// const dbl = new DBL(token, client);

const general = '699309436019277945'
const dragomir_id_2 = '268447815426899968'
const rares_id  = '319172629548236800' /*'268355445117157376'*/
const chatRoomId = '700750599570063400'
const groovy = '613354794316202002'


const trapSongs = [
    'abi $scuze',
    '5gang sos',
    'lilpump esskeetit',
    'abi sarpe',
    '9ciori',
    'ian mili'
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on('message', async (msg) => {
        //Move mee
        if (msg.channel.id === general && msg.author.username === 'adi_random' && msg.content.match(new RegExp("[Yy]o+"))) {
            const channel = await client.channels.fetch('670707818327834655');

            msg.member.edit({
                channel
            }).catch(e => console.log(e))
        }

        if (msg.channel.id === general && msg.author.username === 'discpro' && msg.content.match(new RegExp("[Yy]o+"))) {
            console.log('hey')
            msg.member.edit({
                    mute: true
                }
            )
        }
        if (msg.channel.id === general && msg.content === "Taci in mm dragomire") {
            const user = await msg.guild.members.fetch(dragomir_id_2);
            user.edit({
                mute: true
            })
        }
    }
)

client.login(token);