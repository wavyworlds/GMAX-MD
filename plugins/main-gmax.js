function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd
} = require("../command");
cmd({
  'pattern': 'gmaxinc',
  'desc': "All About The Bot & Dev",
  'category': 'fun',
  'react': '🦄',
  'filename': __filename
}, async (_0x1d77c6, _0x3bc605, _0x33505d, {
  reply: _0x149ecd
}) => {
  try {
    await _0x1d77c6.sendMessage(_0x33505d.chat, {
      'image': {
        'url': "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg"
      },
      'caption': "  *⟣────────────⟢*\n    *[ • Developer: Darrell M ]*\n *⟣────────────•⟢*\n              \n      *⟣┈───────────────⟢*\n            🗂️ *REPOSITORY*\n       https://github.com/Gmaxtech2024/GMAX-MD\n      \n      *⟣┈───────────────•*\n            🔗 *PROJECT NAME*\n           GMAX-MD W.A BOT\n      \n      *⟣┈───────────────•*\n             👨‍💻 *DEVELOPER*\n     https://github.com/Gmaxtech2024\n       \n      *⟣┈───────────────•*\n             🧮 *RELEASE DATE*\n            15 January 2025 \n       \n      *⟣┈───────────────•*\n            📩 *SUPPORT GROUP* \n      https://chat.whatsapp.com/HQJYFk9tqEmLRy9FlL6KGN\n    \n      *⟣┈───────────────•*\n           🎀 *SUPPORT CHANNEL*\n      https://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x\n        \n        ◦🪄  Hit Me Here :wa.me/255622053093* \n      *⟝┈───────────────⟞*\n        *⟣────────────•⟢*\n    ".trim()
    }, {
      'quoted': _0x3bc605
    });
  } catch (_0x175db9) {
    console.error(_0x175db9);
    _0x149ecd("❌ *An error occurred while fetching the family list. Please try again.*");
  }
});