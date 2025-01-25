const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
  pattern: "ai",
  alias: ["chatgpt","gpt"],
  react: "🤖",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/gpt4omini?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 GMAX AI RESPONSE:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========GMAX MISTRA

cmd({
  pattern: "mistraai",
  alias: ["mistra", "mitra"],
  react: "🪄",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://pikabotzapi.vercel.app/ai/mistral/?apikey=anya-md&message=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 GMAX MISTRA AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//====GMAX GPT 3

cmd({
  pattern: "gpt3",
  alias: ["gptturbo", "chatgpt3"],
  react: "😇",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/gpt3?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 GMAX CHATGPT 3:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========GMAX GPT 4

cmd({
  pattern: "gpt4",
  alias: ["ai4", "chatgpt4"],
  react: "🪄",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/gpt4omini?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 GMAX CHATGPT 4:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========GMAX LLAMA
cmd({
  pattern: "llama3",
  alias: ["llama", "llama2"],
  react: "✅",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/llama3?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 GMAX LLAM AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========GMAX META AI

cmd({
  pattern: "metaai",
  alias: ["meta", "whatsappai"],
  react: "🔄",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/metaai?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 GMAX META AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========GMAX GPT 4o

cmd({
  pattern: "gpt4o",
  alias: ["ai4", "chatgpt4"],
  react: "🟢",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/gpt4omini?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 GMAX CHATGPT 4o:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========GMAX GEMINI
cmd({
  pattern: "gemini",
  alias: ["bard", "googleai"],
  react: "🪄",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.dreaded.site/api/gemini2?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 GMAX GOOGLE AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});


 
//==========GMAX CLAUDE
cmd({
  pattern: "claudeai",
  alias: ["claude", "cloud"],
  react: "⏳",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/claude?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 GMAX CLAUDE AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});


//==========GMAX AI
cmd({
  pattern: "gmax",
  alias: ["gmaxai", "deeai"],
  react: "⏳",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/wizardlm?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 GMAX AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//==========Gmax watson

cmd({
  pattern: "watson",
  alias: ["mrgmax", "zim"],
  react: "⏳",
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply("Please ask a question or provide input for the AI.");

    const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/lori?text=${q}`);
    console.log(data);

    if (!data.message) return reply("No response from the AI.");

    return reply(` \`🤖 GMAX WATSON AI:\` \n\n${data.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});


 //=========GMAX LUDO AI
cmd({
pattern: "ludoai",
alias: ["ludo", "ludi"],
react: "🤖",
desc: "AI chat.",
category: "main",
filename: __filename
}, async (conn, mek, m, {
from,
quoted,
body,
isCmd,
command,
args,
q,
isGroup,
sender,
senderNumber,
botNumber2,
botNumber,
pushname,
isMe,
isOwner,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmins,
isAdmins,
reply
}) => {
try {
if (!q) return reply("Please ask a question or provide input for the AI.");

// Send processing message
await reply("Please wait... Processing your request ");

const data = await fetchJson(`https://api.davidcyriltech.my.id/ai/gpt4omini?text=${q}`);
console.log(data);
if (!data.message) return reply("No response from the AI.");
return reply(`\`\`\`GMAX GOOGLE AI:\`\`\` \n\n${data.message}`);

} catch (error) {
console.error(error);
reply(`An error occurred: ${error.message}`);
}
});
