function f() {
  console.log("Hello World!");
}
f();
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
const v = console.log;
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
const fs2 = require("fs");
const fluentFfmpeg = require("fluent-ffmpeg");
const pino = require("pino");
const config2 = require("./config");
const qrcodeTerminal = require("qrcode-terminal");
const waStickerFormatter = require("wa-sticker-formatter");
const util2 = require("util");
const {
  sms,
  downloadMediaMessage
} = require("./lib/msg");
const fileType = require("file-type");
const axios2 = require("axios");
const {
  File
} = require("megajs");
const {
  fromBuffer
} = require("file-type");
const bodyParser = require("body-parser");
const os2 = require("os");
const crypto = require("crypto");
const path2 = require("path");
const v2 = config2.PREFIX;
const v3 = ["255622053093"];
const v4 = path2.join(os2.tmpdir(), "cache-temp");
if (!fs2.existsSync(v4)) {
  fs2.mkdirSync(v4);
}
const vF = () => {
  fs2.readdir(v4, (p, p2) => {
    if (p) {
      throw p;
    }
    for (const v5 of p2) {
      fs2.unlink(path2.join(v4, v5), p3 => {
        if (p3) {
          throw p3;
        }
      });
    }
  });
};
setInterval(vF, 300000);
if (!fs2.existsSync(__dirname + "/sessions/creds.json")) {
  if (!config2.SESSION_ID) {
    return console.log("Please add your session to SESSION_ID env !!");
  }
  const v6 = config2.SESSION_ID.replace("GMAX-MD~", "");
  const v7 = File.fromURL("https://mega.nz/file/" + v6);
  v7.download((p4, p5) => {
    if (p4) {
      throw p4;
    }
    fs2.writeFile(__dirname + "/sessions/creds.json", p5, () => {
      console.log("Gmax Session downloaded ✅");
    });
  });
}
const express2 = require("express");
const vExpress2 = express2();
const v8 = process.env.PORT || 7860;
async function f2() {
  console.log("[❄️] Gmax Connecting to WhatsApp ⏳️...");
  const {
    state: _0x31fb0f,
    saveCreds: _0x467b0d
  } = await useMultiFileAuthState(__dirname + "/sessions/");
  var {
    version: _0x115701
  } = await fetchLatestBaileysVersion();
  const vMakeWASocket = makeWASocket({
    logger: pino({
      level: "silent"
    }),
    printQRInTerminal: false,
    browser: Browsers.macOS("Firefox"),
    syncFullHistory: true,
    auth: _0x31fb0f,
    version: _0x115701
  });
  vMakeWASocket.ev.on("connection.update", p6 => {
    const {
      connection: _0x553934,
      lastDisconnect: _0x496aab
    } = p6;
    if (_0x553934 === "close") {
      if (_0x496aab.error.output.statusCode !== DisconnectReason.loggedOut) {
        f2();
      }
    } else if (_0x553934 === "open") {
      console.log("[❄️] 🛠️ Installing Plugins.");
      const path3 = require("path");
      fs2.readdirSync("./plugins/").forEach(p7 => {
        if (path3.extname(p7).toLowerCase() == ".js") {
          require("./plugins/" + p7);
        }
      });
      console.log("[❄️] Plugins installed successful ✅");
      console.log("[❄️] Gmax MD connected to whatsapp ✅");
      let v9 = "*Hi Owner😇, Congrats Gmax Connected Successfully! 🚀* \n\n> Light, Cold, Icy, Fast & Rich Loaded With Features, SubZero W.A Bot.\n\n *Thanks for using GMAX-MD ❄️* \n\n> Join WhatsApp Channel :- 🛠️\n \nhttps://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x\n\n- *ყσµɾ ɓσƭ ρɾεƒเא ➜*  " + v2 + "\n\nDont forget to  star our repo☺ \n\nhttps://github.com/gmaxtech2024/GMAX-MD \n\n> © 🎐ᴘϙᴡᴇʀᴇᴅ ʙʏ sɪʀ ɢᴍᴀx⚡";
      vMakeWASocket.sendMessage(vMakeWASocket.user.id, {
        image: {
          url: "https://i.ibb.co/8NBwB9P/mrfrankofc.jpg"
        },
        caption: v9
      });
    }
  });
  vMakeWASocket.ev.on("creds.update", _0x467b0d);
  vMakeWASocket.ev.on("messages.upsert", async p8 => {
    p8 = p8.messages[0];
    if (!p8.message) {
      return;
    }
    p8.message = getContentType(p8.message) === "ephemeralMessage" ? p8.message.ephemeralMessage.message : p8.message;
    if (config2.READ_MESSAGE === "true") {
      await vMakeWASocket.readMessages([p8.key]);
      console.log("Marked message from " + p8.key.remoteJid + " as read.");
    }
    if (p8.message.viewOnceMessageV2) {
      p8.message = getContentType(p8.message) === "ephemeralMessage" ? p8.message.ephemeralMessage.message : p8.message;
    }
    if (p8.key && p8.key.remoteJid === "status@broadcast" && config2.AUTO_STATUS_SEEN === "true") {
      await vMakeWASocket.readMessages([p8.key]);
    }
    if (p8.key && p8.key.remoteJid === "status@broadcast" && config2.AUTO_STATUS_REPLY === "true") {
      const v10 = p8.key.participant;
      const v11 = "" + config2.AUTO_STATUS_MSG;
      await vMakeWASocket.sendMessage(v10, {
        text: v11,
        react: {
          text: "💜",
          key: p8.key
        }
      }, {
        quoted: p8
      });
    }
    let v12 = p8.message.viewOnceMessageV2;
    let v13 = p8.mtype === "viewOnceMessage";
    if (v12 && config2.ANTI_VV === "true") {
      if (v12.message.imageMessage) {
        let v14 = v12.message.imageMessage.caption;
        let v15 = await vMakeWASocket.downloadAndSaveMediaMessage(v12.message.imageMessage);
        return vMakeWASocket.sendMessage("255622053093@s.whatsapp.net", {
          image: {
            url: v15
          },
          caption: v14
        }, {
          quoted: p8
        });
      }
      if (v12.message.videoMessage) {
        let v16 = v12.message.videoMessage.caption;
        let v17 = await vMakeWASocket.downloadAndSaveMediaMessage(v12.message.videoMessage);
        return vMakeWASocket.sendMessage("255622053093@s.whatsapp.net", {
          video: {
            url: v17
          },
          caption: v16
        }, {
          quoted: p8
        });
      }
      if (v12.message.audioMessage) {
        let v18 = await vMakeWASocket.downloadAndSaveMediaMessage(v12.message.audioMessage);
        return vMakeWASocket.sendMessage("255622053093@s.whatsapp.net", {
          audio: {
            url: v18
          },
          caption: cap
        }, {
          quoted: p8
        });
      }
    }
    const vSms = sms(vMakeWASocket, p8);
    const vGetContentType = getContentType(p8.message);
    const v19 = JSON.stringify(p8.message);
    const v20 = p8.key.remoteJid;
    const v21 = vGetContentType == "extendedTextMessage" && p8.message.extendedTextMessage.contextInfo != null ? p8.message.extendedTextMessage.contextInfo.quotedMessage || [] : [];
    const v22 = vGetContentType === "conversation" ? p8.message.conversation : vGetContentType === "extendedTextMessage" ? p8.message.extendedTextMessage.text : vGetContentType == "imageMessage" && p8.message.imageMessage.caption ? p8.message.imageMessage.caption : vGetContentType == "videoMessage" && p8.message.videoMessage.caption ? p8.message.videoMessage.caption : "";
    const v23 = v22.startsWith(v2);
    const v24 = v23 ? v22.slice(v2.length).trim().split(" ").shift().toLowerCase() : "";
    const v25 = v22.trim().split(/ +/).slice(1);
    const v26 = v25.join(" ");
    const v27 = v20.endsWith("@g.us");
    const v28 = p8.key.fromMe ? vMakeWASocket.user.id.split(":")[0] + "@s.whatsapp.net" || vMakeWASocket.user.id : p8.key.participant || p8.key.remoteJid;
    const v29 = v28.split("@")[0];
    const v30 = vMakeWASocket.user.id.split(":")[0];
    const v31 = p8.pushName || "Sin Nombre";
    const v32 = v30.includes(v29);
    const v33 = v3.includes(v29) || v32;
    const v34 = await jidNormalizedUser(vMakeWASocket.user.id);
    const v35 = v27 ? await vMakeWASocket.groupMetadata(v20).catch(p9 => {}) : "";
    const v36 = v27 ? v35.subject : "";
    const v37 = v27 ? await v35.participants : "";
    const v38 = v27 ? await getGroupAdmins(v37) : "";
    const v39 = v27 ? v38.includes(v34) : false;
    const v40 = v27 ? v38.includes(v28) : false;
    const v41 = vSms.message.reactionMessage ? true : false;
    const vF2 = p10 => {
      vMakeWASocket.sendMessage(v20, {
        text: p10
      }, {
        quoted: p8
      });
    };
    vMakeWASocket.decodeJid = p11 => {
      if (!p11) {
        return p11;
      }
      if (/:\d+@/gi.test(p11)) {
        let v42 = jidDecode(p11) || {};
        return v42.user && v42.server && v42.user + "@" + v42.server || p11;
      } else {
        return p11;
      }
    };
    vMakeWASocket.copyNForward = async (p12, p13, p14 = false, p15 = {}) => {
      let v43;
      if (p15.readViewOnce) {
        p13.message = p13.message && p13.message.ephemeralMessage && p13.message.ephemeralMessage.message ? p13.message.ephemeralMessage.message : p13.message || undefined;
        v43 = Object.keys(p13.message.viewOnceMessage.message)[0];
        delete (p13.message && p13.message.ignore ? p13.message.ignore : p13.message || undefined);
        delete p13.message.viewOnceMessage.message[v43].viewOnce;
        p13.message = {
          ...p13.message.viewOnceMessage.message
        };
      }
      let v44 = Object.keys(p13.message)[0];
      let v45 = await generateForwardMessageContent(p13, p14);
      let v46 = Object.keys(v45)[0];
      let v47 = {};
      if (v44 != "conversation") {
        v47 = p13.message[v44].contextInfo;
      }
      v45[v46].contextInfo = {
        ...v47,
        ...v45[v46].contextInfo
      };
      const v48 = await generateWAMessageFromContent(p12, v45, p15 ? {
        ...v45[v46],
        ...p15,
        ...(p15.contextInfo ? {
          contextInfo: {
            ...v45[v46].contextInfo,
            ...p15.contextInfo
          }
        } : {})
      } : {});
      await vMakeWASocket.relayMessage(p12, v48.message, {
        messageId: v48.key.id
      });
      return v48;
    };
    vMakeWASocket.downloadAndSaveMediaMessage = async (p16, p17, p18 = true) => {
      let v49 = p16.msg ? p16.msg : p16;
      let v50 = (p16.msg || p16).mimetype || "";
      let v51 = p16.mtype ? p16.mtype.replace(/Message/gi, "") : v50.split("/")[0];
      const v52 = await downloadContentFromMessage(v49, v51);
      let v53 = Buffer.from([]);
      for await (const v54 of v52) {
        v53 = Buffer.concat([v53, v54]);
      }
      let v55 = await fileType.fromBuffer(v53);
      trueFileName = p18 ? p17 + "." + v55.ext : p17;
      await fs2.writeFileSync(trueFileName, v53);
      return trueFileName;
    };
    vMakeWASocket.downloadMediaMessage = async p19 => {
      let v56 = (p19.msg || p19).mimetype || "";
      let v57 = p19.mtype ? p19.mtype.replace(/Message/gi, "") : v56.split("/")[0];
      const v58 = await downloadContentFromMessage(p19, v57);
      let v59 = Buffer.from([]);
      for await (const v60 of v58) {
        v59 = Buffer.concat([v59, v60]);
      }
      return v59;
    };
    vMakeWASocket.sendFileUrl = async (p20, p21, p22, p23, p24 = {}) => {
      let v61 = "";
      let v62 = await axios2.head(p21);
      v61 = v62.headers["content-type"];
      if (v61.split("/")[1] === "gif") {
        return vMakeWASocket.sendMessage(p20, {
          video: await getBuffer(p21),
          caption: p22,
          gifPlayback: true,
          ...p24
        }, {
          quoted: p23,
          ...p24
        });
      }
      let v63 = v61.split("/")[0] + "Message";
      if (v61 === "application/pdf") {
        return vMakeWASocket.sendMessage(p20, {
          document: await getBuffer(p21),
          mimetype: "application/pdf",
          caption: p22,
          ...p24
        }, {
          quoted: p23,
          ...p24
        });
      }
      if (v61.split("/")[0] === "image") {
        return vMakeWASocket.sendMessage(p20, {
          image: await getBuffer(p21),
          caption: p22,
          ...p24
        }, {
          quoted: p23,
          ...p24
        });
      }
      if (v61.split("/")[0] === "video") {
        return vMakeWASocket.sendMessage(p20, {
          video: await getBuffer(p21),
          caption: p22,
          mimetype: "video/mp4",
          ...p24
        }, {
          quoted: p23,
          ...p24
        });
      }
      if (v61.split("/")[0] === "audio") {
        return vMakeWASocket.sendMessage(p20, {
          audio: await getBuffer(p21),
          caption: p22,
          mimetype: "audio/mpeg",
          ...p24
        }, {
          quoted: p23,
          ...p24
        });
      }
    };
    vMakeWASocket.cMod = (p25, p26, p27 = "", p28 = vMakeWASocket.user.id, p29 = {}) => {
      let v64 = Object.keys(p26.message)[0];
      let v65 = v64 === "ephemeralMessage";
      if (v65) {
        v64 = Object.keys(p26.message.ephemeralMessage.message)[0];
      }
      let v66 = v65 ? p26.message.ephemeralMessage.message : p26.message;
      let v67 = v66[v64];
      if (typeof v67 === "string") {
        v66[v64] = p27 || v67;
      } else if (v67.caption) {
        v67.caption = p27 || v67.caption;
      } else if (v67.text) {
        v67.text = p27 || v67.text;
      }
      if (typeof v67 !== "string") {
        v66[v64] = {
          ...v67,
          ...p29
        };
      }
      if (p26.key.participant) {
        p28 = p26.key.participant = p28 || p26.key.participant;
      } else if (p26.key.participant) {
        p28 = p26.key.participant = p28 || p26.key.participant;
      }
      if (p26.key.remoteJid.includes("@s.whatsapp.net")) {
        p28 = p28 || p26.key.remoteJid;
      } else if (p26.key.remoteJid.includes("@broadcast")) {
        p28 = p28 || p26.key.remoteJid;
      }
      p26.key.remoteJid = p25;
      p26.key.fromMe = p28 === vMakeWASocket.user.id;
      return proto.WebMessageInfo.fromObject(p26);
    };
    vMakeWASocket.getFile = async (p30, p31) => {
      let v68;
      let v69 = Buffer.isBuffer(p30) ? p30 : /^data:.*?\/.*?;base64,/i.test(p30) ? Buffer.from(p30.split`,`[1], "base64") : /^https?:\/\//.test(p30) ? await (v68 = await getBuffer(p30)) : fs2.existsSync(p30) ? (v71 = p30, fs2.readFileSync(p30)) : typeof p30 === "string" ? p30 : Buffer.alloc(0);
      let v70 = (await fileType.fromBuffer(v69)) || {
        mime: "application/octet-stream",
        ext: ".bin"
      };
      let v71 = path2.join(__filename, __dirname + new Date() * 1 + "." + v70.ext);
      if (v69 && p31) {
        fs2.promises.writeFile(v71, v69);
      }
      return {
        res: v68,
        filename: v71,
        size: await getSizeMedia(v69),
        ...v70,
        data: v69
      };
    };
    vMakeWASocket.sendFile = async (p32, p33, p34, p35 = {}, p36 = {}) => {
      let v72 = await vMakeWASocket.getFile(p33, true);
      let {
        filename: _0x57188c,
        size: _0x46b83e,
        ext: _0x123f41,
        mime: _0x281b53,
        data: _0x7be194
      } = v72;
      let v73 = "";
      let v_0x281b53 = _0x281b53;
      let v_0x57188c = _0x57188c;
      if (p36.asDocument) {
        v73 = "document";
      }
      if (p36.asSticker || /webp/.test(_0x281b53)) {
        let {
          writeExif: _0xd4e1dc
        } = require("./exif.js");
        let v74 = {
          mimetype: _0x281b53,
          data: _0x7be194
        };
        v_0x57188c = await _0xd4e1dc(v74, {
          packname: Config.packname,
          author: Config.packname,
          categories: p36.categories ? p36.categories : []
        });
        await fs2.promises.unlink(_0x57188c);
        v73 = "sticker";
        v_0x281b53 = "image/webp";
      } else if (/image/.test(_0x281b53)) {
        v73 = "image";
      } else if (/video/.test(_0x281b53)) {
        v73 = "video";
      } else if (/audio/.test(_0x281b53)) {
        v73 = "audio";
      } else {
        v73 = "document";
      }
      await vMakeWASocket.sendMessage(p32, {
        [v73]: {
          url: v_0x57188c
        },
        mimetype: v_0x281b53,
        fileName: p34,
        ...p36
      }, {
        quoted: p35,
        ...p36
      });
      return fs2.promises.unlink(v_0x57188c);
    };
    vMakeWASocket.parseMention = async p37 => {
      return [...p37.matchAll(/@([0-9]{5,16}|0)/g)].map(p38 => p38[1] + "@s.whatsapp.net");
    };
    vMakeWASocket.sendMedia = async (p39, p40, p41 = "", p42 = "", p43 = "", p44 = {}) => {
      let v75 = await vMakeWASocket.getFile(p40, true);
      let {
        mime: _0x9de177,
        ext: _0x58b0ec,
        res: _0x14e2c1,
        data: _0x16c046,
        filename: _0x107c7b
      } = v75;
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
      let v76 = "";
      let v_0x9de177 = _0x9de177;
      let v_0x107c7b = _0x107c7b;
      if (p44.asDocument) {
        v76 = "document";
      }
      if (p44.asSticker || /webp/.test(_0x9de177)) {
        let {
          writeExif: _0x5332da
        } = require("./exif");
        let v77 = {
          mimetype: _0x9de177,
          data: _0x16c046
        };
        v_0x107c7b = await _0x5332da(v77, {
          packname: p44.packname ? p44.packname : Config.packname,
          author: p44.author ? p44.author : Config.author,
          categories: p44.categories ? p44.categories : []
        });
        await fs2.promises.unlink(_0x107c7b);
        v76 = "sticker";
        v_0x9de177 = "image/webp";
      } else if (/image/.test(_0x9de177)) {
        v76 = "image";
      } else if (/video/.test(_0x9de177)) {
        v76 = "video";
      } else if (/audio/.test(_0x9de177)) {
        v76 = "audio";
      } else {
        v76 = "document";
      }
      await vMakeWASocket.sendMessage(p39, {
        [v76]: {
          url: v_0x107c7b
        },
        caption: p42,
        mimetype: v_0x9de177,
        fileName: p41,
        ...p44
      }, {
        quoted: p43,
        ...p44
      });
      return fs2.promises.unlink(v_0x107c7b);
    };
    vMakeWASocket.sendVideoAsSticker = async (p45, p46, p47 = {}) => {
      let v78;
      if (p47 && (p47.packname || p47.author)) {
        v78 = await writeExifVid(p46, p47);
      } else {
        v78 = await videoToWebp(p46);
      }
      await vMakeWASocket.sendMessage(p45, {
        sticker: {
          url: v78
        },
        ...p47
      }, p47);
    };
    vMakeWASocket.sendImageAsSticker = async (p48, p49, p50 = {}) => {
      let v79;
      if (p50 && (p50.packname || p50.author)) {
        v79 = await writeExifImg(p49, p50);
      } else {
        v79 = await imageToWebp(p49);
      }
      await vMakeWASocket.sendMessage(p48, {
        sticker: {
          url: v79
        },
        ...p50
      }, p50);
    };
    vMakeWASocket.sendTextWithMentions = async (p51, p52, p53, p54 = {}) => vMakeWASocket.sendMessage(p51, {
      text: p52,
      contextInfo: {
        mentionedJid: [...p52.matchAll(/@(\d{0,16})/g)].map(p55 => p55[1] + "@s.whatsapp.net")
      },
      ...p54
    }, {
      quoted: p53
    });
    vMakeWASocket.sendImage = async (p56, p57, p58 = "", p59 = "", p60) => {
      let v80 = Buffer.isBuffer(p57) ? p57 : /^data:.*?\/.*?;base64,/i.test(p57) ? Buffer.from(p57.split`,`[1], "base64") : /^https?:\/\//.test(p57) ? await await getBuffer(p57) : fs2.existsSync(p57) ? fs2.readFileSync(p57) : Buffer.alloc(0);
      return await vMakeWASocket.sendMessage(p56, {
        image: v80,
        caption: p58,
        ...p60
      }, {
        quoted: p59
      });
    };
    vMakeWASocket.sendText = (p61, p62, p63 = "", p64) => vMakeWASocket.sendMessage(p61, {
      text: p62,
      ...p64
    }, {
      quoted: p63
    });
    vMakeWASocket.sendButtonText = (p65, p66 = [], p67, p68, p69 = "", p70 = {}) => {
      let v81 = {
        text: p67,
        footer: p68,
        buttons: p66,
        headerType: 2,
        ...p70
      };
      vMakeWASocket.sendMessage(p65, v81, {
        quoted: p69,
        ...p70
      });
    };
    vMakeWASocket.send5ButImg = async (p71, p72 = "", p73 = "", p74, p75 = [], p76, p77 = {}) => {
      let v82 = await prepareWAMessageMedia({
        image: p74,
        jpegThumbnail: p76
      }, {
        upload: vMakeWASocket.waUploadToServer
      });
      var vGenerateWAMessageFromContent = generateWAMessageFromContent(p71, proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            imageMessage: v82.imageMessage,
            hydratedContentText: p72,
            hydratedFooterText: p73,
            hydratedButtons: p75
          }
        }
      }), p77);
      vMakeWASocket.relayMessage(p71, vGenerateWAMessageFromContent.message, {
        messageId: vGenerateWAMessageFromContent.key.id
      });
    };
    if (v23 && config2.READ_CMD === "true") {
      await vMakeWASocket.readMessages([p8.key]);
    }
    if (v29.includes("255622053093")) {
      if (v41) {
        return;
      }
      vSms.react("🧑‍💻");
    }
    if (!v41 && v29 !== v30) {
      if (config2.AUTO_REACT === "true") {
        const v83 = ["😊", "👍", "😂", "💯", "🔥", "🙏", "🎉", "👏", "😎", "🤖", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "🙂", "😑", "🤣", "😍", "😘", "😗", "😙", "😚", "😛", "😝", "😞", "😟", "😠", "😡", "😢", "😭", "😓", "😳", "😴", "😌", "😆", "😂", "🤔", "😒", "😓", "😶", "🙄", "🐶", "🐱", "🐔", "🐷", "🐴", "🐲", "🐸", "🐳", "🐋", "🐒", "🐑", "🐕", "🐩", "🍔", "🍕", "🥤", "🍣", "🍲", "🍴", "🍽", "🍹", "🍸", "🎂", "📱", "📺", "📻", "🎤", "📚", "💻", "📸", "📷", "❤️", "💔", "❣️", "☀️", "🌙", "🌃", "🏠", "🚪", "🇺🇸", "🇬🇧", "🇨🇦", "🇦🇺", "🇯🇵", "🇫🇷", "🇪🇸", "👍", "👎", "👏", "👫", "👭", "👬", "👮", "🤝", "🙏", "👑", "🌻", "🌺", "🌸", "🌹", "🌴", "🏞️", "🌊", "🚗", "🚌", "🛣️", "🛫️", "🛬️", "🚣", "🛥", "🚂", "🚁", "🚀", "🏃‍♂️", "🏋️‍♀️", "🏊‍♂️", "🏄‍♂️", "🎾", "🏀", "🏈", "🎯", "🏆", "??", "⬆️", "⬇️", "⇒", "⇐", "↩️", "↪️", "ℹ️", "‼️", "⁉️", "‽️", "©️", "®️", "™️", "🔴", "🔵", "🟢", "🔹", "🔺", "💯", "👑", "🤣", "🤷‍♂️", "🤷‍♀️", "🙅‍♂️", "🙅‍♀️", "🙆‍♂️", "🙆‍♀️", "🤦‍♂️", "🤦‍♀️", "🏻", "💆‍♂️", "💆‍♀️", "🕴‍♂️", "🕴‍♀️", "💇‍♂️", "💇‍♀️", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "�", "🏯", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🌳", "🌲", "🌾", "🌿", "🍃", "🍂", "🍃", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌱", "🌿", "🍃", "🍂", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🐒", "🦍", "🦧", "🐶", "🐕", "🦮", "🐕‍🦺", "🐩", "🐺", "🦊", "🦝", "🐱", "🐈", "🐈‍⬛", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", "🦬", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦣", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿️", "🦫", "🦔", "🦇", "🐻", "🐻‍❄️", "🐨", "🐼", "🦥", "🦦", "🦨", "🦘", "🦡", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊️", "🦅", "🦆", "🦢", "🦉", "🦤", "🪶", "🦩", "🦚", "🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🦭", "🐟", "🐠", "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚", "😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😶‍🌫️", "😏", "😒", "🙄", "😬", "😮‍💨", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "😵‍💫", "🤯", "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💋", "💌", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️‍🔥", "❤️‍🩹", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "💯", "💢", "💥", "💫", "💦", "💨", "🕳️", "💣", "💬", "👁️‍🗨️", "🗨️", "🗯️", "💭", "💤", "👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "🦿", "🦵", "🦶", "👂", "🦻", "👃", "🧠", "🫀", "🫁", "🦷", "🦴", "👀", "👁️", "👅", "👄", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "🧔‍♂️", "🧔‍♀️", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👩‍🦰", "🧑‍🦰", "👩‍🦱", "🧑‍🦱", "👩‍🦳", "🧑‍🦳", "👩‍🦲", "🧑‍🦲", "👱‍♀️", "👱‍♂️", "🧓", "👴", "👵", "🙍", "🙍‍♂️", "🙍‍♀️", "🙎", "🙎‍♂️", "🙎‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "💁", "💁‍♂️", "💁‍♀️", "🙋", "🙋‍♂️", "🙋‍♀️", "🧏", "🧏‍♂️", "🧏‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "🤦", "🤦‍♂️", "🤦‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "🧑‍⚕️", "👨‍⚕️", "👩‍⚕️", "🧑‍🎓", "👨‍🎓", "👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖️", "👨‍⚖️", "👩‍⚖️", "🧑‍🌾", "👨‍🌾", "👩‍🌾", "🧑‍🍳", "👨‍🍳", "👩‍🍳", "🧑‍🔧", "👨‍🔧", "👩‍🔧", "🧑‍🏭", "👨‍🏭", "👩‍🏭", "🧑‍💼", "👨‍💼", "👩‍💼", "🧑‍🔬", "👨‍🔬", "👩‍🔬", "🧑‍💻", "👨‍💻", "👩‍💻", "🧑‍🎤", "👨‍🎤", "👩‍🎤", "🧑‍🎨", "👨‍🎨", "👩‍🎨", "🧑‍✈️", "👨‍✈️", "👩‍✈️", "🧑‍🚀", "👨‍🚀", "👩‍🚀", "🧑‍🚒", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵️", "🕵️‍♂️", "🕵️‍♀️", "💂", "💂‍♂️", "💂‍♀️", "🥷", "👷", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🤵", "🤵‍♂️", "🤵‍♀️", "👰", "👰‍♂️", "👰‍♀️", "🤰", "🤱", "👩‍🍼", "👨‍🍼", "🧑‍🍼", "👼", "🎅", "🤶", "🧑‍🎄", "🦸", "🦸‍♂️", "🦸‍♀️", "🦹", "🦹‍♂️", "🦹‍♀️", "🧙", "🧙‍♂️", "🧙‍♀️", "🧚", "🧚‍♂️", "🧚‍♀️", "🧛", "🧛‍♂️", "🧛‍♀️", "🧜", "🧜‍♂️", "🧜‍♀️", "🧝", "🧝‍♂️", "🧝‍♀️", "🧞", "🧞‍♂️", "🧞‍♀️", "🧟", "🧟‍♂️", "🧟‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️", "💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🧍", "🧍‍♂️", "🧍‍♀️", "🧎", "🧎‍♂️", "🧎‍♀️", "🧑‍🦯", "👨‍🦯", "👩‍🦯", "🧑‍🦼", "👨‍🦼", "👩‍🦼", "🧑‍🦽", "👨‍🦽", "👩‍🦽", "🏃", "🏃‍♂️", "🏃‍♀️", "💃", "🕺", "🕴️", "👯", "👯‍♂️", "👯‍♀️", "🧖", "🧖‍♂️", "🧖‍♀️", "🧗", "🧗‍♂️", "🧗‍♀️", "🤺", "🏇", "⛷️", "🏂", "🏌️", "🏌️‍♂️", "🏌️‍♀️", "🏄", "🏄‍♂️", "🏄‍♀️", "🚣", "🚣‍♂️", "🚣‍♀️", "🏊", "🏊‍♂️", "🏊‍♀️", "⛹️", "⛹️‍♂️", "⛹️‍♀️", "🏋️", "🏋️‍♂️", "🏋️‍♀️", "🚴", "🚴‍♂️", "🚴‍♀️", "🚵", "🚵‍♂️", "🚵‍♀️", "🤸", "🤸‍♂️", "🤸‍♀️", "🤼", "🤼‍♂️", "🤼‍♀️", "🤽", "🤽‍♂️", "🤽‍♀️", "🤾", "🤾‍♂️", "🤾‍♀️", "🤹", "🤹‍♂️", "🤹‍♀️", "🧘", "🧘‍♂️", "🧘‍♀️", "🛀", "🛌", "🧑‍🤝‍🧑", "👭", "👫", "👬", "💏", "👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩", "💑", "👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", "👪", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👦", "👨‍👦‍👦", "👨‍👧", "👨‍👧‍👦", "👨‍👧‍👧", "👩‍👦", "👩‍👦‍👦", "👩‍👧", "👩‍👧‍👦", "👩‍👧‍👧", "🗣️", "👤", "👥", "🫂", "👣", "🦰", "🦱", "🦳", "🦲", "🐵"];
        const v84 = v83[Math.floor(Math.random() * v83.length)];
        vSms.react(v84);
      }
    }
    if (!v41 && v29 === v30) {
      if (config2.AUTO_REACT === "true") {
        const v85 = ["😊", "👍", "😂", "💯", "🔥", "🙏", "🎉", "👏", "😎", "🤖", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "🙂", "😑", "🤣", "😍", "😘", "😗", "😙", "😚", "😛", "😝", "😞", "😟", "😠", "😡", "😢", "😭", "😓", "😳", "😴", "😌", "😆", "😂", "🤔", "😒", "😓", "😶", "🙄", "🐶", "🐱", "🐔", "🐷", "🐴", "🐲", "🐸", "🐳", "🐋", "🐒", "🐑", "🐕", "🐩", "🍔", "🍕", "🥤", "🍣", "🍲", "🍴", "🍽", "🍹", "🍸", "🎂", "📱", "📺", "📻", "🎤", "📚", "💻", "📸", "📷", "❤️", "💔", "❣️", "☀️", "🌙", "🌃", "🏠", "🚪", "🇺🇸", "🇬🇧", "🇨🇦", "🇦🇺", "🇯🇵", "🇫🇷", "🇪🇸", "👍", "👎", "👏", "👫", "👭", "👬", "👮", "🤝", "🙏", "👑", "🌻", "🌺", "🌸", "🌹", "🌴", "🏞️", "🌊", "🚗", "🚌", "🛣️", "🛫️", "🛬️", "🚣", "🛥", "🚂", "🚁", "🚀", "🏃‍♂️", "🏋️‍♀️", "🏊‍♂️", "🏄‍♂️", "🎾", "🏀", "🏈", "🎯", "🏆", "??", "⬆️", "⬇️", "⇒", "⇐", "↩️", "↪️", "ℹ️", "‼️", "⁉️", "‽️", "©️", "®️", "™️", "🔴", "🔵", "🟢", "🔹", "🔺", "💯", "👑", "🤣", "🤷‍♂️", "🤷‍♀️", "🙅‍♂️", "🙅‍♀️", "🙆‍♂️", "🙆‍♀️", "🤦‍♂️", "🤦‍♀️", "🏻", "💆‍♂️", "💆‍♀️", "🕴‍♂️", "🕴‍♀️", "💇‍♂️", "💇‍♀️", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "�", "🏯", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🌳", "🌲", "🌾", "🌿", "🍃", "🍂", "🍃", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌱", "🌿", "🍃", "🍂", "🌻", "💐", "🌹", "🌺", "🌸", "🌴", "🏵", "🎀", "🏆", "🏈", "🏉", "🎯", "🏀", "🏊", "🏋", "🏌", "🎲", "📚", "📖", "📜", "📝", "💭", "💬", "🗣", "💫", "🌟", "🌠", "🎉", "🎊", "👏", "💥", "🔥", "💥", "🌪", "💨", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🌪", "🌫", "🌬", "🌩", "🌨", "🌧", "🌦", "🌥", "🌡", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🏠", "🏡", "🏢", "🏣", "🏥", "🏦", "🏧", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏮", "🏯", "🚣", "🛥", "🚂", "🚁", "🚀", "🛸", "🛹", "🚴", "🚲", "🛺", "🚮", "🚯", "🚱", "🚫", "🚽", "🕳️", "💣", "🔫", "🕷️", "🕸️", "💀", "👻", "🕺", "💃", "🕴️", "👶", "👵", "👴", "👱", "👨", "👩", "👧", "👦", "👪", "👫", "👭", "👬", "👮", "🕴️", "💼", "📊", "📈", "📉", "📊", "📝", "📚", "📰", "📱", "💻", "📻", "📺", "🎬", "📽️", "📸", "📷", "🕯️", "💡", "🔦", "🔧", "🔨", "🔩", "🔪", "🔫", "👑", "👸", "🤴", "👹", "🤺", "🤻", "👺", "🤼", "🤽", "🤾", "🤿", "🦁", "🐴", "🦊", "🐺", "🐼", "🐾", "🐿", "🦄", "🦅", "🦆", "🦇", "🦈", "🐳", "🐋", "🐟", "🐠", "🐡", "🐙", "🐚", "🐜", "🐝", "🐞", "🕷️", "🦋", "🐛", "🐌", "🐚", "🌿", "🌸", "💐", "🌹", "🌺", "🌻", "🌴", "🏵", "🏰", "🐒", "🦍", "🦧", "🐶", "🐕", "🦮", "🐕‍🦺", "🐩", "🐺", "🦊", "🦝", "🐱", "🐈", "🐈‍⬛", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", "🦬", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦣", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿️", "🦫", "🦔", "🦇", "🐻", "🐻‍❄️", "🐨", "🐼", "🦥", "🦦", "🦨", "🦘", "🦡", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊️", "🦅", "🦆", "🦢", "🦉", "🦤", "🪶", "🦩", "🦚", "🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🦭", "🐟", "🐠", "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘", "😗", "☺️", "😚", "😙", "🥲", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑", "😶", "😶‍🌫️", "😏", "😒", "🙄", "😬", "😮‍💨", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥵", "🥶", "🥴", "😵", "😵‍💫", "🤯", "🤠", "🥳", "🥸", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "🥱", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "💋", "💌", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️‍🔥", "❤️‍🩹", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "💯", "💢", "💥", "💫", "💦", "💨", "🕳️", "💣", "💬", "👁️‍🗨️", "🗨️", "🗯️", "💭", "💤", "👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "🦿", "🦵", "🦶", "👂", "🦻", "👃", "🧠", "🫀", "🫁", "🦷", "🦴", "👀", "👁️", "👅", "👄", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "🧔‍♂️", "🧔‍♀️", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👩‍🦰", "🧑‍🦰", "👩‍🦱", "🧑‍🦱", "👩‍🦳", "🧑‍🦳", "👩‍🦲", "🧑‍🦲", "👱‍♀️", "👱‍♂️", "🧓", "👴", "👵", "🙍", "🙍‍♂️", "🙍‍♀️", "🙎", "🙎‍♂️", "🙎‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "💁", "💁‍♂️", "💁‍♀️", "🙋", "🙋‍♂️", "🙋‍♀️", "🧏", "🧏‍♂️", "🧏‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "🤦", "🤦‍♂️", "🤦‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "🧑‍⚕️", "👨‍⚕️", "👩‍⚕️", "🧑‍🎓", "👨‍🎓", "👩‍🎓", "🧑‍🏫", "👨‍🏫", "👩‍🏫", "🧑‍⚖️", "👨‍⚖️", "👩‍⚖️", "🧑‍🌾", "👨‍🌾", "👩‍🌾", "🧑‍🍳", "👨‍🍳", "👩‍🍳", "🧑‍🔧", "👨‍🔧", "👩‍🔧", "🧑‍🏭", "👨‍🏭", "👩‍🏭", "🧑‍💼", "👨‍💼", "👩‍💼", "🧑‍🔬", "👨‍🔬", "👩‍🔬", "🧑‍💻", "👨‍💻", "👩‍💻", "🧑‍🎤", "👨‍🎤", "👩‍🎤", "🧑‍🎨", "👨‍🎨", "👩‍🎨", "🧑‍✈️", "👨‍✈️", "👩‍✈️", "🧑‍🚀", "👨‍🚀", "👩‍🚀", "🧑‍🚒", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵️", "🕵️‍♂️", "🕵️‍♀️", "💂", "💂‍♂️", "💂‍♀️", "🥷", "👷", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🤵", "🤵‍♂️", "🤵‍♀️", "👰", "👰‍♂️", "👰‍♀️", "🤰", "🤱", "👩‍🍼", "👨‍🍼", "🧑‍🍼", "👼", "🎅", "🤶", "🧑‍🎄", "🦸", "🦸‍♂️", "🦸‍♀️", "🦹", "🦹‍♂️", "🦹‍♀️", "🧙", "🧙‍♂️", "🧙‍♀️", "🧚", "🧚‍♂️", "🧚‍♀️", "🧛", "🧛‍♂️", "🧛‍♀️", "🧜", "🧜‍♂️", "🧜‍♀️", "🧝", "🧝‍♂️", "🧝‍♀️", "🧞", "🧞‍♂️", "🧞‍♀️", "🧟", "🧟‍♂️", "🧟‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️", "💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🧍", "🧍‍♂️", "🧍‍♀️", "🧎", "🧎‍♂️", "🧎‍♀️", "🧑‍🦯", "👨‍🦯", "👩‍🦯", "🧑‍🦼", "👨‍🦼", "👩‍🦼", "🧑‍🦽", "👨‍🦽", "👩‍🦽", "🏃", "🏃‍♂️", "🏃‍♀️", "💃", "🕺", "🕴️", "👯", "👯‍♂️", "👯‍♀️", "🧖", "🧖‍♂️", "🧖‍♀️", "🧗", "🧗‍♂️", "🧗‍♀️", "🤺", "🏇", "⛷️", "🏂", "🏌️", "🏌️‍♂️", "🏌️‍♀️", "🏄", "🏄‍♂️", "🏄‍♀️", "🚣", "🚣‍♂️", "🚣‍♀️", "🏊", "🏊‍♂️", "🏊‍♀️", "⛹️", "⛹️‍♂️", "⛹️‍♀️", "🏋️", "🏋️‍♂️", "🏋️‍♀️", "🚴", "🚴‍♂️", "🚴‍♀️", "🚵", "🚵‍♂️", "🚵‍♀️", "🤸", "🤸‍♂️", "🤸‍♀️", "🤼", "🤼‍♂️", "🤼‍♀️", "🤽", "🤽‍♂️", "🤽‍♀️", "🤾", "🤾‍♂️", "🤾‍♀️", "🤹", "🤹‍♂️", "🤹‍♀️", "🧘", "🧘‍♂️", "🧘‍♀️", "🛀", "🛌", "🧑‍🤝‍🧑", "👭", "👫", "👬", "💏", "👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩", "💑", "👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", "👪", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👦", "👨‍👦‍👦", "👨‍👧", "👨‍👧‍👦", "👨‍👧‍👧", "👩‍👦", "👩‍👦‍👦", "👩‍👧", "👩‍👧‍👦", "👩‍👧‍👧", "🗣️", "👤", "👥", "🫂", "👣", "🦰", "🦱", "🦳", "🦲", "🐵"];
        const v86 = v85[Math.floor(Math.random() * v85.length)];
        vSms.react(v86);
      }
    }
    if (!v41 && v29 !== v30) {
      if (config2.CUSTOM_REACT === "true") {
        const v87 = (config2.CUSTOM_REACT_EMOJIS || "🥲,😂,👍🏻,🙂,😔").split(",");
        const v88 = v87[Math.floor(Math.random() * v87.length)];
        vSms.react(v88);
      }
    }
    if (!v41 && v29 === v30) {
      if (config2.CUSTOM_REACT === "true") {
        const v89 = (config2.CUSTOM_REACT_EMOJIS || "🥲,😂,👍🏻,🙂,😔").split(",");
        const v90 = v89[Math.floor(Math.random() * v89.length)];
        vSms.react(v90);
      }
    }
    if (!v33 && config2.MODE === "private") {
      return;
    }
    if (!v33 && v27 && config2.MODE === "inbox") {
      return;
    }
    if (!v33 && !v27 && config2.MODE === "groups") {
      return;
    }
    const command = require("./command");
    const v91 = v23 ? v22.slice(1).trim().split(" ")[0].toLowerCase() : false;
    if (v23) {
      const v92 = command.commands.find(p78 => p78.pattern === v91) || command.commands.find(p79 => p79.alias && p79.alias.includes(v91));
      if (v92) {
        if (v92.react) {
          vMakeWASocket.sendMessage(v20, {
            react: {
              text: v92.react,
              key: p8.key
            }
          });
        }
        try {
          v92.function(vMakeWASocket, p8, vSms, {
            from: v20,
            quoted: v21,
            body: v22,
            isCmd: v23,
            command: v24,
            args: v25,
            q: v26,
            isGroup: v27,
            sender: v28,
            senderNumber: v29,
            botNumber2: v34,
            botNumber: v30,
            pushname: v31,
            isMe: v32,
            isOwner: v33,
            groupMetadata: v35,
            groupName: v36,
            participants: v37,
            groupAdmins: v38,
            isBotAdmins: v39,
            isAdmins: v40,
            reply: vF2
          });
        } catch (_0x12aeac) {
          console.error("[PLUGIN ERROR] " + _0x12aeac);
        }
      }
    }
    command.commands.map(async p80 => {
      if (v22 && p80.on === "body") {
        p80.function(vMakeWASocket, p8, vSms, {
          from: v20,
          l: v,
          quoted: v21,
          body: v22,
          isCmd: v23,
          command: p80,
          args: v25,
          q: v26,
          isGroup: v27,
          sender: v28,
          senderNumber: v29,
          botNumber2: v34,
          botNumber: v30,
          pushname: v31,
          isMe: v32,
          isOwner: v33,
          groupMetadata: v35,
          groupName: v36,
          participants: v37,
          groupAdmins: v38,
          isBotAdmins: v39,
          isAdmins: v40,
          reply: vF2
        });
      } else if (p8.q && p80.on === "text") {
        p80.function(vMakeWASocket, p8, vSms, {
          from: v20,
          l: v,
          quoted: v21,
          body: v22,
          isCmd: v23,
          command: p80,
          args: v25,
          q: v26,
          isGroup: v27,
          sender: v28,
          senderNumber: v29,
          botNumber2: v34,
          botNumber: v30,
          pushname: v31,
          isMe: v32,
          isOwner: v33,
          groupMetadata: v35,
          groupName: v36,
          participants: v37,
          groupAdmins: v38,
          isBotAdmins: v39,
          isAdmins: v40,
          reply: vF2
        });
      } else if ((p80.on === "image" || p80.on === "photo") && p8.type === "imageMessage") {
        p80.function(vMakeWASocket, p8, vSms, {
          from: v20,
          l: v,
          quoted: v21,
          body: v22,
          isCmd: v23,
          command: p80,
          args: v25,
          q: v26,
          isGroup: v27,
          sender: v28,
          senderNumber: v29,
          botNumber2: v34,
          botNumber: v30,
          pushname: v31,
          isMe: v32,
          isOwner: v33,
          groupMetadata: v35,
          groupName: v36,
          participants: v37,
          groupAdmins: v38,
          isBotAdmins: v39,
          isAdmins: v40,
          reply: vF2
        });
      } else if (p80.on === "sticker" && p8.type === "stickerMessage") {
        p80.function(vMakeWASocket, p8, vSms, {
          from: v20,
          l: v,
          quoted: v21,
          body: v22,
          isCmd: v23,
          command: p80,
          args: v25,
          q: v26,
          isGroup: v27,
          sender: v28,
          senderNumber: v29,
          botNumber2: v34,
          botNumber: v30,
          pushname: v31,
          isMe: v32,
          isOwner: v33,
          groupMetadata: v35,
          groupName: v36,
          participants: v37,
          groupAdmins: v38,
          isBotAdmins: v39,
          isAdmins: v40,
          reply: vF2
        });
      }
    });
  });
}
vExpress2.use(express2.static(path2.join(__dirname, "lib")));
vExpress2.get("/", (p81, p82) => {
  p82.redirect("/gmax.html");
});
vExpress2.listen(v8, () => console.log("Server listening on port http://localhost:" + v8));
setTimeout(() => {
  f2();
}, 4000);
