const { cmd } = require("../command");
const fs = require("fs");

const newsletterContext = {
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363382023564830@newsletter", // badilisha na yako
      newsletterName: "𝙱.𝙼.𝙱-𝚇𝙼𝙳",
      serverMessageId: 1
    }
  }
};

// GETPP - Iko tayari kama ulivyoiweka
cmd({
  pattern: "getpp1",
  alias: [],
  desc: "Get profile picture of replied user",
  category: "General",
  use: "",
  filename: __filename
}, async (zk, m, msg, { reply }) => {
  if (!m.quoted) {
    return reply("❌ Reply to a user's message to get their profile picture.");
  }

  const userJid = m.quoted.sender;

  let profilePic;
  try {
    profilePic = await zk.profilePictureUrl(userJid, 'image');
  } catch {
    profilePic = "https://i.ibb.co/sR0p7p6/default.jpg"; // fallback image
    await reply("❗ Couldn't fetch user's profile picture. Sending default image.");
  }

  await zk.sendMessage(m.chat, {
    image: { url: profilePic },
    caption: `
│───────────────────────────────│
🤪🤪 I HAVE SEEN 🤪🤪
│───────────────────────────────│
│ HELLO 👋 @${userJid.split('@')[0]}
│───────────────────────────────│
│ NOVA XMD BOOM 🤪🤪
│───────────────────────────────│`,
    mentions: [userJid],
    ...newsletterContext
  }, { quoted: m });
});

// SETPP - mpya inayoendana
cmd({
  pattern: "setpp",
  alias: ["setpic", "setbotpic"],
  desc: "Owner Only - Set bot's profile picture",
  category: "owner",
  filename: __filename
}, async (zk, m, msg, { isCreator, reply }) => {
  if (!isCreator) {
    return reply("❌ Only the owner can set the bot's profile picture.");
  }

  if (!m.quoted || !/image/.test(m.quoted.mtype)) {
    return reply("⚠️ Reply to an image to set as profile picture.");
  }

  try {
    const imageBuffer = await zk.downloadMediaMessage(m.quoted);

    // Update profile picture
    await zk.updateProfilePicture(m.user.id, imageBuffer);

    // Send success message
    await zk.sendMessage(m.chat, {
      image: imageBuffer,
      caption: `
│───────────────────────────────│
✅✅ PROFILE SET ✅✅
│───────────────────────────────│
│ HELLO CREATOR 👑
│───────────────────────────────│
│ BOT PICTURE UPDATED SUCCESSFULLY
│───────────────────────────────│
│ POWERED BY BMB-XMD ENGINE 🔥
│───────────────────────────────│`,
      ...newsletterContext
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    return reply("❌ Failed to update profile picture.");
  }
});
