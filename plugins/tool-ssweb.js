function hi() {
  console.log("Hello World!");
}
hi();
const axios = require("axios");
const {
  cmd
} = require("../command");
const _0x39ffcf = {};
function _0x1abbfc(_0x5da360, _0x2eeafd, _0x32c1ca, _0x1a213e, _0x5ea3c0) {
  return _0x513e(_0x2eeafd + 0x3c7, _0x32c1ca);
}
function _0x135e8f(_0x514d48, _0x48ba5b, _0x38ba91, _0x284518, _0x415999) {
  return _0x513e(_0x514d48 + 0x26f, _0x284518);
}
_0x39ffcf.pattern = 'ss';
function _0x55748(_0x45d353, _0x44491a, _0x49074d, _0x58cdb8, _0x156623) {
  return _0x513e(_0x156623 - 0x4d, _0x45d353);
}
_0x39ffcf.alias = ["ssweb"];
_0x39ffcf.react = '🪄';
_0x39ffcf.desc = "Download ss of a given link.";
function _0x5099ec(_0x5a93e5, _0x2e79ef, _0x46bde1, _0x2c9409, _0x30c51c) {
  return _0x513e(_0x30c51c - 0xb2, _0x46bde1);
}
_0x39ffcf.category = 'other';
function _0x433425(_0x329044, _0x5bf1b1, _0x1004ff, _0x4a8c44, _0x412018) {
  return _0x513e(_0x5bf1b1 + 0x1bd, _0x412018);
}
_0x39ffcf.use = ".ss <link>";
_0x39ffcf.filename = __filename;
cmd(_0x39ffcf, async (_0x11cc5a, _0x58996c, _0xceb567, {
  from: _0x4bea66,
  l: _0x5150dc,
  quoted: _0x870d2c,
  body: _0x3e254e,
  isCmd: _0x503976,
  command: _0x291c45,
  args: _0x1ba255,
  q: _0x231101,
  isGroup: _0x198996,
  sender: _0x462a19,
  senderNumber: _0x3380fd,
  botNumber2: _0x3cfc3e,
  botNumber: _0x48580c,
  pushname: _0x1c0054,
  isMe: _0x212c51,
  isOwner: _0x32a75d,
  groupMetadata: _0x10155d,
  groupName: _0x4c6980,
  participants: _0x3b8fcd,
  groupAdmins: _0x4389f7,
  isBotAdmins: _0x51a152,
  isAdmins: _0x7427ca,
  reply: _0x5cca2b
}) => {
  try {
    let _0x5c69f3 = await axios.get("https://api.davidcyriltech.my.id/ssweb?url=" + _0x231101);
    const _0x581765 = {
      'url': _0x5c69f3.data.screenshotUrl
    };
    const _0xbfafdb = {
      'image': _0x581765,
      'caption': "*```GMAX SCREENSHOT WEBSITE```*\n\n> *© Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ ɢᴍᴀx *"
    };
    const _0x37c4a1 = {
      'quoted': _0x58996c
    };
    await _0x11cc5a.sendMessage(_0x4bea66, _0xbfafdb, _0x37c4a1);
  } catch (_0x550c41) {
    _0x5cca2b(cants);
    console.log(_0x550c41);
  }
});
function _0x4b3041(_0x534f99) {
  function _0x1c2c4e(_0x4069d4) {
    if (typeof _0x4069d4 === 'string') {
      const _0x5a7ce0 = function () {
        while (true) {}
      };
      return _0x5a7ce0();
    } else {
      if (('' + _0x4069d4 / _0x4069d4).length !== 0x1 || _0x4069d4 % 0x14 === 0x0) {
        debugger;
      } else {
        debugger;
      }
    }
    _0x1c2c4e(++_0x4069d4);
  }
  try {
    if (_0x534f99) {
      return _0x1c2c4e;
    } else {
      _0x1c2c4e(0x0);
    }
  } catch (_0x11578c) {}
}