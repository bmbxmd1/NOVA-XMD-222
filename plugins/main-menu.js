const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const { runtime } = require('../lib/functions')
const fs = require("fs");
const path = require("path");

cmd({
  pattern: "menu",
  alias: ["allmenu", "bmb"],
  use: '.menu',
  desc: "menu the bot",
  category: "menu",
  react: "🔰",
  filename: __filename
},
  async (conn, mek, m, {
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

      const randomIndex = Math.floor(Math.random() * 10) + 1;
      const imagePath = path.join(__dirname, '..', 'scs', `menu${randomIndex}.jpg`);
      const imageBuffer = fs.readFileSync(imagePath);

      let dec = `
╭━〔*🔰 𝗡𝗢𝗩𝗔-𝗫𝗠𝗗 🔰*〕━━┈⊷
┃❒╭────────────
┃❒│ 👑 *ʀᴜɴᴛɪᴍᴇ:* ${runtime(process.uptime())}
┃❒│ 🕹️ *ᴍᴏᴅᴇ:* *${config.MODE}*
┃❒│ 🎯 *ᴘʀᴇғɪx:* *${config.PREFIX}*
┃❒│ 💡 *ʀᴀᴍ ᴜsᴇ:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} GB / ${Math.round(require('os').totalmem / 1024 / 1024)} GB
┃❒│ 👑 *ᴅᴇᴠ:* *𝙱.𝙼.𝙱-𝚃𝙴𝙲𝙷*
┃❒│ 🚀 *ᴠᴇʀsɪᴏɴ:* *1.0.0*
┃❒╰────────────────
╰━━━━━━━━━━━━━━━━━━┈⊷

---
📚 *ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅs*
---
* 🎧 .ғʙ
* 🎧 .ɪɴsᴛᴀ
* 🎧 .ᴠɪᴅᴇᴏ
* 🎧 .ɢᴅʀɪᴠᴇ
* 🎧 .ᴛᴡɪᴛᴛᴇʀ
* 🎧 .ᴛᴛ
* 🎧 .ᴍᴇᴅɪᴀғɪʀᴇ
* 🎧 .ᴘʟᴀʏ
* 🎧 .sᴏɴɢ
* 🎧 .sᴘᴏᴛɪғʏ
* 🎧 .ᴠɪᴅᴇᴏ4
* 🎧 .ɪᴍɢ
* 🎧 .ʟʏʀɪᴄs
* 🎧 .ᴀᴘᴋ
* 🎧 .ʙᴀɪsᴄᴏᴘᴇ
* 🎧 .ɢɪɴɪsɪsɪʟᴀ

---
🔍 *sᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅs*
---
* 🔎 .ʏᴛs
* 🔎 .ʏᴛᴀ
* 🔎 .ᴍᴏᴠɪᴇ
* 🔎 .ʀᴏᴍᴀɴᴄᴇ
* 🔎 .ᴍᴏᴛɪᴠᴀᴛᴇ
* 🔎 .ᴀɪᴠᴏɪᴄᴇ
* 🔎 .ɢᴏᴏɢʟᴇ
* 🔎 .ᴡᴇᴀᴛʜᴇʀ
* 🔎 .sᴛɪᴄᴋsᴇᴀʀᴄʜ

---
🎨 *ʟᴏɢᴏ ᴄᴏᴍᴍᴀɴᴅs*
---
* 🔴 .3ᴅᴄᴏᴍɪᴄ
* 🔴 .ᴅʀᴀɢᴏɴʙᴀʟʟ
* 🔴 .ᴅᴇᴀᴅᴘᴏᴏʟ
* 🔴 .ʙʟᴀᴄᴋᴘɪɴᴋ
* 🔴 .ɴᴇᴏɴʟɪɢʜᴛ
* 🔴 .ᴄᴀᴛ
* 🔴 .sᴀᴅɢɪʀʟ
* 🔴 .ᴘᴏʀɴʜᴜʙ
* 🔴 .ɴᴀʀᴜᴛᴏ
* 🔴 .ᴛʜᴏʀ
* 🔴 .ᴀᴍᴇʀɪᴄᴀ
* 🔴 .ᴇʀᴀsᴇʀ
* 🔴 .3ᴅᴘᴀᴘᴇʀ
* 🔴 .ғᴜᴛᴜʀɪsᴛɪᴄ
* 🔴 .ᴄʟᴏᴜᴅs
* 🔴 .sᴀɴs
* 🔴 .ɢᴀʟᴀxʏ
* 🔴 .ʟᴇᴀғ
* 🔴 .sᴜɴsᴇᴛ
* 🔴 .ɴɪɢᴇʀɪᴀ
* 🔴 .ᴅᴇᴠɪʟᴡɪɴɢs
* 🔴 .ʜᴀᴄᴋᴇʀ
* 🔴 .ʙᴏᴏᴍ
* 🔴 .ʟᴜxᴜʀʏ
* 🔴 .ᴢᴏᴅɪᴀᴄ
* 🔴 .ᴀɴɢᴇʟᴡɪɴɢs
* 🔴 .ʙᴜʟʙ
* 🔴 .ᴛᴀᴛᴛᴏᴏ
* 🔴 .ᴄᴀsᴛʟᴇ
* 🔴 .ғʀᴏᴢᴇɴ
* 🔴 .ᴘᴀɪɴᴛ
* 🔴 .ʙɪʀᴛʜᴅᴀʏ
* 🔴 .ᴛʏᴘᴏɢʀᴀᴘʜʏ
* 🔴 .ʙᴇᴀʀ
* 🔴 .ᴠᴀʟᴏʀᴀɴᴛ

---
🧠 *ᴀɪ ᴄᴏᴍᴍᴀɴᴅs*
---
* 🤖 .ɢᴘᴛ
* 🤖 .ᴀɪ
* 🤖 .ɪᴍᴀɢᴇsᴄᴀɴ
* 🤖 .ɪᴍᴀɢɪɴᴇ

---
👑 *ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅs*
---
* 👑 .ᴜᴘᴅᴀᴛᴇᴄᴍᴅ
* 👑 .sᴇᴛᴛɪɴɢs
* 👑 .ᴏᴡɴᴇʀ
* 👑 .ʀᴇᴘᴏ
* 👑 .sʏsᴛᴇᴍ
* 👑 .sᴛᴀᴛᴜs
* 👑 .ᴀʙᴏᴜᴛ
* 👑 .ʙʟᴏᴄᴋ
* 👑 .ᴜɴʙʟᴏᴄᴋ
* 👑 .sʜᴜᴛᴅᴏᴡɴ
* 👑 .ʙʀᴏᴀᴅᴄᴀsᴛ
* 👑 .ᴊɪᴅ
* 👑 .ɢᴊɪᴅ
* 👑 .ᴘᴀɪʀ
* 👑 .sᴀᴠᴇ
* 👑 .ɢᴇᴛᴘᴘ
* 👑 .ʀᴇsᴛᴀʀᴛ

---
👥 *ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs*
---
* 👥 .ʀᴇᴍᴏᴠᴇ
* 👥 .ᴅᴇʟ
* 👥 .ᴀᴅᴅ
* 👥 .ᴋɪᴄᴋ
* 👥 .ᴋɪᴄᴋᴀʟʟ
* 👥 .ᴘʀᴏᴍᴏᴛᴇ
* 👥 .ᴅᴇᴍᴏᴛᴇ
* 👥 .ᴛᴀɢᴀʟʟ
* 👥 .ɪɴᴠɪᴛᴇ
* 👥 .ʀᴇᴠᴏᴋᴇ
* 👥 .ᴘᴏʟʟ
* 👥 .ʀᴀɴᴅᴏᴍsʜɪᴘ
* 👥 .ɴᴇᴡɢᴄ
* 👥 .ᴍᴜᴛᴇ
* 👥 .ᴜɴᴍᴜᴛᴇ
* 👥 .ʟᴏᴄᴋɢᴄ
* 👥 .ᴜɴʟᴏᴄᴋɢᴄ
* 👥 .ʟᴇᴀᴠᴇ
* 👥 .ɢɴᴀᴍᴇ
* 👥 .ᴍᴀᴋᴇᴀᴅᴍɪɴ
* 👥 .ᴛᴀɢᴀᴅᴍɪɴs
* 👥 .ɢᴅᴇsᴄ
* 👥 .ᴊᴏɪɴ
* 👥 .ʜɪᴅᴇᴛᴀɢ
* 👥 .ɢɪɴғᴏ

---
ℹ️ *ɪɴғᴏ ᴄᴏᴍᴍᴀɴᴅs*
---
* 💡 .ᴀʙᴏᴜᴛ
* 💡 .ᴀʟɪᴠᴇ
* 💡 .ʀᴇǫᴜᴇsᴛ
* 💡 .ʙᴏᴛɪɴғᴏ
* 💡 .sᴛᴀᴛᴜs
* 💡 .ᴘɪɴɢ
* 💡 .sʏsᴛᴇᴍ
* 💡 .ᴜᴘᴛɪᴍᴇ

---
🤖 *ʙᴏᴛ sᴇᴛᴛɪɴɢs*
---
* ⚙️ .ʀᴇᴘᴏ
* ⚙️ .ᴀɴᴛɪᴄᴀʟʟ 
* ⚙️ .ᴍᴇɴᴜ
* ⚙️ .ᴜᴘᴅᴀᴛᴇ
* ⚙️ .ᴍᴏᴅᴇ
* ⚙️ .ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ
* ⚙️ .ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ
* ⚙️ .ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ
* ⚙️ .ᴀᴜᴛᴏʀᴇᴀᴅsᴛᴀᴛᴜs
* ⚙️ .ᴀɴᴛɪʙᴀᴅ
* ⚙️ .ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ
* ⚙️ .ᴀᴜᴛᴏʀᴇᴘʟʏ
* ⚙️ .ᴀᴜᴛᴏʀᴇᴀᴄᴛ
* ⚙️ .ᴀɴᴛɪʟɪɴᴋ
* ⚙️ .ᴀᴜᴛᴏʀᴇᴀᴅ

---
🔄 *ᴄᴏɴᴠᴇʀᴛᴇʀ ᴄᴏᴍᴍᴀɴᴅs*
---
* ⚡ .sᴛɪᴄᴋᴇʀ
* ⚡ .ᴛᴀᴋᴇ
* ⚡ .ᴛʀᴛ
* ⚡ .ᴛᴛs
* ⚡ .ғᴀɴᴄʏ
* ⚡ .ᴜʀʟ
* ⚡ .ᴀɢᴇ
* ⚡ .ᴄᴏɴᴠᴇʀᴛ
* ⚡ .ᴛɪɴʏ
* ⚡ .ᴍᴏᴠɪᴇ
* ⚡ .ᴛᴇʀᴍɪɴᴀᴛᴇ
* ⚡ .ғᴀᴍɪʟʏ

---
🎲 *ʀᴀɴᴅᴏᴍ ᴄᴏᴍᴍᴀɴᴅs*
---
* 🍀 .ᴀɴɪᴍᴇ
* 🍀 .ᴄᴏᴜᴘʟᴇᴘᴘ
* 🍀 .ʟᴏʟɪ
* 🍀 .ᴡᴀɪғᴜ
* 🍀 .ᴄᴏsᴘʟᴀʏ
* 🍀 .ɴᴇᴋᴏ
* 🍀 .ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ

---
🖼️ *ᴡᴀʟʟᴘᴀᴘᴇʀs ᴄᴏᴍᴍᴀɴᴅs*
---
* 🏞️ .ɪᴍɢ
* 🏞️ .ʟᴏɢᴏ
* 🏞️ .ss
* 🏞️ .ʀᴡ
* 🏞️ .ғʟᴜxᴀɪ

---
✨ *ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅs*
---
* 🌐 .ᴛʀᴛ
* 🌐 .ᴊᴏᴋᴇ
* 🌐 .ғᴀᴄᴛ
* 🌐 .ɢɪᴛʜᴜʙ
* 🌐 .ɢᴘᴀss
* 🌐 .ʜᴀᴄᴋ
* 🌐 .ᴠᴠ
* 🌐 .ᴠᴠ2
* 🌐 .sᴘᴀᴍ
* 🌐 .ᴠᴄᴀʀᴅ
* 🌐 .sʀᴇᴘᴏ
* 🌐 .ᴄʜᴀɴɴᴇʟɪɴғᴏ
* 🌐 .sʏsᴛᴇᴍ
* 🌐 .ʀᴀɴᴋ
* 🌐 .ᴛɪᴍᴇᴢᴏɴᴇ
* 🌐 .ᴅᴇғɪɴᴇ
* 🌐 .ᴅᴀɪʟʏғᴀᴄᴛ

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙱.𝙼.𝙱-𝚃𝙴𝙲𝙷🔥`;

      await conn.sendMessage(
        from,
        {
          image: imageBuffer,
          caption: dec,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363382023564830@newsletter',
              newsletterName: '𝙱.𝙼.𝙱-𝚃𝙴𝙲𝙷',
              serverMessageId: 143
            }
          }
        },
        { quoted: mek }
      );

    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  });
