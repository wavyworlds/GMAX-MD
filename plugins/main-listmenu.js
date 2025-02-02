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
  'pattern': 'list',
  'alias': ['listcmd', 'listmenu'],
  'desc': "menu the bot",
  'category': "menu",
  'react': '📃',
  'filename': __filename
}, async (_0x49347a, _0x3309c7, _0x12497b, {
  from: _0x5cbab0,
  quoted: _0x51a5d4,
  body: _0x4db089,
  isCmd: _0x1560a4,
  command: _0x4882a4,
  args: _0x505633,
  q: _0x2b4729,
  isGroup: _0x1592e7,
  sender: _0x16265c,
  senderNumber: _0xacf703,
  botNumber2: _0x4dc37a,
  botNumber: _0x3982ec,
  pushname: _0xe9ba59,
  isMe: _0x17aecd,
  isOwner: _0x463ba6,
  groupMetadata: _0x122d0c,
  groupName: _0x5bf21a,
  participants: _0x5135af,
  groupAdmins: _0x1c4b3a,
  isBotAdmins: _0x1cbc35,
  isAdmins: _0xd6d15c,
  reply: _0x165349
}) => {
  try {
    let _0x9819bc = "╭━❮ *DOWNLOAD CMD* ❯━┈⊷\n┃▸\n┃▸📄 COMMAND: .play\n┃▸❕ Download Audio from yt\n┃▸ \n┃▸📄 COMMAND: .song\n┃▸❕ Download song from yt\n┃▸ \n┃▸📄 COMMAND: .apk\n┃▸❕ Download apk from playstore\n┃▸ \n┃▸📄 COMMAND: .video\n┃▸❕ Download video from yt\n┃▸ \n┃▸📄 COMMAND: .fb\n┃▸❕ Download  video from fb\n┃▸ \n┃▸📄 COMMAND: .tk\n┃▸❕ Download video from tiktok\n┃▸ \n┃▸📄 COMMAND: .ig\n┃▸❕ Download video from ig\n┃▸ \n┃▸📄 COMMAND: .gdrive\n┃▸❕ Download drive files\n┃▸ \n┃▸📄 COMMAND: .twitter\n┃▸❕ Download video from Twitter\n┃▸\n┃▸📄 COMMAND: .img\n┃▸❕ Download image\n┃▸\n┃▸📄 COMMAND: .darama\n┃▸❕ Download full episode video\n┃▸\n┃▸📄 COMMAND: .play2\n┃▸❕ Download Audio from yt\n┃▸ \n┃▸📄 COMMAND: .video2\n┃▸❕ Download video from yt\n┃▸ \n┃▸📄 COMMAND: .baiscope\n┃▸❕ Download video from baiscope\n┃▸ \n┃▸📄 COMMAND: .mfire\n┃▸❕ Download mediafire files\n╰━━━━━━━━━━━━⪼ \n\n╭━❮ *ANMIE CMD* ❯━┈⊷\n┃▸\n┃▸📄 COMMAND: .yts\n┃▸❕ Serch videos from yt\n┃▸\n┃▸📄 COMMAND: .king\n┃▸❕ get king about \n┃▸\n┃▸📄 COMMAND: .dog\n┃▸❕ get random dog imgs\n┃▸\n┃▸📄 COMMAND: .anime \n┃▸❕ get anime pics\n┃▸\n┃▸📄 COMMAND: .animegirl \n┃▸❕ get animegirl pics\n┃▸\n┃▸📄 COMMAND: .loli\n┃▸❕ get romantic anime pics\n╰━━━━━━━━━━━━⪼  \n\n╭━❮‍ *INFO CMD* ❯━┈⊷\n┃▸\n┃▸📄 COMMAND: .alive\n┃▸❕ Check online or not\n┃▸  \n┃▸📄 COMMAND: .ping\n┃▸❕ Check bot speed\n┃▸  \n┃▸📄 COMMAND: .menu\n┃▸❕ Nero main menu\n┃▸\n┃▸📄 COMMAND: .menu2\n┃▸❕ Nero main menu2\n┃▸ \n┃▸📄 COMMAND: .ai\n┃▸❕ chat with ai bot\n┃▸\n┃▸📄 COMMAND: .system\n┃▸❕ check bot systems\n┃▸\n┃▸📄 COMMAND: .owner\n┃▸❕ get owner info\n┃▸ \n┃▸📄 COMMAND: .status\n┃▸❕ check bot runtime\n┃▸\n┃▸📄 COMMAND: .about \n┃▸❕ get about bot \n┃▸\n┃▸📄 COMMAND: .list \n┃▸❕ get bot command list\n┃▸\n┃▸📄 COMMAND: .script \n┃▸❕ get bot repository \n╰━━━━━━━━━━━━⪼\n\n╭━❮ *OTHER CMD* ❯━┈⊷\n┃▸\n┃▸📄 COMMAND: .joke \n┃▸❕ Get Rendom joke \n┃▸ \n┃▸📄 COMMAND: .fact\n┃▸❕ Get Rendom fact\n┃▸\n┃▸📄 COMMAND: .githubstalk \n┃▸❕ Get github data any user\n┃▸ \n┃▸📄 COMMAND: .gpass\n┃▸❕ Get a strong password \n┃▸\n┃▸📄 COMMAND: .hack\n┃▸❕ prank with friends \n┃▸\n┃▸📄 COMMAND: .srepo \n┃▸❕ serch repository \n┃▸\n┃▸📄 COMMAND: .define \n┃▸❕ serch any words\n╰━━━━━━━━━━━━⪼\n\n╭━❮ *GROUP CMD* ❯━┈⊷\n┃▸\n┃▸📄 COMMAND: .mute\n┃▸❕ Mute group\n┃▸\n┃▸📄 COMMAND: .unmute\n┃▸❕ Unmute group\n┃▸\n┃▸📄 COMMAND: .left\n┃▸❕ left group\n┃▸\n┃▸📄 COMMAND: .jid\n┃▸❕ group jid\n┃▸\n┃▸📄 COMMAND: .remove\n┃▸❕ remove member from group\n┃▸\n┃▸📄 COMMAND: .delete \n┃▸❕ remove sms from group \n┃▸\n┃▸📄 COMMAND: .add\n┃▸❕ add members in group \n┃▸\n┃▸📄 COMMAND: .kick\n┃▸❕ kick any user \n┃▸\n┃▸📄 COMMAND: .kickall\n┃▸❕ remove all members from group\n┃▸\n┃▸📄 COMMAND: .setgoodbye\n┃▸❕ set member leave sms\n┃▸\n┃▸📄 COMMAND: .setwelcome \n┃▸❕ set member welcome sms\n┃▸\n┃▸📄 COMMAND: promote \n┃▸❕ make group admin\n┃▸\n┃▸📄 COMMAND: .demote \n┃▸❕ dissmis any admin \n┃▸\n┃▸📄 COMMAND: .tagall\n┃▸❕ mention group all members\n┃▸\n┃▸📄 COMMAND: .getpic\n┃▸❕ get group profile\n┃▸\n┃▸📄 COMMAND: .invite \n┃▸❕ get group invite link\n┃▸\n┃▸📄 COMMAND: .revoke \n┃▸❕ reset group link\n┃▸\n┃▸📄 COMMAND: .joinrequests\n┃▸❕ cheack group panding members\n┃▸\n┃▸📄 COMMAND: .allreq\n┃▸❕ add group panding members \n┃▸\n┃▸📄 COMMAND: .lockgc\n┃▸❕ lock group private\n┃▸\n┃▸📄 COMMAND: .unlockgc\n┃▸❕ unlock group all\n┃▸\n┃▸📄 COMMAND: .leave \n┃▸❕ left any group \n┃▸\n┃▸📄 COMMAND: .updategname\n┃▸❕ set group name\n┃▸\n┃▸📄 COMMAND: .updategdesc\n┃▸❕ set group description \n┃▸\n┃▸📄 COMMAND: .joim\n┃▸❕ join invite link \n┃▸\n┃▸📄 COMMAND: .hidetag\n┃▸❕ mention any user hide\n┃▸\n┃▸📄 COMMAND: .ginfo\n┃▸❕ get group information \n┃▸\n┃▸📄 COMMAND: .disappear on\n┃▸❕ on disappear sms in group \n┃▸\n┃▸📄 COMMAND: .disappear off\n┃▸❕ off disappear sms in group \n┃▸\n┃▸📄 COMMAND: .senddm\n┃▸❕ send disappear sms in group \n┃▸\n┃▸📄 COMMAND: .disappear 7d 24h 90d\n┃▸❕ set time to disappear sms\n╰━━━━━━━━━━━━⪼\n\n╭━❮ *OWNER CMD* ❯━┈⊷\n┃▸\n┃▸📄 COMMAND: .update\n┃▸❕ update bot velue \n┃▸\n┃▸📄 COMMAND: .restart \n┃▸❕ restart your bot\n┃▸\n┃▸📄 COMMAND: .settings\n┃▸❕ see bot settings\n┃▸\n┃▸📄 COMMAND: .owner \n┃▸❕ get owner number \n┃▸\n┃▸📄 COMMAND: .repo \n┃▸❕ get bot repository \n┃▸\n┃▸📄 COMMAND: .system \n┃▸❕ check bot systems\n┃▸\n┃▸📄 COMMAND: .block\n┃▸❕ block any user \n┃▸\n┃▸📄 COMMAND: .unblock \n┃▸❕ unblock any user \n┃▸\n┃▸📄 COMMAND: .shutdown \n┃▸❕ logout your bot\n┃▸\n┃▸📄 COMMAND: .clearchats \n┃▸❕ clearchats from ib\n┃▸\n┃▸📄 COMMAND: .setpp\n┃▸❕ update profile pic\n┃▸\n┃▸📄 COMMAND: .broadcast \n┃▸❕ creat broadcast \n┃▸\n┃▸📄 COMMAND: .jid\n┃▸❕ get jid any user\n┃▸\n┃▸📄 COMMAND: .gjid \n┃▸❕ get group jid\n╰━━━━━━━━━━━━⪼\n\n╭━❮ *CONVERT CMD* ❯━┈⊷\n┃▸\n┃▸📄 COMMAND: .sticker\n┃▸❕ convert photo to sticker\n┃▸\n┃▸📄 COMMAND: .tts\n┃▸❕ change text to voice \n┃▸\n┃▸📄 COMMAND: .trt \n┃▸❕ change languages \n╰━━━━━━━━━━━━⪼\n> " + config.DESCRIPTION;
    await _0x49347a.sendMessage(_0x5cbab0, {
      'image': {
        'url': 'https://i.ibb.co/6BMJmGY/mrfrankofc.jpg'
      },
      'caption': _0x9819bc,
      'contextInfo': {
        'mentionedJid': [_0x12497b.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363304325601080@newsletter",
          'newsletterName': "GMAX MD",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x3309c7
    });
    await _0x49347a.sendMessage(_0x5cbab0, {
      'audio': {
        'url': 'https://files.catbox.moe/z4frfn.mp3'
      },
      'mimetype': 'audio/mp4',
      'ptt': true
    }, {
      'quoted': _0x3309c7
    });
  } catch (_0x301d2a) {
    console.log(_0x301d2a);
    _0x165349('' + _0x301d2a);
  }
});