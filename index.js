function hi() {
  console.log("Hello World!");
}
hi();
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  jidNormalizedUser,
  getContentType,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  AnyMessageContent,
  prepareWAMessageMedia,
  areJidsSameUser,
  downloadContentFromMessage,
  MessageRetryMap,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  generateMessageID,
  makeInMemoryStore,
  jidDecode,
  fetchLatestBaileysVersion,
  Browsers
} = require("@whiskeysockets/baileys");
const l = console.log;
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("./lib/functions");
const fs = require("fs");
const ff = require("fluent-ffmpeg");
const P = require("pino");
const config = require("./config");
const qrcode = require("qrcode-terminal");
const StickersTypes = require("wa-sticker-formatter");
const util = require("util");
const {
  sms,
  downloadMediaMessage
} = require("./lib/msg");
const FileType = require("file-type");
const axios = require("axios");
const {
  File
} = require("megajs");
const {
  fromBuffer
} = require("file-type");
const bodyparser = require("body-parser");
const os = require("os");
const Crypto = require("crypto");
const path = require("path");
const prefix = config.PREFIX;
const ownerNumber = ["255622053093"];
const tempDir = path.join(os.tmpdir(), "cache-temp");
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}
const clearTempDir = () => {
  fs.readdir(tempDir, (_0x4e7cc1, _0x31db60) => {
    if (_0x4e7cc1) {
      throw _0x4e7cc1;
    }
    for (const _0x4370b3 of _0x31db60) {
      fs.unlink(path.join(tempDir, _0x4370b3), _0x38048c => {
        if (_0x38048c) {
          throw _0x38048c;
        }
      });
    }
  });
};
setInterval(clearTempDir, 300000);
if (!fs.existsSync(__dirname + "/sessions/creds.json")) {
  if (!config.SESSION_ID) {
    return console.log("Please add your session to SESSION_ID env !!");
  }
  const sessdata = config.SESSION_ID.replace("SUBZERO-MD~", "");
  const filer = File.fromURL("https://mega.nz/file/" + sessdata);
  filer.download((_0x1e6cd2, _0x1fbb0a) => {
    if (_0x1e6cd2) {
      throw _0x1e6cd2;
    }
    fs.writeFile(__dirname + "/sessions/creds.json", _0x1fbb0a, () => {
      console.log("Subzero Session downloaded ✅");
    });
  });
}
const express = require("express");
const app = express();
const port = process.env.PORT || 7860;
async function connectToWA() {
  console.log("[❄️] Gmax Connecting to WhatsApp ⏳️...");
  const {
    state: _0x31fb0f,
    saveCreds: _0x467b0d
  } = await useMultiFileAuthState(__dirname + "/sessions/");
  var {
    version: _0x115701
  } = await fetchLatestBaileysVersion();
  const _0x22f519 = makeWASocket({
    logger: P({
      level: "silent"
    }),
    printQRInTerminal: false,
    browser: Browsers.macOS("Firefox"),
    syncFullHistory: true,
    auth: _0x31fb0f,
    version: _0x115701
  });
  _0x22f519.ev.on("connection.update", _0x4220ed => {
    const {
      connection: _0x553934,
      lastDisconnect: _0x496aab
    } = _0x4220ed;
    if (_0x553934 === "close") {
      if (_0x496aab.error.output.statusCode !== DisconnectReason.loggedOut) {
        connectToWA();
      }
    } else if (_0x553934 === "open") {
      console.log("[❄️] 🛠️ Installing Plugins.");
      const _0x244be4 = require("path");
      fs.readdirSync("./plugins/").forEach(_0x42293a => {
        if (_0x244be4.extname(_0x42293a).toLowerCase() == ".js") {
          require("./plugins/" + _0x42293a);
        }
      });
      console.log("[❄️] Plugins installed successful ✅");
      console.log("[❄️] ɢᴍᴀx ᴍᴅ connected to whatsapp ✅");
      let _0x1f4fbe = "*Hi Owner😇, Congrats ɢᴍᴀx Connected Successfully! 🚀* \n\n> Light, Cold, Icy, Fast & Rich Loaded With Features, ɢᴍᴀx W.A Bot.\n\n *Thanks for using GMAX-MD ❄️* \n\n> Join WhatsApp Channel :- 🛠️\n \nhttps://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x\n\n- * ʏᴏᴜʀ ᴘʀᴇғɪx➜*  " + prefix + "\n\nDont forget to  star our repo☺ \n\nhttps://github.com/Gmaxtech2024/GMAX-MD\n\n> © 🎐ᴘϙᴡᴇʀᴇᴅ ʙʏ sɪʀ ɢᴍᴀx ⚡";
      _0x22f519.sendMessage(_0x22f519.user.id, {
        image: {
          url: "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg"
        },
        caption: _0x1f4fbe
      });
    }
  });
  _0x22f519.ev.on("creds.update", _0x467b0d);
  _0x22f519.ev.on("messages.upsert", async _0x53bb05 => {
    _0x53bb05 = _0x53bb05.messages[0];
    if (!_0x53bb05.message) {
      return;
    }
    _0x53bb05.message = getContentType(_0x53bb05.message) === "ephemeralMessage" ? _0x53bb05.message.ephemeralMessage.message : _0x53bb05.message;
    if (config.READ_MESSAGE === "true") {
      await _0x22f519.readMessages([_0x53bb05.key]);
      console.log("Marked message from " + _0x53bb05.key.remoteJid + " as read.");
    }
    if (_0x53bb05.message.viewOnceMessageV2) {
      _0x53bb05.message = getContentType(_0x53bb05.message) === "ephemeralMessage" ? _0x53bb05.message.ephemeralMessage.message : _0x53bb05.message;
    }
    if (_0x53bb05.key && _0x53bb05.key.remoteJid === "status@broadcast" && config.AUTO_STATUS_SEEN === "true") {
      await _0x22f519.readMessages([_0x53bb05.key]);
    }
    if (_0x53bb05.key && _0x53bb05.key.remoteJid === "status@broadcast" && config.AUTO_STATUS_REPLY === "true") {
      const _0x2c05d0 = _0x53bb05.key.participant;
      const _0x48a16c = "" + config.AUTO_STATUS_MSG;
      await _0x22f519.sendMessage(_0x2c05d0, {
        text: _0x48a16c,
        react: {
          text: "💚",
          key: _0x53bb05.key
        }
      }, {
        quoted: _0x53bb05
      });
    }
    let _0x47ea9e = _0x53bb05.message.viewOnceMessageV2;
    let _0x462f5a = _0x53bb05.mtype === "viewOnceMessage";
    if (_0x47ea9e && config.ANTI_VV === "true") {
      if (_0x47ea9e.message.imageMessage) {
        let _0x4b2174 = _0x47ea9e.message.imageMessage.caption;
        let _0x5daaee = await _0x22f519.downloadAndSaveMediaMessage(_0x47ea9e.message.imageMessage);
        return _0x22f519.sendMessage("255622053093@s.whatsapp.net", {
          image: {
            url: _0x5daaee
          },
          caption: _0x4b2174
        }, {
          quoted: _0x53bb05
        });
      }
      if (_0x47ea9e.message.videoMessage) {
        let _0x136882 = _0x47ea9e.message.videoMessage.caption;
        let _0xa34546 = await _0x22f519.downloadAndSaveMediaMessage(_0x47ea9e.message.videoMessage);
        return _0x22f519.sendMessage("255622053093@s.whatsapp.net", {
          video: {
            url: _0xa34546
          },
          caption: _0x136882
        }, {
          quoted: _0x53bb05
        });
      }
      if (_0x47ea9e.message.audioMessage) {
        let _0x47ef61 = await _0x22f519.downloadAndSaveMediaMessage(_0x47ea9e.message.audioMessage);
        return _0x22f519.sendMessage("263719647303@s.whatsapp.net", {
          audio: {
            url: _0x47ef61
          },
          caption: cap
        }, {
          quoted: _0x53bb05
        });
      }
    }
    const _0x320a0c = sms(_0x22f519, _0x53bb05);
    const _0x20b3f2 = getContentType(_0x53bb05.message);
    const _0x35729d = JSON.stringify(_0x53bb05.message);
    const _0xc04e1 = _0x53bb05.key.remoteJid;
    const _0x149832 = _0x20b3f2 == "extendedTextMessage" && _0x53bb05.message.extendedTextMessage.contextInfo != null ? _0x53bb05.message.extendedTextMessage.contextInfo.quotedMessage || [] : [];
    const _0x47cf84 = _0x20b3f2 === "conversation" ? _0x53bb05.message.conversation : _0x20b3f2 === "extendedTextMessage" ? _0x53bb05.message.extendedTextMessage.text : _0x20b3f2 == "imageMessage" && _0x53bb05.message.imageMessage.caption ? _0x53bb05.message.imageMessage.caption : _0x20b3f2 == "videoMessage" && _0x53bb05.message.videoMessage.caption ? _0x53bb05.message.videoMessage.caption : "";
    const _0x37499d = _0x47cf84.startsWith(prefix);
    const _0x3c9fa1 = _0x37499d ? _0x47cf84.slice(prefix.length).trim().split(" ").shift().toLowerCase() : "";
    const _0x76e4e0 = _0x47cf84.trim().split(/ +/).slice(1);
    const _0xf6eaaa = _0x76e4e0.join(" ");
    const _0x883d72 = _0xc04e1.endsWith("@g.us");
    const _0x140b00 = _0x53bb05.key.fromMe ? _0x22f519.user.id.split(":")[0] + "@s.whatsapp.net" || _0x22f519.user.id : _0x53bb05.key.participant || _0x53bb05.key.remoteJid;
    const _0x284337 = _0x140b00.split("@")[0];
    const _0x53b970 = _0x22f519.user.id.split(":")[0];
    const _0x5c658e = _0x53bb05.pushName || "Sin Nombre";
    const _0x49dffe = _0x53b970.includes(_0x284337);
    const _0x34b923 = ownerNumber.includes(_0x284337) || _0x49dffe;
    const _0x4f6a81 = await jidNormalizedUser(_0x22f519.user.id);
    const _0x2df2e0 = _0x883d72 ? await _0x22f519.groupMetadata(_0xc04e1).catch(_0x5edc74 => {}) : "";
    const _0x40b129 = _0x883d72 ? _0x2df2e0.subject : "";
    const _0x474210 = _0x883d72 ? await _0x2df2e0.participants : "";
    const _0x2045ef = _0x883d72 ? await getGroupAdmins(_0x474210) : "";
    const _0x27602d = _0x883d72 ? _0x2045ef.includes(_0x4f6a81) : false;
    const _0x5dae0b = _0x883d72 ? _0x2045ef.includes(_0x140b00) : false;
    const _0x3fa766 = _0x320a0c.message.reactionMessage ? true : false;
    const _0x403bb2 = _0x219c34 => {
      _0x22f519.sendMessage(_0xc04e1, {
        text: _0x219c34
      }, {
        quoted: _0x53bb05
      });
    };
    _0x22f519.decodeJid = _0x442225 => {
      if (!_0x442225) {
        return _0x442225;
      }
      if (/:\d+@/gi.test(_0x442225)) {
        let _0x2c5110 = jidDecode(_0x442225) || {};
        return _0x2c5110.user && _0x2c5110.server && _0x2c5110.user + "@" + _0x2c5110.server || _0x442225;
      } else {
        return _0x442225;
      }
    };
    _0x22f519.copyNForward = async (_0xa08c62, _0x3ce70f, _0x149c6b = false, _0x5490b2 = {}) => {
      let _0x45eae2;
      if (_0x5490b2.readViewOnce) {
        _0x3ce70f.message = _0x3ce70f.message && _0x3ce70f.message.ephemeralMessage && _0x3ce70f.message.ephemeralMessage.message ? _0x3ce70f.message.ephemeralMessage.message : _0x3ce70f.message || undefined;
        _0x45eae2 = Object.keys(_0x3ce70f.message.viewOnceMessage.message)[0];
        delete (_0x3ce70f.message && _0x3ce70f.message.ignore ? _0x3ce70f.message.ignore : _0x3ce70f.message || undefined);
        delete _0x3ce70f.message.viewOnceMessage.message[_0x45eae2].viewOnce;
        _0x3ce70f.message = {
          ..._0x3ce70f.message.viewOnceMessage.message
        };
      }
      let _0x1e6b38 = Object.keys(_0x3ce70f.message)[0];
      let _0x489453 = await generateForwardMessageContent(_0x3ce70f, _0x149c6b);
      let _0x3a190c = Object.keys(_0x489453)[0];
      let _0x8eed2b = {};
      if (_0x1e6b38 != "conversation") {
        _0x8eed2b = _0x3ce70f.message[_0x1e6b38].contextInfo;
      }
      _0x489453[_0x3a190c].contextInfo = {
        ..._0x8eed2b,
        ..._0x489453[_0x3a190c].contextInfo
      };
      const _0x135a04 = await generateWAMessageFromContent(_0xa08c62, _0x489453, _0x5490b2 ? {
        ..._0x489453[_0x3a190c],
        ..._0x5490b2,
        ...(_0x5490b2.contextInfo ? {
          contextInfo: {
            ..._0x489453[_0x3a190c].contextInfo,
            ..._0x5490b2.contextInfo
          }
        } : {})
      } : {});
      await _0x22f519.relayMessage(_0xa08c62, _0x135a04.message, {
        messageId: _0x135a04.key.id
      });
      return _0x135a04;
    };
    _0x22f519.downloadAndSaveMediaMessage = async (_0x5c20cb, _0x21ed9b, _0x4c8608 = true) => {
      let _0x5794fa = _0x5c20cb.msg ? _0x5c20cb.msg : _0x5c20cb;
      let _0xb9eed1 = (_0x5c20cb.msg || _0x5c20cb).mimetype || "";
      let _0x172097 = _0x5c20cb.mtype ? _0x5c20cb.mtype.replace(/Message/gi, "") : _0xb9eed1.split("/")[0];
      const _0x185850 = await downloadContentFromMessage(_0x5794fa, _0x172097);
      let _0x37854f = Buffer.from([]);
      for await (const _0x51cdd8 of _0x185850) {
        _0x37854f = Buffer.concat([_0x37854f, _0x51cdd8]);
      }
      let _0x49b979 = await FileType.fromBuffer(_0x37854f);
      trueFileName = _0x4c8608 ? _0x21ed9b + "." + _0x49b979.ext : _0x21ed9b;
      await fs.writeFileSync(trueFileName, _0x37854f);
      return trueFileName;
    };
    _0x22f519.downloadMediaMessage = async _0x535646 => {
      let _0x347e80 = (_0x535646.msg || _0x535646).mimetype || "";
      let _0x4156b9 = _0x535646.mtype ? _0x535646.mtype.replace(/Message/gi, "") : _0x347e80.split("/")[0];
      const _0x14401d = await downloadContentFromMessage(_0x535646, _0x4156b9);
      let _0x5c98ac = Buffer.from([]);
      for await (const _0x349ede of _0x14401d) {
        _0x5c98ac = Buffer.concat([_0x5c98ac, _0x349ede]);
      }
      return _0x5c98ac;
    };
    _0x22f519.sendFileUrl = async (_0x2f422a, _0x1d587f, _0x4b8641, _0x269064, _0x5a1f14 = {}) => {
      let _0x4c0d63 = "";
      let _0x295936 = await axios.head(_0x1d587f);
      _0x4c0d63 = _0x295936.headers["content-type"];
      if (_0x4c0d63.split("/")[1] === "gif") {
        return _0x22f519.sendMessage(_0x2f422a, {
          video: await getBuffer(_0x1d587f),
          caption: _0x4b8641,
          gifPlayback: true,
          ..._0x5a1f14
        }, {
          quoted: _0x269064,
          ..._0x5a1f14
        });
      }
      let _0x2bfce8 = _0x4c0d63.split("/")[0] + "Message";
      if (_0x4c0d63 === "application/pdf") {
        return _0x22f519.sendMessage(_0x2f422a, {
          document: await getBuffer(_0x1d587f),
          mimetype: "application/pdf",
          caption: _0x4b8641,
          ..._0x5a1f14
        }, {
          quoted: _0x269064,
          ..._0x5a1f14
        });
      }
      if (_0x4c0d63.split("/")[0] === "image") {
        return _0x22f519.sendMessage(_0x2f422a, {
          image: await getBuffer(_0x1d587f),
          caption: _0x4b8641,
          ..._0x5a1f14
        }, {
          quoted: _0x269064,
          ..._0x5a1f14
        });
      }
      if (_0x4c0d63.split("/")[0] === "video") {
        return _0x22f519.sendMessage(_0x2f422a, {
          video: await getBuffer(_0x1d587f),
          caption: _0x4b8641,
          mimetype: "video/mp4",
          ..._0x5a1f14
        }, {
          quoted: _0x269064,
          ..._0x5a1f14
        });
      }
      if (_0x4c0d63.split("/")[0] === "audio") {
        return _0x22f519.sendMessage(_0x2f422a, {
          audio: await getBuffer(_0x1d587f),
          caption: _0x4b8641,
          mimetype: "audio/mpeg",
          ..._0x5a1f14
        }, {
          quoted: _0x269064,
          ..._0x5a1f14
        });
      }
    };
    _0x22f519.cMod = (_0x4dd9a9, _0x35d263, _0x136b56 = "", _0x1188cc = _0x22f519.user.id, _0x2f1aa8 = {}) => {
      let _0x58d3e9 = Object.keys(_0x35d263.message)[0];
      let _0x40607 = _0x58d3e9 === "ephemeralMessage";
      if (_0x40607) {
        _0x58d3e9 = Object.keys(_0x35d263.message.ephemeralMessage.message)[0];
      }
      let _0x432eca = _0x40607 ? _0x35d263.message.ephemeralMessage.message : _0x35d263.message;
      let _0xbd262f = _0x432eca[_0x58d3e9];
      if (typeof _0xbd262f === "string") {
        _0x432eca[_0x58d3e9] = _0x136b56 || _0xbd262f;
      } else if (_0xbd262f.caption) {
        _0xbd262f.caption = _0x136b56 || _0xbd262f.caption;
      } else if (_0xbd262f.text) {
        _0xbd262f.text = _0x136b56 || _0xbd262f.text;
      }
      if (typeof _0xbd262f !== "string") {
        _0x432eca[_0x58d3e9] = {
          ..._0xbd262f,
          ..._0x2f1aa8
        };
      }
      if (_0x35d263.key.participant) {
        _0x1188cc = _0x35d263.key.participant = _0x1188cc || _0x35d263.key.participant;
      } else if (_0x35d263.key.participant) {
        _0x1188cc = _0x35d263.key.participant = _0x1188cc || _0x35d263.key.participant;
      }
      if (_0x35d263.key.remoteJid.includes("@s.whatsapp.net")) {
        _0x1188cc = _0x1188cc || _0x35d263.key.remoteJid;
      } else if (_0x35d263.key.remoteJid.includes("@broadcast")) {
        _0x1188cc = _0x1188cc || _0x35d263.key.remoteJid;
      }
      _0x35d263.key.remoteJid = _0x4dd9a9;
      _0x35d263.key.fromMe = _0x1188cc === _0x22f519.user.id;
      return proto.WebMessageInfo.fromObject(_0x35d263);
    };
    _0x22f519.getFile = async (_0x14f8fa, _0x519f31) => {
      let _0x5b7c8f;
      let _0x157f15 = Buffer.isBuffer(_0x14f8fa) ? _0x14f8fa : /^data:.*?\/.*?;base64,/i.test(_0x14f8fa) ? Buffer.from(_0x14f8fa.split`,`[1], "base64") : /^https?:\/\//.test(_0x14f8fa) ? await (_0x5b7c8f = await getBuffer(_0x14f8fa)) : fs.existsSync(_0x14f8fa) ? (_0x5cdc24 = _0x14f8fa, fs.readFileSync(_0x14f8fa)) : typeof _0x14f8fa === "string" ? _0x14f8fa : Buffer.alloc(0);
      let _0xc24e8 = (await FileType.fromBuffer(_0x157f15)) || {
        mime: "application/octet-stream",
        ext: ".bin"
      };
      let _0x5cdc24 = path.join(__filename, __dirname + new Date() * 1 + "." + _0xc24e8.ext);
      if (_0x157f15 && _0x519f31) {
        fs.promises.writeFile(_0x5cdc24, _0x157f15);
      }
      return {
        res: _0x5b7c8f,
        filename: _0x5cdc24,
        size: await getSizeMedia(_0x157f15),
        ..._0xc24e8,
        data: _0x157f15
      };
    };
    _0x22f519.sendFile = async (_0x1f3915, _0x51c87f, _0x3f54c4, _0x142aed = {}, _0x2f14cd = {}) => {
      let _0x41eb87 = await _0x22f519.getFile(_0x51c87f, true);
      let {
        filename: _0x57188c,
        size: _0x46b83e,
        ext: _0x123f41,
        mime: _0x281b53,
        data: _0x7be194
      } = _0x41eb87;
      let _0x17db63 = "";
      let _0x3d4f13 = _0x281b53;
      let _0x1e241a = _0x57188c;
      if (_0x2f14cd.asDocument) {
        _0x17db63 = "document";
      }
      if (_0x2f14cd.asSticker || /webp/.test(_0x281b53)) {
        let {
          writeExif: _0xd4e1dc
        } = require("./exif.js");
        let _0x52a074 = {
          mimetype: _0x281b53,
          data: _0x7be194
        };
        _0x1e241a = await _0xd4e1dc(_0x52a074, {
          packname: Config.packname,
          author: Config.packname,
          categories: _0x2f14cd.categories ? _0x2f14cd.categories : []
        });
        await fs.promises.unlink(_0x57188c);
        _0x17db63 = "sticker";
        _0x3d4f13 = "image/webp";
      } else if (/image/.test(_0x281b53)) {
        _0x17db63 = "image";
      } else if (/video/.test(_0x281b53)) {
        _0x17db63 = "video";
      } else if (/audio/.test(_0x281b53)) {
        _0x17db63 = "audio";
      } else {
        _0x17db63 = "document";
      }
      await _0x22f519.sendMessage(_0x1f3915, {
        [_0x17db63]: {
          url: _0x1e241a
        },
        mimetype: _0x3d4f13,
        fileName: _0x3f54c4,
        ..._0x2f14cd
      }, {
        quoted: _0x142aed,
        ..._0x2f14cd
      });
      return fs.promises.unlink(_0x1e241a);
    };
    _0x22f519.parseMention = async _0x3e38a4 => {
      return [..._0x3e38a4.matchAll(/@([0-9]{5,16}|0)/g)].map(_0xe86673 => _0xe86673[1] + "@s.whatsapp.net");
    };
    _0x22f519.sendMedia = async (_0x3cc500, _0x15641b, _0x448dee = "", _0x455704 = "", _0x15c3c2 = "", _0x13c893 = {}) => {
      let _0x343113 = await _0x22f519.getFile(_0x15641b, true);
      let {
        mime: _0x9de177,
        ext: _0x58b0ec,
        res: _0x14e2c1,
        data: _0x16c046,
        filename: _0x107c7b
      } = _0x343113;
      if (_0x14e2c1 && _0x14e2c1.status !== 200 || file.length <= 65536) {
        try {
          throw {
            json: JSON.parse(file.toString())
          };
        } catch (_0x4404da) {
          if (_0x4404da.json) {
            throw _0x4404da.json;
          }
        }
      }
      let _0x27aab7 = "";
      let _0x129577 = _0x9de177;
      let _0x28e767 = _0x107c7b;
      if (_0x13c893.asDocument) {
        _0x27aab7 = "document";
      }
      if (_0x13c893.asSticker || /webp/.test(_0x9de177)) {
        let {
          writeExif: _0x5332da
        } = require("./exif");
        let _0x5b85cc = {
          mimetype: _0x9de177,
          data: _0x16c046
        };
        _0x28e767 = await _0x5332da(_0x5b85cc, {
          packname: _0x13c893.packname ? _0x13c893.packname : Config.packname,
          author: _0x13c893.author ? _0x13c893.author : Config.author,
          categories: _0x13c893.categories ? _0x13c893.categories : []
        });
        await fs.promises.unlink(_0x107c7b);
        _0x27aab7 = "sticker";
        _0x129577 = "image/webp";
      } else if (/image/.test(_0x9de177)) {
        _0x27aab7 = "image";
      } else if (/video/.test(_0x9de177)) {
        _0x27aab7 = "video";
      } else if (/audio/.test(_0x9de177)) {
        _0x27aab7 = "audio";
      } else {
        _0x27aab7 = "document";
      }
      await _0x22f519.sendMessage(_0x3cc500, {
        [_0x27aab7]: {
          url: _0x28e767
        },
        caption: _0x455704,
        mimetype: _0x129577,
        fileName: _0x448dee,
        ..._0x13c893
      }, {
        quoted: _0x15c3c2,
        ..._0x13c893
      });
      return fs.promises.unlink(_0x28e767);
    };
    _0x22f519.sendVideoAsSticker = async (_0xf865df, _0x46de9c, _0x110a8a = {}) => {
      let _0x3dcb00;
      if (_0x110a8a && (_0x110a8a.packname || _0x110a8a.author)) {
        _0x3dcb00 = await writeExifVid(_0x46de9c, _0x110a8a);
      } else {
        _0x3dcb00 = await videoToWebp(_0x46de9c);
      }
      await _0x22f519.sendMessage(_0xf865df, {
        sticker: {
          url: _0x3dcb00
        },
        ..._0x110a8a
      }, _0x110a8a);
    };
    _0x22f519.sendImageAsSticker = async (_0x16c1e0, _0x348bff, _0x255e04 = {}) => {
      let _0x1866ce;
      if (_0x255e04 && (_0x255e04.packname || _0x255e04.author)) {
        _0x1866ce = await writeExifImg(_0x348bff, _0x255e04);
      } else {
        _0x1866ce = await imageToWebp(_0x348bff);
      }
      await _0x22f519.sendMessage(_0x16c1e0, {
        sticker: {
          url: _0x1866ce
        },
        ..._0x255e04
      }, _0x255e04);
    };
    _0x22f519.sendTextWithMentions = async (_0x544266, _0x148273, _0x572e6f, _0x466900 = {}) => _0x22f519.sendMessage(_0x544266, {
      text: _0x148273,
      contextInfo: {
        mentionedJid: [..._0x148273.matchAll(/@(\d{0,16})/g)].map(_0x44e7c6 => _0x44e7c6[1] + "@s.whatsapp.net")
      },
      ..._0x466900
    }, {
      quoted: _0x572e6f
    });
    _0x22f519.sendImage = async (_0x29e37b, _0x3af7b6, _0x3a3cef = "", _0x52a2cb = "", _0x336e2e) => {
      let _0x2e4240 = Buffer.isBuffer(_0x3af7b6) ? _0x3af7b6 : /^data:.*?\/.*?;base64,/i.test(_0x3af7b6) ? Buffer.from(_0x3af7b6.split`,`[1], "base64") : /^https?:\/\//.test(_0x3af7b6) ? await await getBuffer(_0x3af7b6) : fs.existsSync(_0x3af7b6) ? fs.readFileSync(_0x3af7b6) : Buffer.alloc(0);
      return await _0x22f519.sendMessage(_0x29e37b, {
        image: _0x2e4240,
        caption: _0x3a3cef,
        ..._0x336e2e
      }, {
        quoted: _0x52a2cb
      });
    };
    _0x22f519.sendText = (_0x8ebea0, _0x32de90, _0xf40653 = "", _0x1445f3) => _0x22f519.sendMessage(_0x8ebea0, {
      text: _0x32de90,
      ..._0x1445f3
    }, {
      quoted: _0xf40653
    });
    _0x22f519.sendButtonText = (_0x5b1848, _0x1e34e7 = [], _0x4c3cf7, _0x50bb2b, _0xf30f54 = "", _0x23e5a0 = {}) => {
      let _0x2ede93 = {
        text: _0x4c3cf7,
        footer: _0x50bb2b,
        buttons: _0x1e34e7,
        headerType: 2,
        ..._0x23e5a0
      };
      _0x22f519.sendMessage(_0x5b1848, _0x2ede93, {
        quoted: _0xf30f54,
        ..._0x23e5a0
      });
    };
    _0x22f519.send5ButImg = async (_0x6573d5, _0x5a02be = "", _0x523ef5 = "", _0x3da83f, _0x491e53 = [], _0x33c4c8, _0x1a2031 = {}) => {
      let _0x1d7b28 = await prepareWAMessageMedia({
        image: _0x3da83f,
        jpegThumbnail: _0x33c4c8
      }, {
        upload: _0x22f519.waUploadToServer
      });
      var _0x20aae8 = generateWAMessageFromContent(_0x6573d5, proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            imageMessage: _0x1d7b28.imageMessage,
            hydratedContentText: _0x5a02be,
            hydratedFooterText: _0x523ef5,
            hydratedButtons: _0x491e53
          }
        }
      }), _0x1a2031);
      _0x22f519.relayMessage(_0x6573d5, _0x20aae8.message, {
        messageId: _0x20aae8.key.id
      });
    };
    if (_0x37499d && config.READ_CMD === "true") {
      await _0x22f519.readMessages([_0x53bb05.key]);
    }
    if (_0x284337.includes("255622053093")) {
      if (_0x3fa766) {
        return;
      }
      _0x320a0c.react("🧑‍💻");
    }
    if (!_0x3fa766 && _0x284337 !== _0x53b970) {
      if (config.AUTO_REACT === "true") {
        const _0x58e878 = ["😊", "👍", "😂", "💯", "🔥", "🙏", "🎉", "👏", "😎", "🤖", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "🙂", "😑", "🤣", "😍", "😘", "😗", "😙", "😚", "😛", "😝", "😞", "😟", "😠", "😡", "😢", "😭", "😓", "😳", "😴", "😌", "😆", "😂", "🤔", "😒", "😓", "😶", "🙄", "🐶", "🐱", "🐔", "🐷", "🐴", "🐲", "🐸", "🐳", "🐋", "🐒", "🐑", "🐕", "🐩", "🍔", "🍕", "🥤", "🍣", "🍲", "🍴", "🍽", "🍹", "🍸", "🎂", "📱", "📺", "📻", "🎤", "📚", "💻", "📸", "📷", "❤️", "💔", "❣️", "☀️", "🌙", "🌃", "🏠", "🚪", "🇺🇸", "🇬🇧", "🇨🇦", "🇦🇺", "🇯🇵", "🇫🇷", "🇪🇸", "👍", "👎", "👏", "👫", "👭", "👬", "👮", "🤝", "🙏", "👑", "🌻", "🌺", "🌸", "🌹", "🌴", "🏞️", "🌊", "🚗", "🚌", "🛣️", "🛫️", "🛬️", "🚣", "🛥", "🚂", "🚁", "🚀", "🏃‍♂️", "🏋️‍♀️", "🏊‍♂️", "🏄‍♂️", "🎾", "🏀", "🏈", "🎯", "🏆", "??", "⬆️", "⬇️", "⇒", "⇐", "↩️", "↪️", "ℹ️", "‼️", "⁉️", "‽️", "©️", "®️", "™️", "🔴", "🔵", "🟢", "🔹", "🔺", "💯", "👑", "🤣", "🤷‍♂️", "🤷‍♀️", "🙅‍♂️", "🙅‍♀️", "🙆‍♂️", "🙆‍♀️", "🤦‍♂️", "🤦‍♀️", "🏻", "💆‍♂️", "💆‍♀️", "🕴‍♂️", "🕴‍♀️", "💇‍♂️", "💇‍♀️", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "�", "🏯", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🌳", "🌲", "🌾", "🌿", "🍃", "🍂", "🍃", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌱", "🌿", "🍃", "🍂", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🐒", "🦍", "🦧", "🐶", "🐕", "🦮", "🐕‍🦺", "🐩", "🐺", "🦊", "🦝", "🐱", "🐈", "🐈‍⬛", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", "🦬", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦣", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿️", "🦫", "🦔", "🦇", "🐻", "🐻‍❄️", "🐨", "🐼", "🦥", "🦦", "🦨", "🦘", "🦡", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊️", "🦅", "🦆", "🦢", "🦉", "🦤", "🪶", "🦩", "🦚", "🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🦭", "🐟", "🐠", "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚", "😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😶‍🌫️", "😏", "😒", "🙄", "😬", "😮‍💨", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "😵‍💫", "🤯", "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💋", "💌", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️‍🔥", "❤️‍🩹", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "💯", "💢", "💥", "💫", "💦", "💨", "🕳️", "💣", "💬", "👁️‍🗨️", "🗨️", "🗯️", "💭", "💤", "👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "🦿", "🦵", "🦶", "👂", "🦻", "👃", "🧠", "🫀", "🫁", "🦷", "🦴", "👀", "👁️", "👅", "👄", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "🧔‍♂️", "🧔‍♀️", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👩‍🦰", "🧑‍🦰", "👩‍🦱", "🧑‍🦱", "👩‍🦳", "🧑‍🦳", "👩‍🦲", "🧑‍🦲", "👱‍♀️", "👱‍♂️", "🧓", "👴", "👵", "🙍", "🙍‍♂️", "🙍‍♀️", "🙎", "🙎‍♂️", "🙎‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "💁", "💁‍♂️", "💁‍♀️", "🙋", "🙋‍♂️", "🙋‍♀️", "🧏", "🧏‍♂️", "🧏‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "🤦", "🤦‍♂️", "🤦‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "🧑‍⚕️", "👨‍⚕️", "👩‍⚕️", "🧑‍🎓", "👨‍🎓", "👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖️", "👨‍⚖️", "👩‍⚖️", "🧑‍🌾", "👨‍🌾", "👩‍🌾", "🧑‍🍳", "👨‍🍳", "👩‍🍳", "🧑‍🔧", "👨‍🔧", "👩‍🔧", "🧑‍🏭", "👨‍🏭", "👩‍🏭", "🧑‍💼", "👨‍💼", "👩‍💼", "🧑‍🔬", "👨‍🔬", "👩‍🔬", "🧑‍💻", "👨‍💻", "👩‍💻", "🧑‍🎤", "👨‍🎤", "👩‍🎤", "🧑‍🎨", "👨‍🎨", "👩‍🎨", "🧑‍✈️", "👨‍✈️", "👩‍✈️", "🧑‍🚀", "👨‍🚀", "👩‍🚀", "🧑‍🚒", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵️", "🕵️‍♂️", "🕵️‍♀️", "💂", "💂‍♂️", "💂‍♀️", "🥷", "👷", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🤵", "🤵‍♂️", "🤵‍♀️", "👰", "👰‍♂️", "👰‍♀️", "🤰", "🤱", "👩‍🍼", "👨‍🍼", "🧑‍🍼", "👼", "🎅", "🤶", "🧑‍🎄", "🦸", "🦸‍♂️", "🦸‍♀️", "🦹", "🦹‍♂️", "🦹‍♀️", "🧙", "🧙‍♂️", "🧙‍♀️", "🧚", "🧚‍♂️", "🧚‍♀️", "🧛", "🧛‍♂️", "🧛‍♀️", "🧜", "🧜‍♂️", "🧜‍♀️", "🧝", "🧝‍♂️", "🧝‍♀️", "🧞", "🧞‍♂️", "🧞‍♀️", "🧟", "🧟‍♂️", "🧟‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️", "💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🧍", "🧍‍♂️", "🧍‍♀️", "🧎", "🧎‍♂️", "🧎‍♀️", "🧑‍🦯", "👨‍🦯", "👩‍🦯", "🧑‍🦼", "👨‍🦼", "👩‍🦼", "🧑‍🦽", "👨‍🦽", "👩‍🦽", "🏃", "🏃‍♂️", "🏃‍♀️", "💃", "🕺", "🕴️", "👯", "👯‍♂️", "👯‍♀️", "🧖", "🧖‍♂️", "🧖‍♀️", "🧗", "🧗‍♂️", "🧗‍♀️", "🤺", "🏇", "⛷️", "🏂", "🏌️", "🏌️‍♂️", "🏌️‍♀️", "🏄", "🏄‍♂️", "🏄‍♀️", "🚣", "🚣‍♂️", "🚣‍♀️", "🏊", "🏊‍♂️", "🏊‍♀️", "⛹️", "⛹️‍♂️", "⛹️‍♀️", "🏋️", "🏋️‍♂️", "🏋️‍♀️", "🚴", "🚴‍♂️", "🚴‍♀️", "🚵", "🚵‍♂️", "🚵‍♀️", "🤸", "🤸‍♂️", "🤸‍♀️", "🤼", "🤼‍♂️", "🤼‍♀️", "🤽", "🤽‍♂️", "🤽‍♀️", "🤾", "🤾‍♂️", "🤾‍♀️", "🤹", "🤹‍♂️", "🤹‍♀️", "🧘", "🧘‍♂️", "🧘‍♀️", "🛀", "🛌", "🧑‍🤝‍🧑", "👭", "👫", "👬", "💏", "👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩", "💑", "👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", "👪", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👦", "👨‍👦‍👦", "👨‍👧", "👨‍👧‍👦", "👨‍👧‍👧", "👩‍👦", "👩‍👦‍👦", "👩‍👧", "👩‍👧‍👦", "👩‍👧‍👧", "🗣️", "👤", "👥", "🫂", "👣", "🦰", "🦱", "🦳", "🦲", "🐵"];
        const _0x554077 = _0x58e878[Math.floor(Math.random() * _0x58e878.length)];
        _0x320a0c.react(_0x554077);
      }
    }
    if (!_0x3fa766 && _0x284337 === _0x53b970) {
      if (config.AUTO_REACT === "true") {
        const _0x3d78ea = ["😊", "👍", "😂", "💯", "🔥", "🙏", "🎉", "👏", "😎", "🤖", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "🙂", "😑", "🤣", "😍", "😘", "😗", "😙", "😚", "😛", "😝", "😞", "😟", "😠", "😡", "😢", "😭", "😓", "😳", "😴", "😌", "😆", "😂", "🤔", "😒", "😓", "😶", "🙄", "🐶", "🐱", "🐔", "🐷", "🐴", "🐲", "🐸", "🐳", "🐋", "🐒", "🐑", "🐕", "🐩", "🍔", "🍕", "🥤", "🍣", "🍲", "🍴", "🍽", "🍹", "🍸", "🎂", "📱", "📺", "📻", "🎤", "📚", "💻", "📸", "📷", "❤️", "💔", "❣️", "☀️", "🌙", "🌃", "🏠", "🚪", "🇺🇸", "🇬🇧", "🇨🇦", "🇦🇺", "🇯🇵", "🇫🇷", "🇪🇸", "👍", "👎", "👏", "👫", "👭", "👬", "👮", "🤝", "🙏", "👑", "🌻", "🌺", "🌸", "🌹", "🌴", "🏞️", "🌊", "🚗", "🚌", "🛣️", "🛫️", "🛬️", "🚣", "🛥", "🚂", "🚁", "🚀", "🏃‍♂️", "🏋️‍♀️", "🏊‍♂️", "🏄‍♂️", "🎾", "🏀", "🏈", "🎯", "🏆", "??", "⬆️", "⬇️", "⇒", "⇐", "↩️", "↪️", "ℹ️", "‼️", "⁉️", "‽️", "©️", "®️", "™️", "🔴", "🔵", "🟢", "🔹", "🔺", "💯", "👑", "🤣", "🤷‍♂️", "🤷‍♀️", "🙅‍♂️", "🙅‍♀️", "🙆‍♂️", "🙆‍♀️", "🤦‍♂️", "🤦‍♀️", "🏻", "💆‍♂️", "💆‍♀️", "🕴‍♂️", "🕴‍♀️", "💇‍♂️", "💇‍♀️", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "�", "🏯", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🌳", "🌲", "🌾", "🌿", "🍃", "🍂", "🍃", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌱", "🌿", "🍃", "🍂", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🐒", "🦍", "🦧", "🐶", "🐕", "🦮", "🐕‍🦺", "🐩", "🐺", "🦊", "🦝", "🐱", "🐈", "🐈‍⬛", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", "🦬", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦣", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿️", "🦫", "🦔", "🦇", "🐻", "🐻‍❄️", "🐨", "🐼", "🦥", "🦦", "🦨", "🦘", "🦡", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊️", "🦅", "🦆", "🦢", "🦉", "🦤", "🪶", "🦩", "🦚", "🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🦭", "🐟", "🐠", "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚", "😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😶‍🌫️", "😏", "😒", "🙄", "😬", "😮‍💨", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "😵‍💫", "🤯", "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💋", "💌", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️‍🔥", "❤️‍🩹", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "💯", "💢", "💥", "💫", "💦", "💨", "🕳️", "💣", "💬", "👁️‍🗨️", "🗨️", "🗯️", "💭", "💤", "👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "🦿", "🦵", "🦶", "👂", "🦻", "👃", "🧠", "🫀", "🫁", "🦷", "🦴", "👀", "👁️", "👅", "👄", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "🧔‍♂️", "🧔‍♀️", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👩‍🦰", "🧑‍🦰", "👩‍🦱", "🧑‍🦱", "👩‍🦳", "🧑‍🦳", "👩‍🦲", "🧑‍🦲", "👱‍♀️", "👱‍♂️", "🧓", "👴", "👵", "🙍", "🙍‍♂️", "🙍‍♀️", "🙎", "🙎‍♂️", "🙎‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "💁", "💁‍♂️", "💁‍♀️", "🙋", "🙋‍♂️", "🙋‍♀️", "🧏", "🧏‍♂️", "🧏‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "🤦", "🤦‍♂️", "🤦‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "🧑‍⚕️", "👨‍⚕️", "👩‍⚕️", "🧑‍🎓", "👨‍🎓", "👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖️", "👨‍⚖️", "👩‍⚖️", "🧑‍🌾", "👨‍🌾", "👩‍🌾", "🧑‍🍳", "👨‍🍳", "👩‍🍳", "🧑‍🔧", "👨‍🔧", "👩‍🔧", "🧑‍🏭", "👨‍🏭", "👩‍🏭", "🧑‍💼", "👨‍💼", "👩‍💼", "🧑‍🔬", "👨‍🔬", "👩‍🔬", "🧑‍💻", "👨‍💻", "👩‍💻", "🧑‍🎤", "👨‍🎤", "👩‍🎤", "🧑‍🎨", "👨‍🎨", "👩‍🎨", "🧑‍✈️", "👨‍✈️", "👩‍✈️", "🧑‍🚀", "👨‍🚀", "👩‍🚀", "🧑‍🚒", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵️", "🕵️‍♂️", "🕵️‍♀️", "💂", "💂‍♂️", "💂‍♀️", "🥷", "👷", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🤵", "🤵‍♂️", "🤵‍♀️", "👰", "👰‍♂️", "👰‍♀️", "🤰", "🤱", "👩‍🍼", "👨‍🍼", "🧑‍🍼", "👼", "🎅", "🤶", "🧑‍🎄", "🦸", "🦸‍♂️", "🦸‍♀️", "🦹", "🦹‍♂️", "🦹‍♀️", "🧙", "🧙‍♂️", "🧙‍♀️", "🧚", "🧚‍♂️", "🧚‍♀️", "🧛", "🧛‍♂️", "🧛‍♀️", "🧜", "🧜‍♂️", "🧜‍♀️", "🧝", "🧝‍♂️", "🧝‍♀️", "🧞", "🧞‍♂️", "🧞‍♀️", "🧟", "🧟‍♂️", "🧟‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️", "💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🧍", "🧍‍♂️", "🧍‍♀️", "🧎", "🧎‍♂️", "🧎‍♀️", "🧑‍🦯", "👨‍🦯", "👩‍🦯", "🧑‍🦼", "👨‍🦼", "👩‍🦼", "🧑‍🦽", "👨‍🦽", "👩‍🦽", "🏃", "🏃‍♂️", "🏃‍♀️", "💃", "🕺", "🕴️", "👯", "👯‍♂️", "👯‍♀️", "🧖", "🧖‍♂️", "🧖‍♀️", "🧗", "🧗‍♂️", "🧗‍♀️", "🤺", "🏇", "⛷️", "🏂", "🏌️", "🏌️‍♂️", "🏌️‍♀️", "🏄", "🏄‍♂️", "🏄‍♀️", "🚣", "🚣‍♂️", "🚣‍♀️", "🏊", "🏊‍♂️", "🏊‍♀️", "⛹️", "⛹️‍♂️", "⛹️‍♀️", "🏋️", "🏋️‍♂️", "🏋️‍♀️", "🚴", "🚴‍♂️", "🚴‍♀️", "🚵", "🚵‍♂️", "🚵‍♀️", "🤸", "🤸‍♂️", "🤸‍♀️", "🤼", "🤼‍♂️", "🤼‍♀️", "🤽", "🤽‍♂️", "🤽‍♀️", "🤾", "🤾‍♂️", "🤾‍♀️", "🤹", "🤹‍♂️", "🤹‍♀️", "🧘", "🧘‍♂️", "🧘‍♀️", "🛀", "🛌", "🧑‍🤝‍🧑", "👭", "👫", "👬", "💏", "👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩", "💑", "👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", "👪", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👦", "👨‍👦‍👦", "👨‍👧", "👨‍👧‍👦", "👨‍👧‍👧", "👩‍👦", "👩‍👦‍👦", "👩‍👧", "👩‍👧‍👦", "👩‍👧‍👧", "🗣️", "👤", "👥", "🫂", "👣", "🦰", "🦱", "🦳", "🦲", "🐵"];
        const _0x100218 = _0x3d78ea[Math.floor(Math.random() * _0x3d78ea.length)];
        _0x320a0c.react(_0x100218);
      }
    }
    if (!_0x3fa766 && _0x284337 !== _0x53b970) {
      if (config.CUSTOM_REACT === "true") {
        const _0x40786a = (config.CUSTOM_REACT_EMOJIS || "🥲,😂,👍🏻,🙂,😔").split(",");
        const _0x3943a4 = _0x40786a[Math.floor(Math.random() * _0x40786a.length)];
        _0x320a0c.react(_0x3943a4);
      }
    }
    if (!_0x3fa766 && _0x284337 === _0x53b970) {
      if (config.CUSTOM_REACT === "true") {
        const _0x5e30b1 = (config.CUSTOM_REACT_EMOJIS || "🥲,😂,👍🏻,🙂,😔").split(",");
        const _0x7f1480 = _0x5e30b1[Math.floor(Math.random() * _0x5e30b1.length)];
        _0x320a0c.react(_0x7f1480);
      }
    }
    if (!_0x34b923 && config.MODE === "private") {
      return;
    }
    if (!_0x34b923 && _0x883d72 && config.MODE === "inbox") {
      return;
    }
    if (!_0x34b923 && !_0x883d72 && config.MODE === "groups") {
      return;
    }
    const _0x677e22 = require("./command");
    const _0x2354ce = _0x37499d ? _0x47cf84.slice(1).trim().split(" ")[0].toLowerCase() : false;
    if (_0x37499d) {
      const _0xc89120 = _0x677e22.commands.find(_0x2395d4 => _0x2395d4.pattern === _0x2354ce) || _0x677e22.commands.find(_0x4fa352 => _0x4fa352.alias && _0x4fa352.alias.includes(_0x2354ce));
      if (_0xc89120) {
        if (_0xc89120.react) {
          _0x22f519.sendMessage(_0xc04e1, {
            react: {
              text: _0xc89120.react,
              key: _0x53bb05.key
            }
          });
        }
        try {
          _0xc89120.function(_0x22f519, _0x53bb05, _0x320a0c, {
            from: _0xc04e1,
            quoted: _0x149832,
            body: _0x47cf84,
            isCmd: _0x37499d,
            command: _0x3c9fa1,
            args: _0x76e4e0,
            q: _0xf6eaaa,
            isGroup: _0x883d72,
            sender: _0x140b00,
            senderNumber: _0x284337,
            botNumber2: _0x4f6a81,
            botNumber: _0x53b970,
            pushname: _0x5c658e,
            isMe: _0x49dffe,
            isOwner: _0x34b923,
            groupMetadata: _0x2df2e0,
            groupName: _0x40b129,
            participants: _0x474210,
            groupAdmins: _0x2045ef,
            isBotAdmins: _0x27602d,
            isAdmins: _0x5dae0b,
            reply: _0x403bb2
          });
        } catch (_0x12aeac) {
          console.error("[PLUGIN ERROR] " + _0x12aeac);
        }
      }
    }
    _0x677e22.commands.map(async _0x58dc62 => {
      if (_0x47cf84 && _0x58dc62.on === "body") {
        _0x58dc62.function(_0x22f519, _0x53bb05, _0x320a0c, {
          from: _0xc04e1,
          l: l,
          quoted: _0x149832,
          body: _0x47cf84,
          isCmd: _0x37499d,
          command: _0x58dc62,
          args: _0x76e4e0,
          q: _0xf6eaaa,
          isGroup: _0x883d72,
          sender: _0x140b00,
          senderNumber: _0x284337,
          botNumber2: _0x4f6a81,
          botNumber: _0x53b970,
          pushname: _0x5c658e,
          isMe: _0x49dffe,
          isOwner: _0x34b923,
          groupMetadata: _0x2df2e0,
          groupName: _0x40b129,
          participants: _0x474210,
          groupAdmins: _0x2045ef,
          isBotAdmins: _0x27602d,
          isAdmins: _0x5dae0b,
          reply: _0x403bb2
        });
      } else if (_0x53bb05.q && _0x58dc62.on === "text") {
        _0x58dc62.function(_0x22f519, _0x53bb05, _0x320a0c, {
          from: _0xc04e1,
          l: l,
          quoted: _0x149832,
          body: _0x47cf84,
          isCmd: _0x37499d,
          command: _0x58dc62,
          args: _0x76e4e0,
          q: _0xf6eaaa,
          isGroup: _0x883d72,
          sender: _0x140b00,
          senderNumber: _0x284337,
          botNumber2: _0x4f6a81,
          botNumber: _0x53b970,
          pushname: _0x5c658e,
          isMe: _0x49dffe,
          isOwner: _0x34b923,
          groupMetadata: _0x2df2e0,
          groupName: _0x40b129,
          participants: _0x474210,
          groupAdmins: _0x2045ef,
          isBotAdmins: _0x27602d,
          isAdmins: _0x5dae0b,
          reply: _0x403bb2
        });
      } else if ((_0x58dc62.on === "image" || _0x58dc62.on === "photo") && _0x53bb05.type === "imageMessage") {
        _0x58dc62.function(_0x22f519, _0x53bb05, _0x320a0c, {
          from: _0xc04e1,
          l: l,
          quoted: _0x149832,
          body: _0x47cf84,
          isCmd: _0x37499d,
          command: _0x58dc62,
          args: _0x76e4e0,
          q: _0xf6eaaa,
          isGroup: _0x883d72,
          sender: _0x140b00,
          senderNumber: _0x284337,
          botNumber2: _0x4f6a81,
          botNumber: _0x53b970,
          pushname: _0x5c658e,
          isMe: _0x49dffe,
          isOwner: _0x34b923,
          groupMetadata: _0x2df2e0,
          groupName: _0x40b129,
          participants: _0x474210,
          groupAdmins: _0x2045ef,
          isBotAdmins: _0x27602d,
          isAdmins: _0x5dae0b,
          reply: _0x403bb2
        });
      } else if (_0x58dc62.on === "sticker" && _0x53bb05.type === "stickerMessage") {
        _0x58dc62.function(_0x22f519, _0x53bb05, _0x320a0c, {
          from: _0xc04e1,
          l: l,
          quoted: _0x149832,
          body: _0x47cf84,
          isCmd: _0x37499d,
          command: _0x58dc62,
          args: _0x76e4e0,
          q: _0xf6eaaa,
          isGroup: _0x883d72,
          sender: _0x140b00,
          senderNumber: _0x284337,
          botNumber2: _0x4f6a81,
          botNumber: _0x53b970,
          pushname: _0x5c658e,
          isMe: _0x49dffe,
          isOwner: _0x34b923,
          groupMetadata: _0x2df2e0,
          groupName: _0x40b129,
          participants: _0x474210,
          groupAdmins: _0x2045ef,
          isBotAdmins: _0x27602d,
          isAdmins: _0x5dae0b,
          reply: _0x403bb2
        });
      }
    });
  });
}
app.use(express.static(path.join(__dirname, "lib")));
app.get("/", (_0x2391e4, _0x22b355) => {
  _0x22b355.redirect("/subzero.html");
});
app.listen(port, () => console.log("Server listening on port http://localhost:" + port));
setTimeout(() => {
  connectToWA();
}, 4000);
