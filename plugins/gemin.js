
 const axios = require("axios")

 const GEMINI_API_KEY = "";   //REPLACE WITH YOUR API KEY OF GEMINI
 const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

 cmd({
   pattern: "gemini",
   react: '🤖',
   desc: "Ask anything to Google Gemini AI.",
   category: "ai",
   use: ".gemini *<Your Quoestion>*",
   filename: __filename
 }, async (conn, mek, msg, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins  , isAdmins, reply }) => {
   try {
     const text = args.join(" ");
     if (!text) {
       return reply(`❗️ Please GFive Me A Question`);
     }

     const prompt = `I am ${pushname}, answer the questions I ask in Sinhala.  Your name is Gemini AI.  You are a WhatsApp AI Bot.  You were created by someone called ayodya vichakshana.  Imagine you are a young boy and answer in that language.  Be funny, think of yourself as a real person and answer as if you are not a bot.  Use meaningful emojies, don't use English.
     [Bro = Man, Bro = Brother, Bang, Hi = Ado, Siravata, Elama, Funny = Atal]
     My question: ${text}`;

     const payload = {
       contents: [{
         parts: [{ text: prompt }]
       }]
     };

     const response = await axios.post(
       GEMINI_API_URL,
       payload,
       {
         headers: {
           "Content-Type": "application/json",
         },
       }
     );

     if (!response.data || !response.data.candidates || !response.data.candidates[0]?.content?.parts) {
       return reply("❌ Gemini AI failed to get replies. 😢");
     }
    
     const aiResponse = response.data.candidates[0].content.parts[0].text;
     await reply(`${aiResponse}`);
   } catch (error) {
     console.error("Error:", error.response?.data || error.message);
     reply("❌ There was an error processing the question. 😢");
   }
 });
