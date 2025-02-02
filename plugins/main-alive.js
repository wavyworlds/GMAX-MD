function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd,
  commands
} = require('../command');
const os = require('os');
const {
  runtime
} = require("../lib/functions");
cmd({
  'pattern': "alive",
  'alias': ['status', "runtime", "uptime"],
  'desc': "Check uptime and system status",
  'category': "main",
  'react': '📟',
  'filename': __filename
}, async (_0x41fdca, _0x4452d9, _0x4c213f, {
  from: _0x24d99b,
  quoted: _0x33a77a,
  body: _0x1fd20f,
  isCmd: _0x5b3437,
  command: _0x575fa3,
  args: _0x4b3e13,
  q: _0x142fce,
  isGroup: _0x4f0d7b,
  sender: _0xef73a9,
  senderNumber: _0x556dcd,
  botNumber2: _0x122dd9,
  botNumber: _0x294404,
  pushname: _0x40f485,
  isMe: _0x47ba9c,
  isOwner: _0x20ed13,
  groupMetadata: _0x36d695,
  groupName: _0x53c692,
  participants: _0x38cf4f,
  groupAdmins: _0x301142,
  isBotAdmins: _0x4b4e84,
  isAdmins: _0x111719,
  reply: _0x2c7dc6
}) => {
  try {
    const _0x54a5ab = "╭━━〔 *GMAX MD* 〕━━┈⊷\n\n┃◈╭─────────────·๏\n\n┃◈┃• *⏳Uptime*:  " + runtime(process.uptime()) + " \n\n┃◈┃• *📟 Ram usage*: " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + (os.totalmem() / 0x400 / 0x400).toFixed(0x2) + "MB\n\n┃◈┃• *⚙️ HostName*: " + os.hostname() + "\n\n┃◈┃• *👨‍💻 Owner*: Sir Gmax\n\n┃◈┃• *📂 Version*: 1.0.3\n\n┃◈└───────────┈⊷\n\n╰──────────────┈⊷\n\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢᴍᴀx ᴍᴅ";
    await _0x41fdca.sendMessage(_0x24d99b, {
      'image': {
        'url': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg"
      },
      'caption': _0x54a5ab,
      'contextInfo': {
        'mentionedJid': [_0x4c213f.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363220399229536@newsletter",
          'newsletterName': "『 𝐆𝐌𝐀𝐗 𝐌𝐃 』",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x4452d9
    });
  } catch (_0x454bf1) {
    console.error("Error in alive command:", _0x454bf1);
    _0x2c7dc6("An error occurred: " + _0x454bf1.message);
  }
});
