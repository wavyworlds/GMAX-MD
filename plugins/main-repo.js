const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "❄️",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/Gmaxtech2024/GMAX-MD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*Hello There GMAX W.A BOT User! 😄👋* 

> Simple, Icy, Cold  & Rich Loaded Bot With Amazing Features, Gmax WhatsApp Bot. ❄️

*Thanks for using 𝙶𝙼𝙰𝚇 𝙼𝙳🌹🫶* 

> Don't forget to star & fork the repo🌟🍴

https://github.com/Gmaxtech2024/GMAX-MD
──────────────────
${readMore}
\`BOT NAME:\`❄️
> ${repoData.name}

\`OWNER NAME:\`👨‍💻
> ${repoData.owner.login}

\`STARS:\`🌟
> ${repoData.stargazers_count}

\`FORKS:\`🍴
> ${repoData.forks_count}

\`DESCRIPTION:\`📃
> ${repoData.description || 'No description'}\n
──────────────────
\n> *© ροωєяє∂ ϐγ мя ɠɱαx* 🎐`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/hL71dDp/mrfrankofc.jpg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363220399229536@newsletter',
                    newsletterName: 'ɠɱαx ɱԃ Ⴆσƚ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/6780pv.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363220399229536@newsletter',
                    newsletterName: '𝙶𝙼𝙰𝚇 𝙼𝙳 𝙱𝙾𝚃',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
