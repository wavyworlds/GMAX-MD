function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "repo",
  'alias': ['sc', "script", "info"],
  'desc': "Info about the bot repository",
  'category': "main",
  'react': "⚡",
  'filename': __filename
}, async (_0x50c93b, _0x176970, _0x38c197, {
  from: _0x55f885,
  quoted: _0x1bf640,
  body: _0x252e3c,
  isCmd: _0x5f2acc,
  command: _0x46d73c,
  args: _0xe5cab8,
  q: _0x568ecc,
  isGroup: _0x213d36,
  sender: _0x43b55e,
  senderNumber: _0x20d8ad,
  botNumber2: _0x1e0b1d,
  botNumber: _0x47a3ba,
  pushname: _0x3446c5,
  isMe: _0x3ac925,
  isOwner: _0x43d632,
  groupMetadata: _0x2d9e2f,
  groupName: _0x210bad,
  participants: _0x595d09,
  groupAdmins: _0x14269f,
  isBotAdmins: _0x4a7fe3,
  isAdmins: _0xbf6a0c,
  reply: _0x206e6c
}) => {
  try {
    await _0x50c93b.sendMessage(_0x55f885, {
      'image': {
        'url': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg"
      },
      'caption': "*Hello There GMAX W.A BOT User! 😄👋* \n\n> Simple, Icy, Cold  & Rich Loaded Bot With Amazing Features, SubZero WhatsApp Bot. ❄️\n\n*Thanks for using GMAX MD🌹🫶* \n\n> Don't forget to star & fork the repo🌟🍴\n\nhttps://github.com/Gmaxtech2024/GMAX-MD",
      'contextInfo': {
        'mentionedJid': [_0x38c197.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363220399229536@newsletter',
          'newsletterName': "『 ɢᴍᴀx ᴍᴅ 』",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x176970
    });
    await _0x50c93b.sendMessage(_0x55f885, {
      'audio': {
        'url': 'https://files.catbox.moe/6780pv.mp3'
      },
      'mimetype': "audio/mp4",
      'ptt': true
    }, {
      'quoted': _0x176970
    });
  } catch (_0x3ef7d6) {
    console.log(_0x3ef7d6);
    _0x206e6c('' + _0x3ef7d6);
  }
});
