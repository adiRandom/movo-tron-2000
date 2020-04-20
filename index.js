const Discord = require("discord.js");
const client = new Discord.Client();
// const DBL = require("dblapi.js");
const token = process.env.DISCORD;
// const dbl = new DBL(token, client);

const ytdl = require('ytdl-core');

const general = '699309436019277945'
const dragomir_id_2 = '268447815426899968'
const rares_id = '319172629548236800'
const eu_id = '268355445117157376'
const chatRoomId = '700750599570063400'
const groovy = '613354794316202002'
const ciprian_id = '288962672131702785'

let botDispatcher;


const trapSongs = [
    'https://www.youtube.com/watch?v=gST0ZPYpk4E',
    'https://www.youtube.com/watch?v=Brdva8bRNDg',
    'https://www.youtube.com/watch?v=DPxL7dO5XPc',
    'https://www.youtube.com/watch?v=RnAtb6mvqM4',
    'https://www.youtube.com/watch?v=HyxgyyOE_AI',
    'https://www.youtube.com/watch?v=Jw6xpt80P1E'
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
            await user.edit({
                mute: true
            })
        }

        if (msg.content === "Taci")
            botDispatcher.destroy();
        if (msg.content === 'Mars') {
            const channel = await client.channels.fetch(chatRoomId);
            const conn = await channel.leave();
        }
    }
)

client.on('voiceStateUpdate', async (oldState, newState) => {
    if (newState.id === eu_id && newState.mute)
        newState.setMute(false);

    //Rares troll
    if (newState.id === rares_id && newState.channelID === chatRoomId) {
        const channel = await client.channels.fetch(chatRoomId);
        const conn = await channel.join();
        botDispatcher = conn.play(ytdl(trapSongs[getRandomInt(0, 5)], {filter: 'audioonly'}))
    }

    if (newState.id === eu_id && newState.channelID === chatRoomId) {
        const channel = await client.channels.fetch(chatRoomId);
        const conn = await channel.join();
        botDispatcher = conn.play('./pascu.mp3')
    }

    if (newState.id === ciprian_id && newState.channelID === chatRoomId) {
        const channel = await client.channels.fetch(chatRoomId);
        const conn = await channel.join();
        botDispatcher = conn.play('./ciprian.ogg')
    }

})

// Din ora in ora
schedule.scheduleJob('15 * * * *', async () => {
    const channel = await client.channels.fetch(chatRoomId);
    const conn = await channel.join();
    botDispatcher = conn.play('./ciprian.ogg')
});

client.login(token);