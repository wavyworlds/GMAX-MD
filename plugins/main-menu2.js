



























































































































const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "allmenu",
    alias: "menu2",
    desc: "menu the bot",
    category: "menu2",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭───◈🇹🇿 *${config.BOT_NAME}* ◈───╮
│ 
│ ✦ *Owner Pr:* Mr Gmax
│ ✦ *Prefix:* [${config.PREFIX}]
│ ✦ *Toleo:* 1.0.3 BETA
│ 
╞════════◈🇹🇿◈════════╡

╭─◈📥 *Download* ◈─
│├─ 🌐 facebook
│├─ 📦 mediafire
│├─ 🎵 tiktok
│├─ 🐦 twitter
│├─ 📸 Insta
│├─ 📲 apk
│├─ 🖼️ img
│├─ 🎥 tt2
│├─ 🔗 git
│├─ 🎶 spotify
│├─ ▶️ play
│├─ ▶️ play2
│├─ ▶️ play3
│├─ 🔊 audio
│├─ 📹 video
│├─ 📹 video2
│├─ 🎵 ytmp3
│├─ 📺 ytmp4
│├─ 🎵 song
│├─ 🎭 darama
│├─ 🗂️ gdrive
│├─ 🎬 smovie
│├─ 🔍 baiscope
│├─ 🌍 ginisilia
╰─◈📥──────────────◈─

╭─◈👥 *Group* ◈─
│├─ 🔗 grouplink
│├─ 🚫 kickall
│├─ 🚫 kickall2
│├─ 🚫 kickall3
│├─ ➕ add
│├─ ➖ remove
│├─ 👢 kick
│├─ ⬆️ promote
│├─ ⬇️ demote
│├─ 🚪 dismiss
│├─ 🔄 revoke
│├─ 👋 setgoodbye
│├─ 🎉 setwelcome
│├─ 🗑️ delete
│├─ 📷 getpic
│├─ ℹ️ ginfo
│├─ ⏳ disappear on
│├─ ⏳ disappear off
│├─ ⏳ disappear 7D,24H
│├─ 📨 allreq
│├─ ✏️ updategname
│├─ 📝 updategdesc
│├─ 🙋 joinrequests
│├─ 📩 senddm
│├─ 👢 nikal
│├─ 🔇 mute
│├─ 🔊 unmute
│├─ 🔒 lockgc
│├─ 🔓 unlockgc
│├─ 📨 invite
│├─ 🏷️ tag
│├─ 🕶️ hidetag
│├─ 📢 tagall
│├─ 👥 tagadmins
╰─◈👥──────────────◈─

╭─◈👑 *Owner* ◈─
│├─ 👑 owner
│├─ 📜 menu
│├─ 📜 menu2
│├─ 🎥 vv
│├─ 📋 listcmd
│├─ 📖 allmenu
│├─ 📦 repo
│├─ 🚫 block
│├─ ✅ unblock
│├─ 🖼️ fullpp
│├─ 🖼️ setpp
│├─ 🔄 restart
│├─ ⏹️ shutdown
│├─ 🔄 updatecmd
│├─ 💖 alive
│├─ 🏓 ping
│├─ 🆔 gjid
│├─ 🆔 jid
╰─◈👑──────────────◈─

╭─◈🎮 *Fun* ◈─
│├─ 😠 insult
│├─ 💻 hack
│├─ 💞 ship
│├─ 🎭 character
│├─ 💬 pickup
│├─ 😂 joke
│├─ ❤️ hrt
│├─ 😊 hpy
│├─ 😢 syd
│├─ 😡 anger
│├─ 😳 shy
│├─ 😘 kiss
│├─ 🐵 mon
│├─ 😕 cunfuzed
│├─ ✋ hand
│├─ 🤝 hold
│├─ 🤗 hug
│├─ ✨ hifi
│├─ 👉 poke
╰─◈🎮──────────────◈─

╭─◈🔄 *Convert* ◈─
│├─ 🎨 sticker
│├─ 🖼️ sticker2
│├─ ✨ fancy
│├─ 🖼️ take
│├─ 🔊 tomp3
│├─ 📢 tts
│├─ 🌐 trt
╰─◈🔄──────────────◈─

╭─◈🤖 *AI* ◈─
│├─ 🤖 ai
│├─ 🤖 gpt
│├─ ℹ️ meta
│├─ 🖤 blackbox
│├─ 4️⃣ gpt4
│├─ 🔍 bing
│├─ ✈️ copilot
╰─◈🤖──────────────◈─

╭─◈🌸 *Anime* ◈─
│├─ 🤥 fack
│├─ ✅ truth
│├─ 😈 dare
│├─ 🐕 dog
│├─ 🐺 awoo
│├─ 👧 garl
│├─ 👰 waifu
│├─ 🐱 neko
│├─ ❓ megnumin
│├─ 👩🍳 maid
│├─ 👧 loli
│├─ 🎀 animegirl
│├─ 🎀 animegirl1
│├─ 🎀 animegirl2
│├─ 🎀 animegirl3
│├─ 🎀 animegirl4
│├─ 🎀 animegirl5
│├─ 🎞️ anime1
│├─ 🎞️ anime2
│├─ 🎞️ anime3
│├─ 🎞️ anime4
│├─ 🎞️ anime5
│├─ 📰 animenews
│├─ 🦊 foxgirl
│├─ 🍥 naruto
╰─◈🌸──────────────◈─

╭─◈🛠️ *Zana* ◈─
│├─ 📚 fact
│├─ 🖥️ cpp
│├─ 🔄 rw
│├─ 👫 pair
│├─ 👬 pair2
│├─ 🖋️ logo <text>
│├─ 📖 define
│├─ 📰 news
│├─ 🎥 movie
│├─ ☀️ weather
│├─ 📦 srepo
│├─ 💾 save
│├─ 🌐 wikipedia
│├─ 🔑 gpass
│├─ 👀 githubstalk
│├─ 🔍 yts
│├─ 📹 ytv
╰─◈🛠️──────────────◈─

╰───◈🇹🇿 *${config.DESCRIPTION}* ◈───╯
▞▚▚▚ *Gmax v${config.VERSION}* ▞▚▚▚
𓆩🇹🇿𓆪 Imetengenezwa na Mr Gmax 𓆩🇹🇿𓆪
`;

await conn.sendMessage(
           from,
            {
                image: { url: `https://i.ibb.co/6BMJmGY/mrfrankofc.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363220399229536@newsletter',
                        newsletterName: '𝔊𝔪𝔞𝔵 м∂ ω.α ϐοτ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/qxhk49.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
