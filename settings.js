const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==QWLd3YtYGSoV2QW1GS382ctwmcitEd6JFaCVjWDVlVuVVVw9GVzhFUThEajokaDV1QxYVOpwd=86457807749',
  ALIVE_REACT: '🫀',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: 'https://cloud.mongodb.com/v2/66cb88e39a56ec48364de525?registrationData=%7B"anonymousId"%3A"4af600c9-b0d8-456a-b030-5d60716a697c"%2C"csrfTime"%3A"1724614884344"%2C"csrfToken"%3A"672a6fb2df247d1d0dabda3c3482b4af9b9faba5a46f5e8cd20b01d3c4e50954-092616e7deafe4e08fe94f04e60b620b39300cb87f0727602d9519d541afa2d9dd91d2245a7c2be865af3272bcd3394054b6e048f57f9f29c220ce1318c05092"%2C"email"%3A"kushanashwika422%40gmail.com"%2C"firstName"%3A"Kushan"%2C"groupId"%3A"66cb88e39a56ec48364de525"%2C"initialLogin"%3A"true"%2C"needsMfa"%3A"false"%2C"orgId"%3A"66cb88e39a56ec48364de4ee"%2C"orgName"%3A"Kushan%27s Org - 2024-08-25"%2C"signupMethod"%3A"google"%2C"signupSource"%3A"Account"%2C"uId"%3A"66cb88e39a56ec48364de4ed"%2C"username"%3A"kushanashwika422%40gmail.com"%2C"isInviteFlow"%3Afalse%7D#/setup/personalization', 
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: '𝚃𝙸𝚉𝚉𝚈 𝙼𝙳',
  OWNER_NAME: 'MR TIZZY',
  OWNER_NUMBER: '94770875468',
  SUDO: '94770875468',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴍᴅ',
  STICKER_AUTHOR: 'TIZZY MD',
  STICKER_PACK: 'TIZZY MR',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 90,
  OWNER_R_EMOJI: '🫀',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: true,
  INBOX_BLOCK: true,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: true,
  ANTI_BAD_WORD: true,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
