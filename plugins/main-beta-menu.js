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
  'pattern': "betamenu",
  'desc': "menu the bot",
  'category': 'menu',
  'react': '📑',
  'filename': __filename
}, async (_0x27f345, _0x1a0ce6, _0xe20516, {
  from: _0x2b9e3c,
  quoted: _0x403e9b,
  body: _0x5d32ae,
  isCmd: _0x1d5ab6,
  command: _0xf6b6a6,
  args: _0x3f7d71,
  q: _0x41edb6,
  isGroup: _0x358e94,
  sender: _0x5674bd,
  senderNumber: _0x24a6df,
  botNumber2: _0xdec07d,
  botNumber: _0x5988bb,
  pushname: _0x31d9cd,
  isMe: _0x50a2ca,
  isOwner: _0x44b5b2,
  groupMetadata: _0x57f23e,
  groupName: _0x1250d6,
  participants: _0x1dae4c,
  groupAdmins: _0x331763,
  isBotAdmins: _0x40dfa3,
  isAdmins: _0x658688,
  reply: _0x2ede88
}) => {
  try {
    let _0x54ea60 = "╭━━━〔 *" + config.BOT_NAME + "* 〕━━━┈⊷\n\n┃★╭──────────────\n\n┃★│ Owner : *" + config.OWNER_NAME + "*\n\n┃★│ Baileys : *Multi Device*\n\n┃★│ Type : *NodeJs*\n\n┃★│ Platform : *Heroku*\n\n┃★│ Mode : *[" + config.MODE + "]*\n\n┃★│ Prifix : *[" + config.PREFIX + "]*\n\n┃★│ Version : *1.0.3 Bᴇᴛᴀ*\n\n┃★╰──────────────\n\n╰━━━━━━━━━━━━━━━┈⊷\n\n╭━━〔 *Menu List* 〕━━┈⊷\n\n┃◈╭─────────────·๏\n\n┃◈┃• ᴀɪᴍᴇɴᴜ\n\n┃◈┃• ᴀɴɪᴍᴇᴍᴇɴᴜ\n\n┃◈┃• ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ\n\n┃◈┃• ꜰᴜɴᴍᴇɴᴜ\n\n┃◈┃• ᴅʟᴍᴇɴᴜ\n\n┃◈┃• ʟɪsᴛᴍᴇɴᴜ\n\n┃◈┃• ᴍᴀɪɴᴍᴇɴᴜ\n\n┃◈┃• ɢʀᴏᴜᴘᴍᴇɴᴜ\n\n┃◈┃• ᴀʟʟᴍᴇɴᴜ\n\n┃◈┃• ᴏᴡɴᴇʀᴍᴇɴᴜ\n\n┃◈┃• ᴏᴛʜᴇʀᴍᴇɴᴜ\n\n┃◈┃• sᴜʙᴢᴇʀᴏᴍᴇɴᴜ\n\n┃◈┃• \n\n┃◈└───────────┈⊷\n\n╰──────────────┈⊷\n\n> SᴜʙZᴇʀᴏ W.A Bᴏᴛ";
    await _0x27f345.sendMessage(_0x2b9e3c, {
      'image': {
        'url': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg"
      },
      'caption': _0x54ea60,
      'contextInfo': {
        'mentionedJid': [_0xe20516.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "❄️『 𝐆𝐌𝐀𝐗 𝐌𝐃』❄",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x1a0ce6
    });
    await _0x27f345.sendMessage(_0x2b9e3c, {
      'audio': {
        'url': "https://github.com/Gmaxtech2024/GMAX-MD-DATABASE/raw/refs/heads/main/audios/subzero-menu.mp3"
      },
      'mimetype': "audio/mp4",
      'ptt': true
    }, {
      'quoted': _0x1a0ce6
    });
  } catch (_0x555527) {
    console.log(_0x555527);
    _0x2ede88('' + _0x555527);
  }
});
cmd({
  'pattern': "dlmenu",
  'desc': "menu the bot",
  'category': "menu",
  'react': "🗳️",
  'filename': __filename
}, async (_0x3c8209, _0x508e78, _0x26406b, {
  from: _0xbfb512,
  quoted: _0x1844c7,
  body: _0x3e7e03,
  isCmd: _0x39f5da,
  command: _0x11e9e1,
  args: _0x4a51be,
  q: _0x580835,
  isGroup: _0x3e2a7a,
  sender: _0x2cd6a7,
  senderNumber: _0x41aee3,
  botNumber2: _0x1ebbb3,
  botNumber: _0x2e9ef9,
  pushname: _0x3adb15,
  isMe: _0x5e4672,
  isOwner: _0x46af55,
  groupMetadata: _0x3a4ed0,
  groupName: _0x61bb74,
  participants: _0x15bb55,
  groupAdmins: _0x5342ba,
  isBotAdmins: _0x41b3d6,
  isAdmins: _0x57ced4,
  reply: _0x1c99a8
}) => {
  try {
    let _0x560e66 = "╭━━〔 *Download Menu* 〕━━┈⊷\n\n┃◈╭─────────────·๏\n\n┃◈┃• facebook\n\n┃◈┃• mediafire\n\n┃◈┃• tiktok\n\n┃◈┃• twitter\n\n┃◈┃• Insta\n\n┃◈┃• apk\n\n┃◈┃• img\n\n┃◈┃• spotify\n\n┃◈┃• play\n\n┃◈┃• play2\n\n┃◈┃• play3\n\n┃◈┃• tt2\n\n┃◈┃• audio\n\n┃◈┃• video\n\n┃◈┃• video2\n\n┃◈┃• ytmp3\n\n┃◈┃• ytmp4\n\n┃◈┃• song\n\n┃◈┃• darama\n\n┃◈┃• git\n\n┃◈┃• gdrive\n\n┃◈┃• smovie\n\n┃◈┃• baiscope \n\n┃◈┃• ginisilia \n\n┃◈└───────────┈⊷\n\n╰──────────────┈⊷\n\n> " + config.DESCRIPTION;
    await _0x3c8209.sendMessage(_0xbfb512, {
      'image': {
        'url': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg"
      },
      'caption': _0x560e66,
      'contextInfo': {
        'mentionedJid': [_0x26406b.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "❄️『 𝐆𝐌𝐀𝐗 𝐌𝐃 』❄",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x508e78
    });
  } catch (_0x369d89) {
    console.log(_0x369d89);
    _0x1c99a8('' + _0x369d89);
  }
});
cmd({
  'pattern': 'groupmenu',
  'desc': "menu the bot",
  'category': "menu",
  'react': '👥',
  'filename': __filename
}, async (_0x5ee2ef, _0x31fb7a, _0x5671eb, {
  from: _0x1dc4f9,
  quoted: _0x2c0180,
  body: _0x4e56a0,
  isCmd: _0x212c32,
  command: _0x50d66f,
  args: _0x5e8724,
  q: _0x59bfb1,
  isGroup: _0x4bffc4,
  sender: _0x1591d9,
  senderNumber: _0x143fc6,
  botNumber2: _0x3921d4,
  botNumber: _0x33f4fb,
  pushname: _0x59c4f2,
  isMe: _0x3fc691,
  isOwner: _0x25fcf5,
  groupMetadata: _0x2dd9e6,
  groupName: _0x5c236c,
  participants: _0x122903,
  groupAdmins: _0x403049,
  isBotAdmins: _0x41cdc2,
  isAdmins: _0x48d233,
  reply: _0xaec1f1
}) => {
  try {
    let _0x5c0ccb = "╭━━〔 *Group Menu* 〕━━┈⊷\n\n┃◈╭─────────────·๏\n\n┃◈┃• grouplink\n\n┃◈┃• kickall\n\n┃◈┃• kickall2\n\n┃◈┃• kickall3\n\n┃◈┃• add\n\n┃◈┃• remove\n\n┃◈┃• kick\n\n┃◈┃• promote \n\n┃◈┃• demote\n\n┃◈┃• dismiss \n\n┃◈┃• revoke\n\n┃◈┃• setgoodbye\n\n┃◈┃• setwelcome\n\n┃◈┃• delete \n\n┃◈┃• getpic\n\n┃◈┃• ginfo\n\n┃◈┃• delete \n\n┃◈┃• disappear on\n\n┃◈┃• disappear off\n\n┃◈┃• disappear 7D,24H\n\n┃◈┃• allreq\n\n┃◈┃• updategname\n\n┃◈┃• updategdesc\n\n┃◈┃• joinrequests\n\n┃◈┃• senddm\n\n┃◈┃• nikal\n\n┃◈┃• mute\n\n┃◈┃• unmute\n\n┃◈┃• lockgc\n\n┃◈┃• unlockgc\n\n┃◈┃• invite\n\n┃◈┃• tag\n\n┃◈┃• hidetag\n\n┃◈┃• tagall\n\n┃◈┃• tagadmins\n\n┃◈└───────────┈⊷\n\n╰──────────────┈⊷\n\n> " + config.DESCRIPTION;
    await _0x5ee2ef.sendMessage(_0x1dc4f9, {
      'image': {
        'url': 'https://i.ibb.co/6BMJmGY/mrfrankofc.jpg'
      },
      'caption': _0x5c0ccb,
      'contextInfo': {
        'mentionedJid': [_0x5671eb.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "❄️『 𝐆𝐌𝐀𝐗 𝐌𝐃 』❄",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x31fb7a
    });
  } catch (_0x514f84) {
    console.log(_0x514f84);
    _0xaec1f1('' + _0x514f84);
  }
});
cmd({
  'pattern': "funmenu",
  'desc': "menu the bot",
  'category': 'menu',
  'react': '☺',
  'filename': __filename
}, async (_0x4b2852, _0x4f55be, _0x2713ac, {
  from: _0x1bc3c8,
  quoted: _0xaddb1,
  body: _0x5e4ffe,
  isCmd: _0x3ba178,
  command: _0x5d059a,
  args: _0xa07bbc,
  q: _0x12d574,
  isGroup: _0x9df13d,
  sender: _0x2a7665,
  senderNumber: _0x23dfb2,
  botNumber2: _0x5dc9f5,
  botNumber: _0x4faec7,
  pushname: _0x5ecd03,
  isMe: _0x2b025c,
  isOwner: _0x7deac7,
  groupMetadata: _0x2d8089,
  groupName: _0x5d3c8d,
  participants: _0x49ce9e,
  groupAdmins: _0x59505b,
  isBotAdmins: _0x5b2fd8,
  isAdmins: _0x743a33,
  reply: _0x410043
}) => {
  try {
    let _0x387677 = "╭━━〔 *Fun Menu* 〕━━┈⊷\n\n┃◈╭─────────────·๏\n\n┃◈┃• insult\n\n┃◈┃• pickup\n\n┃◈┃• ship\n\n┃◈┃• character\n\n┃◈┃• hack\n\n┃◈┃• joke\n\n┃◈┃• hrt\n\n┃◈┃• hpy\n\n┃◈┃• syd\n\n┃◈┃• anger\n\n┃◈┃• shy\n\n┃◈┃• kiss\n\n┃◈┃• mon\n\n┃◈┃• cunfuzed\n\n┃◈┃• setpp\n\n┃◈┃• hand\n\n┃◈┃• nikal\n\n┃◈┃• hold\n\n┃◈┃• hug\n\n┃◈┃• nikal\n\n┃◈┃• hifi\n\n┃◈┃• poke\n\n┃◈└───────────┈⊷\n\n╰──────────────┈⊷\n\n> " + config.DESCRIPTION;
    await _0x4b2852.sendMessage(_0x1bc3c8, {
      'image': {
        'url': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg"
      },
      'caption': _0x387677,
      'contextInfo': {
        'mentionedJid': [_0x2713ac.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "❄️『 𝐆𝐌𝐀𝐗 𝐌𝐃 』❄",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x4f55be
    });
  } catch (_0x58d98a) {
    console.log(_0x58d98a);
    _0x410043('' + _0x58d98a);
  }
});
cmd({
  'pattern': "othermenu",
  'desc': "menu the bot",
  'category': 'menu',
  'react': '🤖',
  'filename': __filename
}, async (_0x16a087, _0x3a7134, _0x4e9c28, {
  from: _0x5300ad,
  quoted: _0x2260a2,
  body: _0x23589d,
  isCmd: _0x36a93f,
  command: _0x54fdce,
  args: _0x178cba,
  q: _0x44d357,
  isGroup: _0x3dd2c9,
  sender: _0x1102ff,
  senderNumber: _0x2e4487,
  botNumber2: _0xf75afc,
  botNumber: _0x332b13,
  pushname: _0x292bef,
  isMe: _0x4ecb2,
  isOwner: _0x16c8ed,
  groupMetadata: _0x530c16,
  groupName: _0x577fc1,
  participants: _0x44e451,
  groupAdmins: _0x7cb8a7,
  isBotAdmins: _0x48f42a,
  isAdmins: _0x2896b9,
  reply: _0x3b1fcf
}) => {
  try {
    let _0x542398 = "╭━━〔 *Other Menu* 〕━━┈⊷\n\n┃◈╭─────────────·๏\n\n┃◈┃• vv\n\n┃◈┃• pair\n\n┃◈┃• pair2\n\n┃◈┃• fact\n\n┃◈┃• fancy\n\n┃◈┃• define\n\n┃◈┃• news\n\n┃◈┃• movie\n\n┃◈┃• weather\n\n┃◈┃• srepo\n\n┃◈┃• insult\n\n┃◈┃• save\n\n┃◈┃• wikipedia\n\n┃◈┃• gpass\n\n┃◈┃• githubstalk\n\n┃◈┃• yts\n\n┃◈┃• ytv\n\n┃◈└───────────┈⊷\n\n╰──────────────┈⊷\n\n> " + config.DESCRIPTION;
    await _0x16a087.sendMessage(_0x5300ad, {
      'image': {
        'url': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg"
      },
      'caption': _0x542398,
      'contextInfo': {
        'mentionedJid': [_0x4e9c28.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "❄️『 𝐆𝐌𝐀𝐗 𝐌𝐃 』❄",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x3a7134
    });
  } catch (_0x11773d) {
    console.log(_0x11773d);
    _0x3b1fcf('' + _0x11773d);
  }
});
cmd({
  'pattern': "mainmenu",
  'desc': "menu the bot",
  'category': "menu",
  'react': '⚙️',
  'filename': __filename
}, async (_0x56d9d7, _0x3a8302, _0x19a4d0, {
  from: _0x575d7b,
  quoted: _0x20176e,
  body: _0x4d3aa4,
  isCmd: _0x140bc9,
  command: _0x26ccc7,
  args: _0xec6e90,
  q: _0x844d09,
  isGroup: _0x5048b9,
  sender: _0x32c27b,
  senderNumber: _0x4fcc71,
  botNumber2: _0x44af4b,
  botNumber: _0x347b76,
  pushname: _0x26a823,
  isMe: _0x5cf5ac,
  isOwner: _0x32444f,
  groupMetadata: _0x3b9a74,
  groupName: _0xcd3961,
  participants: _0x268e73,
  groupAdmins: _0x4d52e6,
  isBotAdmins: _0x12ee29,
  isAdmins: _0x222e5d,
  reply: _0x8fda85
}) => {
  try {
    let _0x3ae6e9 = "╭━━〔 *Main Menu* 〕━━┈⊷\n\n┃◈╭─────────────·๏\n\n┃◈┃• ping\n\n┃◈┃• live \n\n┃◈┃• alive\n\n┃◈┃• runtime\n\n┃◈┃• uptime \n\n┃◈┃• repo\n\n┃◈┃• owner\n\n┃◈┃• menu\n\n┃◈┃• menu2\n\n┃◈┃• restart\n\n┃◈└───────────┈⊷\n\n╰──────────────┈⊷\n\n> " + config.DESCRIPTION;
    await _0x56d9d7.sendMessage(_0x575d7b, {
      'image': {
        'url': 'https://i.ibb.co/6BMJmGY/mrfrankofc.jpg'
      },
      'caption': _0x3ae6e9,
      'contextInfo': {
        'mentionedJid': [_0x19a4d0.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "❄️『 𝐆𝐌𝐀𝐗 𝐌𝐃 』❄",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x3a8302
    });
  } catch (_0x4266cb) {
    console.log(_0x4266cb);
    _0x8fda85('' + _0x4266cb);
  }
});
cmd({
  'pattern': "ownermenu",
  'desc': "menu the bot",
  'category': 'menu',
  'react': '🔰',
  'filename': __filename
}, async (_0x124cae, _0x5cf1e8, _0x4e4e81, {
  from: _0x2311a9,
  quoted: _0x49f2f9,
  body: _0x30021e,
  isCmd: _0x724f3b,
  command: _0x530643,
  args: _0xe2548c,
  q: _0x413ad4,
  isGroup: _0x37f19d,
  sender: _0x2e8df,
  senderNumber: _0x3a5c74,
  botNumber2: _0x54b6bb,
  botNumber: _0x10cc19,
  pushname: _0x2e3d1e,
  isMe: _0x8b23b9,
  isOwner: _0x4a2534,
  groupMetadata: _0x168195,
  groupName: _0x2dde56,
  participants: _0x2f1b75,
  groupAdmins: _0x436ab8,
  isBotAdmins: _0x189d09,
  isAdmins: _0x22d9d2,
  reply: _0x277dd1
}) => {
  try {
    let _0x248977 = "╭━━〔 *Owner Menu* 〕━━┈⊷\n\n┃◈╭─────────────·๏\n\n┃◈┃• owner\n\n┃◈┃• menu\n\n┃◈┃• menu2\n\n┃◈┃• listcmd\n\n┃◈┃• allmenu\n\n┃◈┃• repo\n\n┃◈┃• block\n\n┃◈┃• unblock\n\n┃◈┃• fullpp\n\n┃◈┃• setpp\n\n┃◈┃• restart\n\n┃◈┃• shutdown\n\n┃◈┃• updatecmd\n\n┃◈┃• alive\n\n┃◈┃• ping \n\n┃◈┃• gjid\n\n┃◈┃• jid\n\n┃◈└───────────┈⊷\n\n╰──────────────┈⊷\n\n> " + config.DESCRIPTION;
    await _0x124cae.sendMessage(_0x2311a9, {
      'image': {
        'url': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg"
      },
      'caption': _0x248977,
      'contextInfo': {
        'mentionedJid': [_0x4e4e81.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "❄️『 𝐆𝐌𝐀𝐗 𝐌𝐃 』❄",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x5cf1e8
    });
  } catch (_0xaa0a5e) {
    console.log(_0xaa0a5e);
    _0x277dd1('' + _0xaa0a5e);
  }
});
cmd({
  'pattern': "convertmenu",
  'desc': "menu the bot",
  'category': 'menu',
  'react': '🔄',
  'filename': __filename
}, async (_0x466bf2, _0x51297b, _0x3677bd, {
  from: _0x3db10e,
  quoted: _0x53bb12,
  body: _0x4ce24c,
  isCmd: _0x335b3a,
  command: _0x20d556,
  args: _0x3f9d09,
  q: _0x4ec415,
  isGroup: _0x2999c7,
  sender: _0x5250d7,
  senderNumber: _0x2d922c,
  botNumber2: _0x24b37d,
  botNumber: _0x49e893,
  pushname: _0x437bb1,
  isMe: _0x570091,
  isOwner: _0x44d3e2,
  groupMetadata: _0x3e2db0,
  groupName: _0x355269,
  participants: _0x3425a9,
  groupAdmins: _0x3078a8,
  isBotAdmins: _0xadf78d,
  isAdmins: _0x51c4b3,
  reply: _0x10cf35
}) => {
  try {
    let _0x595c3a = "╭━━〔 *Convert Menu* 〕━━┈⊷\n\n┃◈╭─────────────·๏\n\n┃◈┃• sticker\n\n┃◈┃• sticker2\n\n┃◈┃• fancy\n\n┃◈┃• take\n\n┃◈┃• tomp3\n\n┃◈┃• tts\n\n┃◈┃• trt\n\n┃◈└───────────┈⊷\n\n╰──────────────┈⊷\n\n> " + config.DESCRIPTION;
    await _0x466bf2.sendMessage(_0x3db10e, {
      'image': {
        'url': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg"
      },
      'caption': _0x595c3a,
      'contextInfo': {
        'mentionedJid': [_0x3677bd.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "❄️『 𝐆𝐌𝐀𝐗 𝐌𝐃 』❄",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x51297b
    });
  } catch (_0x326045) {
    console.log(_0x326045);
    _0x10cf35('' + _0x326045);
  }
});
cmd({
  'pattern': "animemenu",
  'desc': "menu the bot",
  'category': "menu",
  'react': '🧚',
  'filename': __filename
}, async (_0x38a8e5, _0x5dd86e, _0x2b1cdc, {
  from: _0x227bea,
  quoted: _0x4cf869,
  body: _0xe22ff1,
  isCmd: _0x258670,
  command: _0x2da236,
  args: _0x27b667,
  q: _0x2104dc,
  isGroup: _0x552160,
  sender: _0x164ec5,
  senderNumber: _0x35c82f,
  botNumber2: _0xecb98d,
  botNumber: _0x3bfcaa,
  pushname: _0x3dca0f,
  isMe: _0x50e455,
  isOwner: _0x44695a,
  groupMetadata: _0x27418f,
  groupName: _0x522eae,
  participants: _0x46f57b,
  groupAdmins: _0x5c1511,
  isBotAdmins: _0x3620e0,
  isAdmins: _0x5127cf,
  reply: _0x2f0b71
}) => {
  try {
    let _0x38d204 = "╭━━〔 *Anime Menu* 〕━━┈⊷\n\n┃◈╭─────────────·๏\n\n┃◈┃• fack\n\n┃◈┃• dog\n\n┃◈┃• awoo\n\n┃◈┃• garl\n\n┃◈┃• waifu\n\n┃◈┃• neko\n\n┃◈┃• megnumin\n\n┃◈┃• neko\n\n┃◈┃• maid\n\n┃◈┃• loli\n\n┃◈┃• animegirl\n\n┃◈┃• animegirl\n\n┃◈┃• animegirl1\n\n┃◈┃• animegirl2\n\n┃◈┃• animegirl3\n\n┃◈┃• animegirl4\n\n┃◈┃• animegirl5\n\n┃◈┃• anime1\n\n┃◈┃• anime1\n\n┃◈┃• anime2\n\n┃◈┃• anime3\n\n┃◈┃• anime4\n\n┃◈┃• anime5\n\n┃◈┃• animenews\n\n┃◈┃• foxgirl\n\n┃◈┃• naruto\n\n┃◈└───────────┈⊷\n\n╰──────────────┈⊷\n\n> " + config.DESCRIPTION;
    await _0x38a8e5.sendMessage(_0x227bea, {
      'image': {
        'url': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg"
      },
      'caption': _0x38d204,
      'contextInfo': {
        'mentionedJid': [_0x2b1cdc.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "❄️『 𝐆𝐌𝐀𝐗 𝐌𝐃 』❄",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x5dd86e
    });
  } catch (_0x5b8ac8) {
    console.log(_0x5b8ac8);
    _0x2f0b71('' + _0x5b8ac8);
  }
});
cmd({
  'pattern': "aimenu",
  'desc': "menu the bot",
  'category': "menu",
  'react': '🤖',
  'filename': __filename
}, async (_0x223822, _0x5a0065, _0x3499ed, {
  from: _0x5b7e23,
  quoted: _0x4d42d6,
  body: _0x258fb1,
  isCmd: _0x2d6736,
  command: _0x20ad73,
  args: _0x5307e6,
  q: _0x28f15b,
  isGroup: _0x2d263a,
  sender: _0x12f4d3,
  senderNumber: _0x4af5fa,
  botNumber2: _0x19e02e,
  botNumber: _0x1f5dae,
  pushname: _0x176479,
  isMe: _0xb6b123,
  isOwner: _0x1a4cd5,
  groupMetadata: _0x1b7a62,
  groupName: _0x57a25d,
  participants: _0x26ef91,
  groupAdmins: _0x2cee4d,
  isBotAdmins: _0x50d5be,
  isAdmins: _0x11142c,
  reply: _0xafaa58
}) => {
  try {
    let _0x2f729d = "╭━━〔 *Ai Menu* 〕━━┈⊷\n\n┃◈╭─────────────·๏\n\n┃◈┃• ai\n\n┃◈┃• gpt\n\n┃◈┃• meta\n\n┃◈┃• blackbox\n\n┃◈┃• gpt4\n\n┃◈┃• bing\n\n┃◈┃• copilot\n\n┃◈└───────────┈⊷\n\n╰──────────────┈⊷\n\n> " + config.DESCRIPTION;
    await _0x223822.sendMessage(_0x5b7e23, {
      'image': {
        'url': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg"
      },
      'caption': _0x2f729d,
      'contextInfo': {
        'mentionedJid': [_0x3499ed.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "❄️『 𝐆𝐌𝐀𝐗 𝐌𝐃 』❄",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x5a0065
    });
  } catch (_0x2d0bf3) {
    console.log(_0x2d0bf3);
    _0xafaa58('' + _0x2d0bf3);
  }
});