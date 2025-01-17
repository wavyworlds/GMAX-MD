function hi() {
  console.log("Hello World!");
}
hi();
const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': 'about',
  'alias': ["MrGmax"],
  'react': "👨‍💻",
  'desc': "get owner dec",
  'category': 'main',
  'filename': __filename
}, async (_0x21216e, _0x480b28, _0x53189c, {
  from: _0x8056b6,
  quoted: _0x264f3e,
  body: _0x477337,
  isCmd: _0x1804e3,
  command: _0x31db6f,
  args: _0x2a6e89,
  q: _0x1383b9,
  isGroup: _0x454f38,
  sender: _0x49afd3,
  senderNumber: _0x1ca475,
  botNumber2: _0x346b51,
  botNumber: _0x1e5492,
  pushname: _0x384db6,
  isMe: _0x1ddec9,
  isOwner: _0x325fd2,
  groupMetadata: _0x39a783,
  groupName: _0x45307d,
  participants: _0x2a6b1e,
  groupAdmins: _0x55d906,
  isBotAdmins: _0x259af0,
  isAdmins: _0x1af830,
  reply: _0x541e17
}) => {
  try {
    let _0x269f8e = "━━━━━━━━━━━━━━━━━━━━━━━━\n\n*👋 HELLO " + _0x384db6 + "*\n\n *INTRODUCING GMAX MD*\n\nA WhatsApp Based Multi Device Bot Created By Sir Gmax from Tanzania.\nIt sole purpose is to remove the burden or cost of purchasing data bundles to download Songs, Apps, Videos & Movies by using WhatsApp bundles.\n\n *For More Visit*https://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x/\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n⛓️ *SOURCE CODE* \n> https://github.com/Gmaxtech2024/GMAX-MD\n\n🛠️ *FOLLOW OWNER*\n> https://github.com/Gmaxtech2024/\n\n👨‍💻 *OWNER'S WHATSAPP*\n> https://wa.me/message/MA4OMKT7KOQYA1/?text=Gmax+Fan+Here\n\n👩‍🍼 *2ND DEVELOPER* \n> https://wa.me/255753853473/?text=Gmax+Fan+Here\n\n📌 *SUPPORT CHANNEL* \n> https://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x\n\n🔗 *FOLLOW INSTAGRAM* \n> https://instagram.com/nyingi_official/\n\n👨‍💻 *FOLLOW OWNER* \n> https://youtube.com/gmaxtv1661/\n\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n *[*RELEASE DATE* - *15 January 2025*]*\n \n> *MR GMAX*\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n";
    await _0x21216e.sendMessage(_0x8056b6, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x269f8e
    }, {
      'quoted': _0x480b28
    });
  } catch (_0x139026) {
    console.log(_0x139026);
    _0x541e17('' + _0x139026);
  }
});
