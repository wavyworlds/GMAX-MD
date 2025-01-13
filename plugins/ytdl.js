function hi() {
  console.log("Hello World!");
}
hi();
function hi() {
  console.log("Hello World!");
}
hi();
function hi() {
  console.log("Hello World!");
}
hi();
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
const {
  cmd,
  commands
} = require("../command");
const yts = require("yt-search");
const {
  fetchJson
} = require("../lib/functions");
const axios = require("axios");
async function ytmp4(_0x12a608, _0x382f72) {
  try {
    if (!_0x12a608 || !_0x382f72) {
      throw new Error("url and format parameters are required.");
    }
    const _0x347814 = parseInt(_0x382f72.replace("p", ""), 10);
    const _0x2e9853 = {
      button: 1,
      start: 1,
      end: 1,
      format: _0x347814,
      url: _0x12a608
    };
    const _0x4ac0c4 = {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
      Origin: "https://loader.to",
      Referer: "https://loader.to",
      "Sec-Ch-Ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
      "Sec-Ch-Ua-Mobile": "?1",
      "Sec-Ch-Ua-Platform": "\"Android\"",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
    };
    const _0x450dd4 = await axios.get("https://ab.cococococ.com/ajax/download.php", {
      params: _0x2e9853,
      headers: _0x4ac0c4
    });
    const _0x4d19e3 = _0x450dd4.data.id;
    const _0x3022a1 = async () => {
      const _0xba5d76 = {
        id: _0x4d19e3
      };
      try {
        const _0x143137 = await axios.get("https://p.oceansaver.in/ajax/progress.php", {
          params: _0xba5d76,
          headers: _0x4ac0c4
        });
        const {
          progress: _0x25d9ba,
          download_url: _0x5f410d,
          text: _0x372c74
        } = _0x143137.data;
        if (_0x372c74 === "Finished") {
          return _0x5f410d;
        } else {
          await new Promise(_0x3122bc => setTimeout(_0x3122bc, 1000));
          return _0x3022a1();
        }
      } catch (_0x544005) {
        throw new Error("Error in progress check: " + _0x544005.message);
      }
    };
    return await _0x3022a1();
  } catch (_0x5c7245) {
    console.error("Error:", _0x5c7245);
    return {
      error: _0x5c7245.message
    };
  }
}
module.exports = {
  ytmp4: ytmp4
};
function extractYouTubeId(_0x2d4841) {
  const _0x1b48d4 = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const _0x56f2dc = _0x2d4841.match(_0x1b48d4);
  if (_0x56f2dc) {
    return _0x56f2dc[1];
  } else {
    return null;
  }
}
function convertYouTubeLink(_0x1a8721) {
  const _0x94e9a6 = extractYouTubeId(_0x1a8721);
  if (_0x94e9a6) {
    return "https://www.youtube.com/watch?v=" + _0x94e9a6;
  }
  return _0x1a8721;
}
cmd({
  pattern: "song",
  alias: ["play", "ytmp3"],
  desc: "To download songs.",
  react: "🔎",
  category: "download",
  filename: __filename
}, async (_0x4a6875, _0xad99da, _0x32e35c, {
  from: _0x4b3a15,
  quoted: _0x5dedaa,
  body: _0x1c464d,
  isCmd: _0x42d501,
  command: _0x36f3c7,
  args: _0x45e37f,
  q: _0x1503f2,
  isGroup: _0x4f3205,
  sender: _0x2ab778,
  senderNumber: _0x46d748,
  botNumber2: _0x3e3a2b,
  botNumber: _0x7bce7c,
  pushname: _0x16692c,
  isMe: _0x4e1654,
  isOwner: _0x5cdfc4,
  groupMetadata: _0x557bf0,
  groupName: _0x15401a,
  participants: _0x405b7a,
  groupAdmins: _0x5af506,
  isBotAdmins: _0x22d4a7,
  isAdmins: _0x1b5f6e,
  reply: _0x8ee451
}) => {
  try {
    if (!_0x1503f2) {
      return _0x8ee451("Please give me a URL or title. Eg .play Lily By Alan Walker");
    }
    _0x1503f2 = convertYouTubeLink(_0x1503f2);
    const _0x4f73db = await yts(_0x1503f2);
    const _0xb7f59 = _0x4f73db.videos[0];
    const _0x2f8064 = _0xb7f59.url;
    const _0x4f6381 = await _0x4a6875.sendMessage(_0x4b3a15, {
      image: {
        url: _0xb7f59.thumbnail
      },
      caption: " \n *❄️ `ＧＭＡＸ - ＭＤ` ❄️*\n\n⟣━━━━━━━━━━━━━━━━━⟢\n*ɢᴍᴀx sᴏɴɢ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\n⟣━━━━━━━━━━━━━━━━━⟢\n\n➣ *🎐ɢᴍᴀx ʙᴏᴛ ᴄʜᴀɴɴᴇʟ🎐*\n* https://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x/*\n\n⟣━━━━━━━━━━━━━━━━━━⟢\n> ℹ️ ʀᴇᴘʟʏ ᴡɪᴛʜ ɴᴜᴍʙᴇʀ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ғᴏʀᴍᴀᴛ\n\n*1   ┃ ᴀᴜᴅɪᴏ sᴏɴɢ 🎵*\n*2   ┃ ᴅᴏᴄᴜᴍᴇɴᴛ sᴏɴɢ 🗂️*\n\n> © 𝐒𝐔𝐁𝐙𝐄𝐑𝐎 𝐌𝐃 𝐖.𝐀 𝐁𝐎𝐓\n"
    }, {
      quoted: _0xad99da
    });
    const _0x1705b5 = _0x4f6381.key.id;
    _0x4a6875.ev.on("messages.upsert", async _0x341c39 => {
      const _0x30bd83 = _0x341c39.messages[0];
      if (!_0x30bd83.message) {
        return;
      }
      const _0x4a166e = _0x30bd83.message.conversation || _0x30bd83.message.extendedTextMessage?.text;
      const _0x20224b = _0x30bd83.key.remoteJid;
      const _0x4fa602 = _0x30bd83.message.extendedTextMessage && _0x30bd83.message.extendedTextMessage.contextInfo.stanzaId === _0x1705b5;
      if (_0x4fa602) {
        await _0x4a6875.sendMessage(_0x20224b, {
          react: {
            text: "⬇️",
            key: _0x30bd83.key
          }
        });
        const _0x20a056 = await fetchJson("https://api.davidcyriltech.my.id/download/ytmp3?url=" + _0x2f8064);
        const _0x3c39e4 = _0x20a056.result.download_url;
        await _0x4a6875.sendMessage(_0x20224b, {
          delete: _0x4f6381.key
        });
        await _0x4a6875.sendMessage(_0x20224b, {
          react: {
            text: "⬆️",
            key: _0x30bd83.key
          }
        });
        if (_0x4a166e === "1") {
          await _0x4a6875.sendMessage(_0x20224b, {
            audio: {
              url: _0x3c39e4
            },
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                title: _0xb7f59.title,
                body: _0xb7f59.videoId,
                mediaType: 1,
                sourceUrl: _0xb7f59.url,
                thumbnailUrl: _0xb7f59.thumbnail,
                renderLargerThumbnail: true,
                showAdAttribution: true
              }
            }
          }, {
            quoted: _0x30bd83
          });
          await _0x4a6875.sendMessage(_0x20224b, {
            react: {
              text: "✅",
              key: _0x30bd83.key
            }
          });
        } else if (_0x4a166e === "2") {
          await _0x4a6875.sendMessage(_0x20224b, {
            document: {
              url: _0x3c39e4
            },
            mimetype: "audio/mp3",
            fileName: _0xb7f59.title + ".mp3",
            caption: "\n> © Gᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ɢᴍᴀx ❤️\n"
          }, {
            quoted: _0x30bd83
          });
          await _0x4a6875.sendMessage(_0x20224b, {
            react: {
              text: "✅",
              key: _0x30bd83.key
            }
          });
        }
      }
    });
  } catch (_0x490c1f) {
    console.log(_0x490c1f);
    _0x8ee451("" + _0x490c1f);
  }
});
cmd({
  pattern: "video",
  alias: "ytmp4",
  desc: "To download videos.",
  react: "🎥",
  category: "download",
  filename: __filename
}, async (_0x366bf5, _0x21b427, _0x4b762e, {
  from: _0x260436,
  quoted: _0x5e54c1,
  body: _0x3212cd,
  isCmd: _0x89cc6a,
  command: _0x4a4571,
  args: _0x175065,
  q: _0x3bff7e,
  isGroup: _0x13a2e7,
  sender: _0x93f8ac,
  senderNumber: _0x6158e2,
  botNumber2: _0x44c9c2,
  botNumber: _0x321160,
  pushname: _0x4191ef,
  isMe: _0x2d4c9b,
  isOwner: _0x49c90f,
  groupMetadata: _0x4d6eca,
  groupName: _0x13c7bc,
  participants: _0x1b72eb,
  groupAdmins: _0x2cbb59,
  isBotAdmins: _0x4e2a3b,
  isAdmins: _0x8f635a,
  reply: _0x396774
}) => {
  try {
    if (!_0x3bff7e) {
      return _0x396774("Please give me a URL or title.");
    }
    _0x3bff7e = convertYouTubeLink(_0x3bff7e);
    const _0x4201e3 = await yts(_0x3bff7e);
    const _0x5611a2 = _0x4201e3.videos[0];
    const _0x4baca4 = _0x5611a2.url;
    const _0x32886c = await _0x366bf5.sendMessage(_0x260436, {
      image: {
        url: _0x5611a2.thumbnail
      },
      caption: "\n*❄️ＧＭＡＸ - ＭＤ❄️* \n\n┏━━━━━━━━━━━━━\n┃ɢᴍᴀx ᴍᴅ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ✻\n┗━━━━━━━━━━━━━\n┏━━━━━━━━━━━━━━\n\n🔢 *ʀᴇᴘʟʏ ʙᴇʟᴏᴡ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴏ*\n*ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍᴀᴛ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴠɪᴅᴇᴏ 🎬*\n\n*1.1*     ┃  *360ᴘ*\n*1.2*     ┃  *480ᴘ*\n*1.3*     ┃  *720ᴘ*\n*1.4*     ┃  *1080ᴘ*\n\n*ᴅᴏᴡɴʟᴏᴀᴅ ᴅᴏᴄᴜᴍᴇɴᴛ 📁*\n\n*2.1*     ┃  *360ᴘ*\n*2.2*     ┃  *480ᴘ*\n*2.3*     ┃  *720ᴘ*\n*2.4*     ┃  *1080ᴘ*\n\n> ɢᴍᴀx ᴍᴅ✻\n"
    }, {
      quoted: _0x21b427
    });
    ;
    const _0x2a02d7 = _0x32886c.key.id;
    _0x366bf5.ev.on("messages.upsert", async _0x38f0c9 => {
      const _0x103aaf = _0x38f0c9.messages[0];
      if (!_0x103aaf.message) {
        return;
      }
      const _0x375c9e = _0x103aaf.message.conversation || _0x103aaf.message.extendedTextMessage?.text;
      const _0x5e3142 = _0x103aaf.key.remoteJid;
      const _0x29c01c = _0x103aaf.message.extendedTextMessage && _0x103aaf.message.extendedTextMessage.contextInfo.stanzaId === _0x2a02d7;
      if (_0x29c01c) {
        await _0x366bf5.sendMessage(_0x5e3142, {
          react: {
            text: "⬇️",
            key: _0x103aaf.key
          }
        });
        if (_0x375c9e === "1.1") {
          const _0x2806a8 = await ytmp4("" + _0x4baca4, "360p");
          await _0x366bf5.sendMessage(_0x5e3142, {
            delete: _0x32886c.key
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "⬆️",
              key: _0x103aaf.key
            }
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            video: {
              url: _0x2806a8
            },
            caption: "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ ɢᴍᴀx🌟*\n"
          }, {
            quoted: _0x103aaf
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "✅",
              key: _0x103aaf.key
            }
          });
        } else if (_0x375c9e === "1.2") {
          const _0xefd62b = await ytmp4("" + _0x4baca4, "480");
          await _0x366bf5.sendMessage(_0x5e3142, {
            delete: _0x32886c.key
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "🔃",
              key: _0x103aaf.key
            }
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            video: {
              url: _0xefd62b
            },
            caption: "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ ɢᴍᴀx🌟*\n"
          }, {
            quoted: _0x103aaf
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "✅",
              key: _0x103aaf.key
            }
          });
        } else if (_0x375c9e === "1.3") {
          const _0x1f98e0 = await ytmp4("" + _0x4baca4, "720");
          await _0x366bf5.sendMessage(_0x5e3142, {
            delete: _0x32886c.key
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "⬆️",
              key: _0x103aaf.key
            }
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            video: {
              url: _0x1f98e0
            },
            caption: "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ ɢᴍᴀx🌟*\n"
          }, {
            quoted: _0x103aaf
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "✅",
              key: _0x103aaf.key
            }
          });
        } else if (_0x375c9e === "1.4") {
          const _0x1ef463 = await ytmp4("" + _0x4baca4, "1080");
          await _0x366bf5.sendMessage(_0x5e3142, {
            delete: _0x32886c.key
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "⬆️",
              key: _0x103aaf.key
            }
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            video: {
              url: _0x1ef463
            },
            caption: "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ ɢᴍᴀx🌟*\n"
          }, {
            quoted: _0x103aaf
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "✅",
              key: _0x103aaf.key
            }
          });
        } else if (_0x375c9e === "2.1") {
          const _0x2f89a2 = await ytmp4("" + _0x4baca4, "360");
          await _0x366bf5.sendMessage(_0x5e3142, {
            delete: _0x32886c.key
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "⬆️",
              key: _0x103aaf.key
            }
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            document: {
              url: _0x2f89a2
            },
            mimetype: "video/mp4",
            fileName: _0x5611a2.title + ".mp4",
            caption: "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ ɢᴍᴀx🌟*\n"
          }, {
            quoted: _0x103aaf
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "✅",
              key: _0x103aaf.key
            }
          });
        } else if (_0x375c9e === "2.2") {
          const _0x3fd78c = await ytmp4("" + _0x4baca4, "480");
          await _0x366bf5.sendMessage(_0x5e3142, {
            delete: _0x32886c.key
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "⬆️",
              key: _0x103aaf.key
            }
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            document: {
              url: _0x3fd78c
            },
            mimetype: "video/mp4",
            fileName: _0x5611a2.title + ".mp4",
            caption: "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ ɢᴍᴀx🌟*\n"
          }, {
            quoted: _0x103aaf
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "✅",
              key: _0x103aaf.key
            }
          });
        } else if (_0x375c9e === "2.3") {
          const _0x3002dc = await ytmp4("" + _0x4baca4, "720");
          await _0x366bf5.sendMessage(_0x5e3142, {
            delete: _0x32886c.key
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "⬆️",
              key: _0x103aaf.key
            }
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            document: {
              url: _0x3002dc
            },
            mimetype: "video/mp4",
            fileName: _0x5611a2.title + ".mp4",
            caption: "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ ɢᴍᴀx🌟*\n"
          }, {
            quoted: _0x103aaf
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "✅",
              key: _0x103aaf.key
            }
          });
        } else if (_0x375c9e === "2.4") {
          const _0x2734af = await ytmp4("" + _0x4baca4, "1080");
          await _0x366bf5.sendMessage(_0x5e3142, {
            delete: _0x32886c.key
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "⬆️",
              key: _0x103aaf.key
            }
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            document: {
              url: _0x2734af
            },
            mimetype: "video/mp4",
            fileName: _0x5611a2.title + ".mp4",
            caption: "\n*🌟Gᴇɴᴇʀᴀᴛᴇᴅ 4 Yᴏᴜ Bʏ ɢᴍᴀx🌟*\n"
          }, {
            quoted: _0x103aaf
          });
          await _0x366bf5.sendMessage(_0x5e3142, {
            react: {
              text: "✅",
              key: _0x103aaf.key
            }
          });
        }
      }
    });
  } catch (_0x22733c) {
    console.log(_0x22733c);
    _0x396774("" + _0x22733c);
  }
});
cmd({
  pattern: "dee",
  alias: "dilolo",
  react: "⬇️",
  dontAddCommandList: true,
  filename: __filename
}, async (_0x356d2c, _0x10c1a6, _0x2bbc9a, {
  from: _0x30c447,
  q: _0x1c5b62,
  reply: _0x46e219
}) => {
  try {
    if (!_0x1c5b62) {
      return await _0x46e219("*Need a YouTube URL!*");
    }
    const _0x34a37a = await dlyta(_0x1c5b62);
    await _0x356d2c.sendMessage(_0x30c447, {
      audio: {
        url: _0x34a37a.dl_link
      },
      mimetype: "audio/mpeg"
    }, {
      quoted: _0x10c1a6
    });
  } catch (_0x55b749) {
    console.log("First attempt failed:", _0x55b749);
    try {
      const _0x16fb12 = await dlyta(_0x1c5b62);
      await _0x356d2c.sendMessage(_0x30c447, {
        audio: {
          url: _0x16fb12.dl_link
        },
        mimetype: "audio/mpeg"
      }, {
        quoted: _0x10c1a6
      });
    } catch (_0x56e0e5) {
      console.log("Second attempt failed:", _0x56e0e5);
      await _0x46e219("*Failed to process the request. Please try again later!*");
    }
  }
});
v;
