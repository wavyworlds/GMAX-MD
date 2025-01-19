function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd,
  commands
} = require("../command");
const yts = require('yt-search');
const {
  fetchJson
} = require("../lib/functions");
const {
  ytsearch,
  ytmp3
} = require('@dark-yasiya/yt-dl.js');
const axios = require('axios');
async function ytmp4(_0x13c71e, _0x5d7144) {
  try {
    if (!_0x13c71e || !_0x5d7144) {
      throw new Error("url and format parameters are required.");
    }
    const _0x1d1b1a = parseInt(_0x5d7144.replace('p', ''), 0xa);
    const _0x503d1d = {
      'button': 0x1,
      'start': 0x1,
      'end': 0x1,
      'format': _0x1d1b1a,
      'url': _0x13c71e
    };
    const _0x5f12e2 = {
      'Accept': "*/*",
      'Accept-Encoding': "gzip, deflate, br",
      'Accept-Language': "en-GB,en-US;q=0.9,en;q=0.8",
      'Origin': "https://loader.to",
      'Referer': "https://loader.to",
      'Sec-Ch-Ua': "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': "\"Android\"",
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': "cross-site",
      'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const _0x5612cb = await axios.get('https://ab.cococococ.com/ajax/download.php', {
      'params': _0x503d1d,
      'headers': _0x5f12e2
    });
    const _0x38119f = _0x5612cb.data.id;
    const _0x317016 = async () => {
      const _0x50b431 = {
        'id': _0x38119f
      };
      try {
        const _0x588a94 = await axios.get("https://p.oceansaver.in/ajax/progress.php", {
          'params': _0x50b431,
          'headers': _0x5f12e2
        });
        const {
          progress: _0x6db579,
          download_url: _0x197be0,
          text: _0x509eb0
        } = _0x588a94.data;
        return _0x509eb0 === 'Finished' ? _0x197be0 : (await new Promise(_0x117d00 => setTimeout(_0x117d00, 0x3e8)), _0x317016());
      } catch (_0x222c4d) {
        throw new Error("Error in progress check: " + _0x222c4d.message);
      }
    };
    return await _0x317016();
  } catch (_0x1be9cf) {
    console.error("Error:", _0x1be9cf);
    return {
      'error': _0x1be9cf.message
    };
  }
}
module.exports = {
  'ytmp4': ytmp4
};
function extractYouTubeId(_0x4b298d) {
  const _0x1838c2 = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x461a96 = _0x4b298d.match(_0x1838c2);
  return _0x461a96 ? _0x461a96[0x1] : null;
}
function convertYouTubeLink(_0x21424d) {
  const _0x16f3d9 = extractYouTubeId(_0x21424d);
  if (_0x16f3d9) {
    return "https://www.youtube.com/watch?v=" + _0x16f3d9;
  }
  return _0x21424d;
}
cmd({
  'pattern': "song",
  'alias': "play",
  'desc': "To download songs.",
  'react': '🎵',
  'category': "download",
  'filename': __filename
}, async (_0x4a74ea, _0x2b431a, _0xde6b15, {
  from: _0x26e21e,
  quoted: _0x1ccac1,
  body: _0x2101f5,
  isCmd: _0x50faec,
  command: _0x35f5fc,
  args: _0x2c51c2,
  q: _0x8fb9ed,
  isGroup: _0x2a44d2,
  sender: _0x1d8b51,
  senderNumber: _0x4fb519,
  botNumber2: _0x52473a,
  botNumber: _0x2e4568,
  pushname: _0x3d35f8,
  isMe: _0x34ded3,
  isOwner: _0x359422,
  groupMetadata: _0x193a21,
  groupName: _0x4c9c09,
  participants: _0x4bb35e,
  groupAdmins: _0x53235e,
  isBotAdmins: _0x54fb68,
  isAdmins: _0x4b424f,
  reply: _0x4eacff
}) => {
  try {
    if (!_0x8fb9ed) {
      return _0x4eacff("Please give me a URL or title.");
    }
    _0x8fb9ed = convertYouTubeLink(_0x8fb9ed);
    const _0x4dade9 = await yts(_0x8fb9ed);
    const _0x51aeca = _0x4dade9.videos[0x0];
    const _0x22df64 = _0x51aeca.url;
    let _0x3cb77a = "\n*𝙶𝙼𝙰𝚇-𝙼ᴜsɪᴄ*\n❍ *ᴛɪᴛʟᴇ :* " + _0x51aeca.title + "\n❍ *ᴅᴜʀᴀᴛɪᴏɴ :* " + _0x51aeca.timestamp + "\n❍ *ᴠɪᴇᴡꜱ :* " + _0x51aeca.views + "\n❍ *ᴜᴘʟᴏᴀᴅ ᴏɴ :* " + _0x51aeca.ago + "\n*ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴜᴅɪᴏ 🎧*\n\n*1*     ┃  *ᴀᴜᴅɪᴏ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*\n\n*2*     ┃  *ᴅᴏᴄᴜᴍᴇɴᴛ*\n\nMʀ Mᴜᴢᴀᴍɪʟ  \n";
    const _0x4ce181 = await _0x4a74ea.sendMessage(_0x26e21e, {
      'image': {
        'url': _0x51aeca.thumbnail
      },
      'caption': _0x3cb77a,
      'contextInfo': {
        'mentionedJid': ["255622053093@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363220399229536@newsletter',
          'newsletterName': "𝚐𝚖𝚊𝚡 𝚖𝚍  ",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "GMAX-MD",
          'body': "GMAX-MD-MUSIC",
          'mediaType': 0x1,
          'sourceUrl': 'https://github.com/Gmaxtech2024',
          'thumbnailUrl': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x2b431a
    });
    const _0x48f803 = _0x4ce181.key.id;
    _0x4a74ea.ev.on("messages.upsert", async _0xf94459 => {
      const _0x24084e = _0xf94459.messages[0x0];
      if (!_0x24084e.message) {
        return;
      }
      const _0x3a4349 = _0x24084e.message.conversation || _0x24084e.message.extendedTextMessage?.["text"];
      const _0x40c7f4 = _0x24084e.key.remoteJid;
      const _0x1f9c9d = _0x24084e.message.extendedTextMessage && _0x24084e.message.extendedTextMessage.contextInfo.stanzaId === _0x48f803;
      if (_0x1f9c9d) {
        await _0x4a74ea.sendMessage(_0x40c7f4, {
          'react': {
            'text': '⬇️',
            'key': _0x24084e.key
          }
        });
        if (_0x3a4349 === '1') {
          const _0x3a9deb = await ytmp3(_0x22df64);
          await _0x4a74ea.sendMessage(_0x40c7f4, {
            'react': {
              'text': '⬆️',
              'key': _0x24084e.key
            }
          });
          await _0x4a74ea.sendMessage(_0x40c7f4, {
            'audio': {
              'url': _0x3a9deb.download.url
            },
            'mimetype': "audio/mpeg",
            'contextInfo': {
              'mentionedJid': ["255622053093@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363220399229536@newsletter",
                'newsletterName': "𝚐𝚖𝚊𝚡 𝚖𝚍  ",
                'serverMessageId': 0x3e7
              },
              'externalAdReply': {
                'title': "Mʀ 𝚐𝚖𝚊𝚡 ",
                'body': "𝚐𝚖𝚊𝚡 𝚖𝚍  ",
                'mediaType': 0x1,
                'sourceUrl': _0x51aeca.url,
                'thumbnailUrl': _0x51aeca.thumbnail,
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x24084e
          });
          await _0x4a74ea.sendMessage(_0x40c7f4, {
            'react': {
              'text': '✅',
              'key': _0x24084e.key
            }
          });
        } else {
          if (_0x3a4349 === '2') {
            const _0x1437e8 = await ytmp3(_0x22df64);
            await _0x4a74ea.sendMessage(_0x40c7f4, {
              'react': {
                'text': '⬆️',
                'key': _0x24084e.key
              }
            });
            await _0x4a74ea.sendMessage(_0x40c7f4, {
              'document': {
                'url': _0x1437e8.download.url
              },
              'mimetype': 'audio/mp3',
              'fileName': _0x51aeca.title + ".mp3",
              'caption': "\n> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mʀ 𝙶𝙼𝙰𝚇*\n ",
              'contextInfo': {
                'mentionedJid': ["255622053093@s.whatsapp.net"],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363220399229536@newsletter",
                  'newsletterName': "𝚐𝚖𝚊𝚡 𝚖𝚍",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': "Mʀ 𝙶𝙼𝙰𝚇 ",
                  'body': "GMAX-MD-MUSIC",
                  'mediaType': 0x1,
                  'sourceUrl': _0x51aeca.url,
                  'thumbnailUrl': _0x51aeca.thumbnail,
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x24084e
            });
            await _0x4a74ea.sendMessage(_0x40c7f4, {
              'react': {
                'text': '✅',
                'key': _0x24084e.key
              }
            });
            await _0x4a74ea.sendMessage(_0x40c7f4, {
              'delete': _0x4ce181.key
            });
          }
        }
      }
    });
  } catch (_0x40ce37) {
    console.log(_0x40ce37);
    _0x4eacff('' + _0x40ce37);
  }
});
cmd({
  'pattern': "video",
  'desc': "To download videos.",
  'react': '🎥',
  'category': "download",
  'filename': __filename
}, async (_0xc99705, _0x422be6, _0x64e599, {
  from: _0x2f8be0,
  quoted: _0x5d4007,
  body: _0x1c0cd2,
  isCmd: _0x276736,
  command: _0x37565c,
  args: _0x115aa0,
  q: _0x59a4e6,
  isGroup: _0x48ce4a,
  sender: _0x3c57e9,
  senderNumber: _0x18c6f2,
  botNumber2: _0x56edfa,
  botNumber: _0x55285b,
  pushname: _0x353426,
  isMe: _0x33ab5c,
  isOwner: _0x453ff2,
  groupMetadata: _0x50558e,
  groupName: _0xa28b87,
  participants: _0x1c4d1b,
  groupAdmins: _0x1ae5be,
  isBotAdmins: _0x86ef09,
  isAdmins: _0x46a602,
  reply: _0x492f7d
}) => {
  try {
    if (!_0x59a4e6) {
      return _0x492f7d("Please give me a URL or title.");
    }
    _0x59a4e6 = convertYouTubeLink(_0x59a4e6);
    const _0x3eb2ff = await yts(_0x59a4e6);
    const _0x2fbd5b = _0x3eb2ff.videos[0x0];
    const _0x4b54e7 = _0x2fbd5b.url;
    let _0x5a9bab = "\n*GMAX MD-VIDEO*\n " + _0x2fbd5b.title + "\n❍ *ᴅᴜʀᴀᴛɪᴏɴ :* " + _0x2fbd5b.timestamp + "\n❍ *ᴠɪᴇᴡꜱ :* " + _0x2fbd5b.views + "\n❍ *ᴜᴘʟᴏᴀᴅ ᴏɴ :* " + _0x2fbd5b.ago + "\n\n*ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ 🎬*\n\n*1.1*     ┃  *360ᴘ*\n*1.2*     ┃  *480ᴘ*\n*1.3*     ┃  *720ᴘ*\n*1.4*     ┃  *1080ᴘ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*\n\n*2.1*     ┃  *360ᴘ*\n*2.2*     ┃  *480ᴘ*\n*2.3*     ┃  *720ᴘ*\n*2.4*     ┃  *1080ᴘ*\n\n> Mᴜᴢᴀᴍɪʟ Zᴋʜᴀᴍɪ Mᴅ \n";
    const _0x31a910 = await _0xc99705.sendMessage(_0x2f8be0, {
      'image': {
        'url': _0x2fbd5b.thumbnail
      },
      'caption': _0x5a9bab,
      'contextInfo': {
        'mentionedJid': ["255622053093@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363220399229536@newsletter',
          'newsletterName': "Mʀ 𝙶𝙼𝙰𝚇 ",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "Mʀ 𝙶𝙼𝙰𝚇 ",
          'body': "GMAX-MD-MUSIC",
          'mediaType': 0x1,
          'sourceUrl': "https://github.com/Gmaxtech2024",
          'thumbnailUrl': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x422be6
    });
    const _0x2cbb74 = _0x31a910.key.id;
    _0xc99705.ev.on('messages.upsert', async _0x135393 => {
      const _0x19d996 = _0x135393.messages[0x0];
      if (!_0x19d996.message) {
        return;
      }
      const _0x5a5f00 = _0x19d996.message.conversation || _0x19d996.message.extendedTextMessage?.["text"];
      const _0x12c6e2 = _0x19d996.key.remoteJid;
      const _0xef269e = _0x19d996.message.extendedTextMessage && _0x19d996.message.extendedTextMessage.contextInfo.stanzaId === _0x2cbb74;
      if (_0xef269e) {
        await _0xc99705.sendMessage(_0x12c6e2, {
          'react': {
            'text': '⬇️',
            'key': _0x19d996.key
          }
        });
        if (_0x5a5f00 === "1.1") {
          const _0x4f4046 = await ytmp4('' + _0x4b54e7, "360p");
          await _0xc99705.sendMessage(_0x12c6e2, {
            'delete': _0x31a910.key
          });
          await _0xc99705.sendMessage(_0x12c6e2, {
            'react': {
              'text': '⬆️',
              'key': _0x19d996.key
            }
          });
          await _0xc99705.sendMessage(_0x12c6e2, {
            'video': {
              'url': _0x4f4046
            },
            'caption': "\n> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mʀ 𝙶𝙼𝙰𝚇*\n",
            'contextInfo': {
              'mentionedJid': ["255622053093@s.whatsapp.net"],
              'groupMentions': [],
              'forwardingScore': 0x1,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "120363220399229536@newsletter",
                'newsletterName': "Mʀ 𝙶𝙼𝙰𝚇 ",
                'serverMessageId': 0x3e7
              },
              'externalAdReply': {
                'title': "Mʀ 𝙶𝙼𝙰𝚇 ",
                'body': 'GMAX-MD-MUSIC',
                'mediaType': 0x1,
                'sourceUrl': _0x2fbd5b.url,
                'thumbnailUrl': _0x2fbd5b.thumbnail,
                'renderLargerThumbnail': false,
                'showAdAttribution': true
              }
            }
          }, {
            'quoted': _0x19d996
          });
          await _0xc99705.sendMessage(_0x12c6e2, {
            'react': {
              'text': '✅',
              'key': _0x19d996.key
            }
          });
        } else {
          if (_0x5a5f00 === "1.2") {
            const _0x400dfe = await ytmp4('' + _0x4b54e7, "480");
            await _0xc99705.sendMessage(_0x12c6e2, {
              'delete': _0x31a910.key
            });
            await _0xc99705.sendMessage(_0x12c6e2, {
              'react': {
                'text': '⬆️',
                'key': _0x19d996.key
              }
            });
            await _0xc99705.sendMessage(_0x12c6e2, {
              'video': {
                'url': _0x400dfe
              },
              'caption': "\n> *© ᴘᴏᴡᴇʀᴇᴅ Bʏ Mʀ 𝙶𝙼𝙰𝚇*\n",
              'contextInfo': {
                'mentionedJid': ["255622053093@s.whatsapp.net"],
                'groupMentions': [],
                'forwardingScore': 0x1,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363220399229536@newsletter",
                  'newsletterName': "Mʀ 𝙶𝙼𝙰𝚇  ",
                  'serverMessageId': 0x3e7
                },
                'externalAdReply': {
                  'title': '𝙶𝙼𝙰𝚇-ᴍᴅ',
                  'body': "GMAX-MD-MUSIC",
                  'mediaType': 0x1,
                  'sourceUrl': _0x2fbd5b.url,
                  'thumbnailUrl': _0x2fbd5b.thumbnail,
                  'renderLargerThumbnail': false,
                  'showAdAttribution': true
                }
              }
            }, {
              'quoted': _0x19d996
            });
            await _0xc99705.sendMessage(_0x12c6e2, {
              'react': {
                'text': '✅',
                'key': _0x19d996.key
              }
            });
          } else {
            if (_0x5a5f00 === "1.3") {
              const _0x99aa99 = await ytmp4('' + _0x4b54e7, '720');
              await _0xc99705.sendMessage(_0x12c6e2, {
                'delete': _0x31a910.key
              });
              await _0xc99705.sendMessage(_0x12c6e2, {
                'react': {
                  'text': '⬆️',
                  'key': _0x19d996.key
                }
              });
              await _0xc99705.sendMessage(_0x12c6e2, {
                'video': {
                  'url': _0x99aa99
                },
                'caption': "\n> *© Poᴡᴇʀᴇᴅ Bʏ Mʀ 𝙶𝙼𝙰𝚇*\n",
                'contextInfo': {
                  'mentionedJid': ["255622053093@s.whatsapp.net"],
                  'groupMentions': [],
                  'forwardingScore': 0x1,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "120363220399229536@newsletter",
                    'newsletterName': "Mʀ 𝙶𝙼𝙰𝚇 ",
                    'serverMessageId': 0x3e7
                  },
                  'externalAdReply': {
                    'title': "Mʀ 𝙶𝙼𝙰𝚇 ",
                    'body': 'GMAX-MD-MUSIC',
                    'mediaType': 0x1,
                    'sourceUrl': _0x2fbd5b.url,
                    'thumbnailUrl': _0x2fbd5b.thumbnail,
                    'renderLargerThumbnail': false,
                    'showAdAttribution': true
                  }
                }
              }, {
                'quoted': _0x19d996
              });
              await _0xc99705.sendMessage(_0x12c6e2, {
                'react': {
                  'text': '✅',
                  'key': _0x19d996.key
                }
              });
            } else {
              if (_0x5a5f00 === "1.4") {
                const _0x32ea43 = await ytmp4('' + _0x4b54e7, "1080");
                await _0xc99705.sendMessage(_0x12c6e2, {
                  'delete': _0x31a910.key
                });
                await _0xc99705.sendMessage(_0x12c6e2, {
                  'react': {
                    'text': '⬆️',
                    'key': _0x19d996.key
                  }
                });
                await _0xc99705.sendMessage(_0x12c6e2, {
                  'video': {
                    'url': _0x32ea43
                  },
                  'caption': "\n> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mʀ 𝙶𝙼𝙰𝚇*\n"
                }, {
                  'quoted': _0x19d996
                });
                await _0xc99705.sendMessage(_0x12c6e2, {
                  'react': {
                    'text': '✅',
                    'key': _0x19d996.key
                  }
                });
              } else {
                if (_0x5a5f00 === "2.1") {
                  const _0x517ff7 = await ytmp4('' + _0x4b54e7, '360');
                  await _0xc99705.sendMessage(_0x12c6e2, {
                    'delete': _0x31a910.key
                  });
                  await _0xc99705.sendMessage(_0x12c6e2, {
                    'react': {
                      'text': '⬆️',
                      'key': _0x19d996.key
                    }
                  });
                  await _0xc99705.sendMessage(_0x12c6e2, {
                    'document': {
                      'url': _0x517ff7
                    },
                    'mimetype': "video/mp4",
                    'fileName': _0x2fbd5b.title + '.mp4',
                    'caption': "\n> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mʀ 𝙶𝙼𝙰𝚇*\n",
                    'contextInfo': {
                      'mentionedJid': ['255622053093@s.whatsapp.net'],
                      'groupMentions': [],
                      'forwardingScore': 0x1,
                      'isForwarded': true,
                      'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "120363220399229536@newsletter",
                        'newsletterName': "Mʀ 𝙶𝙼𝙰𝚇  ",
                        'serverMessageId': 0x3e7
                      },
                      'externalAdReply': {
                        'title': "Mʀ 𝙶𝙼𝙰𝚇 ",
                        'body': "GMAX-MD-MUSIC",
                        'mediaType': 0x1,
                        'sourceUrl': _0x2fbd5b.url,
                        'thumbnailUrl': _0x2fbd5b.thumbnail,
                        'renderLargerThumbnail': false,
                        'showAdAttribution': true
                      }
                    }
                  }, {
                    'quoted': _0x19d996
                  });
                  await _0xc99705.sendMessage(_0x12c6e2, {
                    'react': {
                      'text': '✅',
                      'key': _0x19d996.key
                    }
                  });
                } else {
                  if (_0x5a5f00 === "2.2") {
                    const _0x165dc0 = await ytmp4('' + _0x4b54e7, "480");
                    await _0xc99705.sendMessage(_0x12c6e2, {
                      'delete': _0x31a910.key
                    });
                    await _0xc99705.sendMessage(_0x12c6e2, {
                      'react': {
                        'text': '⬆️',
                        'key': _0x19d996.key
                      }
                    });
                    await _0xc99705.sendMessage(_0x12c6e2, {
                      'document': {
                        'url': _0x165dc0
                      },
                      'mimetype': "video/mp4",
                      'fileName': _0x2fbd5b.title + ".mp4",
                      'caption': "\n> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mʀ 𝙶𝙼𝙰𝚇*\n",
                      'contextInfo': {
                        'mentionedJid': ['255622053093@s.whatsapp.net'],
                        'groupMentions': [],
                        'forwardingScore': 0x1,
                        'isForwarded': true,
                        'forwardedNewsletterMessageInfo': {
                          'newsletterJid': "120363220399229536@newsletter",
                          'newsletterName': "Mʀ 𝙶𝙼𝙰𝚇  ",
                          'serverMessageId': 0x3e7
                        },
                        'externalAdReply': {
                          'title': '𝙶𝙼𝙰𝚇-ᴍᴅ',
                          'body': "GMAX-MD-MUSIC",
                          'mediaType': 0x1,
                          'sourceUrl': _0x2fbd5b.url,
                          'thumbnailUrl': _0x2fbd5b.thumbnail,
                          'renderLargerThumbnail': false,
                          'showAdAttribution': true
                        }
                      }
                    }, {
                      'quoted': _0x19d996
                    });
                    await _0xc99705.sendMessage(_0x12c6e2, {
                      'react': {
                        'text': '✅',
                        'key': _0x19d996.key
                      }
                    });
                  } else {
                    if (_0x5a5f00 === "2.3") {
                      const _0xe43a8b = await ytmp4('' + _0x4b54e7, "720");
                      await _0xc99705.sendMessage(_0x12c6e2, {
                        'delete': _0x31a910.key
                      });
                      await _0xc99705.sendMessage(_0x12c6e2, {
                        'react': {
                          'text': '⬆️',
                          'key': _0x19d996.key
                        }
                      });
                      await _0xc99705.sendMessage(_0x12c6e2, {
                        'document': {
                          'url': _0xe43a8b
                        },
                        'mimetype': "video/mp4",
                        'fileName': _0x2fbd5b.title + ".mp4",
                        'caption': "\n> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mʀ 𝙶𝙼𝙰𝚇*\n",
                        'contextInfo': {
                          'mentionedJid': ["255622053093@s.whatsapp.net"],
                          'groupMentions': [],
                          'forwardingScore': 0x1,
                          'isForwarded': true,
                          'forwardedNewsletterMessageInfo': {
                            'newsletterJid': '120363220399229536@newsletter',
                            'newsletterName': "Mʀ 𝙶𝙼𝙰𝚇  ",
                            'serverMessageId': 0x3e7
                          },
                          'externalAdReply': {
                            'title': "Mʀ 𝙶𝙼𝙰𝚇 ",
                            'body': "GMAX-MD-MUSIC",
                            'mediaType': 0x1,
                            'sourceUrl': _0x2fbd5b.url,
                            'thumbnailUrl': _0x2fbd5b.thumbnail,
                            'renderLargerThumbnail': false,
                            'showAdAttribution': true
                          }
                        }
                      }, {
                        'quoted': _0x19d996
                      });
                      await _0xc99705.sendMessage(_0x12c6e2, {
                        'react': {
                          'text': '✅',
                          'key': _0x19d996.key
                        }
                      });
                    } else {
                      if (_0x5a5f00 === "2.4") {
                        const _0x182642 = await ytmp4('' + _0x4b54e7, "1080");
                        await _0xc99705.sendMessage(_0x12c6e2, {
                          'delete': _0x31a910.key
                        });
                        await _0xc99705.sendMessage(_0x12c6e2, {
                          'react': {
                            'text': '⬆️',
                            'key': _0x19d996.key
                          }
                        });
                        await _0xc99705.sendMessage(_0x12c6e2, {
                          'document': {
                            'url': _0x182642
                          },
                          'mimetype': "video/mp4",
                          'fileName': _0x2fbd5b.title + ".mp4",
                          'caption': "\n> *© Pᴏᴡᴇʀᴇᴅ Bʏ Mʀ 𝙶𝙼𝙰𝚇*\n",
                          'contextInfo': {
                            'mentionedJid': ['255622053093@s.whatsapp.net'],
                            'groupMentions': [],
                            'forwardingScore': 0x1,
                            'isForwarded': true,
                            'forwardedNewsletterMessageInfo': {
                              'newsletterJid': "120363220399229536@newsletter",
                              'newsletterName': "Mʀ 𝙶𝙼𝙰𝚇  ",
                              'serverMessageId': 0x3e7
                            },
                            'externalAdReply': {
                              'title': "Mʀ 𝙶𝙼𝙰𝚇 ",
                              'body': 'GMAX-MD-MUSIC',
                              'mediaType': 0x1,
                              'sourceUrl': _0x2fbd5b.url,
                              'thumbnailUrl': _0x2fbd5b.thumbnail,
                              'renderLargerThumbnail': false,
                              'showAdAttribution': true
                            }
                          }
                        }, {
                          'quoted': _0x19d996
                        });
                        await _0xc99705.sendMessage(_0x12c6e2, {
                          'react': {
                            'text': '✅',
                            'key': _0x19d996.key
                          }
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  } catch (_0x343033) {
    console.log(_0x343033);
    _0x492f7d('' + _0x343033);
  }
});
cmd({
  'pattern': 'yta',
  'alias': "ytmp3",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1d673b, _0x52406f, _0x395443, {
  from: _0x41150d,
  q: _0xb4e98e,
  reply: _0x4f0f12
}) => {
  try {
    if (!_0xb4e98e) {
      return await _0x4f0f12("*Need a YouTube URL!*");
    }
    const _0x3bb3da = await fetchJson("https://api.giftedtech.my.id/api/download/ytaud?apikey=gifted&url=" + _0xb4e98e);
    const _0x30e6b8 = _0x3bb3da.result.download_url;
    await _0x1d673b.sendMessage(_0x41150d, {
      'audio': {
        'url': _0x30e6b8
      },
      'mimetype': 'audio/mpeg'
    }, {
      'quoted': _0x52406f
    });
  } catch (_0x305aa1) {
    console.log("First attempt failed:", _0x305aa1);
    try {
      const _0x2225df = await dlyta(_0xb4e98e);
      await _0x1d673b.sendMessage(_0x41150d, {
        'audio': {
          'url': _0x2225df.dl_link
        },
        'mimetype': "audio/mpeg"
      }, {
        'quoted': _0x52406f
      });
    } catch (_0x16d85f) {
      console.log("Second attempt failed:", _0x16d85f);
      await _0x4f0f12("*Failed to process the request. Please try again later!*");
    }
  }
});
