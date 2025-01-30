const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//--------------------------Mr Gmax---------------------------------------
module.exports = {
SESSION_ID: process.env.SESSION_ID || "GMAX-MD~qFhlwaBS#5RuIeZ0r4quBSQL9wMzg6rztRgi3irtmSjuXx06kSWQ",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //TRUE OR FALSE
MODE: process.env.MODE || "public",  // PRIVATE OR PUBLIC
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/6BMJmGY/mrfrankofc.jpg", // DO NOT CHANGE
ALIVE_MSG: process.env.ALIVE_MSG || "ɢᴍᴀx ᴀɪ ɪs ᴀʟɪᴠᴇ. ᴋᴇᴇᴘ sᴜᴘᴘᴏʀᴛɪɴɢ *Zᴇʀᴏ Cᴏᴅᴇʀs❄️*\n\n> ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ᴍʀ ɢᴍᴀx",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".", // .,!/?
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『 ＧＭＡＸ - ＭＤ 』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

//--------------MADE BY MR GMAX 2025 JAN---------------->-
