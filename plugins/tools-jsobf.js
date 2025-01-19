const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');



cmd({
pattern: 'base64 ?(.*)',
desc: 'Convert text to base64.',
category: 'tools',
react: '💘',
filename: __filename
}, async (conn, mek, m, { from, text, reply }) => {
const api = 'https://api.giftedtech.web.id/api/tools/ebase?apikey=gifted&query=';
try {
const res = await fetch(api + encodeURIComponent(text));
const json = await res.json();
reply(`Base64: ${json.result}`);
} catch (error) {
reply(`Error: ${error.message}`);
}
});

cmd({
pattern: 'debase64 (.*)',
desc: 'Decode base64 to normal text.',
category: 'tools',
react: '💞',
filename: __filename
}, async (conn, mek, m, { from, reply }) => {
const text = m.match[1];
const api = 'https://api.giftedtech.web.id/api/tools/dbase?apikey=gifted&query=';
try {
const res = await fetch(api + encodeURIComponent(text));
const json = await res.json();
reply(`Decoded: ${json.result}`);
} catch (error) {
reply(`Error: ${error.message}`);
}
});
