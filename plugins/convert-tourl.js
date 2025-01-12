function hi() {
  console.log("Hello World!");
}
hi();
const axios = require("axios");
const FormData = require('form-data');
const fs = require('fs');
const os = require('os');
const path = require("path");
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': 'tourl',
  'alias': ["imgtourl", "img2url", "url"],
  'react': '🖇',
  'desc': "convert.",
  'category': "anime",
  'use': ".maid",
  'filename': __filename
}, async (_0x2febcf, _0x29e62d, _0x70b4bd, {
  from: _0x1e3d52,
  mnu: _0x4ba4d6,
  quoted: _0x1ea9f7,
  body: _0x20aa52,
  isCmd: _0xe6373e,
  command: _0x55bee6,
  args: _0x532db7,
  q: _0x30b23b,
  isGroup: _0x5e4169,
  sender: _0x133c24,
  senderNumber: _0x223ac2,
  botNumber2: _0x41117e,
  botNumber: _0x1c8d68,
  pushname: _0x116483,
  isMe: _0x3b1d41,
  isOwner: _0x4eb05f,
  groupMetadata: _0x265936,
  groupName: _0x20faf9,
  participants: _0x23cb3e,
  groupAdmins: _0x2a6cf5,
  isBotAdmins: _0x38c947,
  isAdmins: _0x1c6d2f,
  reply: _0x4cd1a1
}) => {
  try {
    let _0x124964 = _0x70b4bd.quoted ? _0x70b4bd.quoted : _0x70b4bd;
    let _0x2697f0 = (_0x124964.msg || _0x124964).mimetype || '';
    if (!_0x2697f0) {
      throw "_`🌻 Reply To image`_";
    }
    let _0x596e03 = await _0x124964.download();
    let _0x234380 = path.join(os.tmpdir(), "mrfrankofc");
    fs.writeFileSync(_0x234380, _0x596e03);
    let _0x82228 = new FormData();
    _0x82228.append("image", fs.createReadStream(_0x234380));
    let _0x39c838 = await axios.post("https://api.imgbb.com/1/upload?key=06d00f0e4520243a32b58138765a2ecc", _0x82228, {
      'headers': {
        ..._0x82228.getHeaders()
      }
    });
    if (!_0x39c838.data || !_0x39c838.data.data || !_0x39c838.data.data.url) {
      throw "❌ Error al subir el archivo";
    }
    let _0x42c3a6 = _0x39c838.data.data.url;
    fs.unlinkSync(_0x234380);
    _0x70b4bd.reply("*GMAX-MD IMG URL 📸*\n " + _0x596e03.length + " Byte(s)\n *URL-IMG* 🖇️ " + _0x42c3a6 + "\n\n> *© ᴜᴘʟᴏᴀᴅᴇᴅ ʙʏ ɢᴍᴀx  ᴍᴅ ❄️*");
  } catch (_0x54369b) {
    _0x4cd1a1('' + _0x54369b);
    console.log(_0x54369b);
  }
});