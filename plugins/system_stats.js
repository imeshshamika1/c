const Rico = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@blackamda/queenamdi-web-api');
const {spawnSync} = require('child_process');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');
let Work_Mode = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('system_stats');

var SYSDTXT = ''
if (Config.LANG == 'SI') SYSDTXT = '🏅 BLACK RICO CMD PANEL'
if (Config.LANG == 'EN') SYSDTXT = '🏅 BLACK RICO CMD PANEL'

var VER = ''
if (Config.LANG == 'SI') VER = '🧬 BLACK RICO VERSION'
if (Config.LANG == 'EN') VER = '🧬 BLACK RICO VERSION'

var MSG = ''
if (Config.ALIVEMSG == 'default') MSG = '𝐇𝐄𝐘 𝐓𝐇𝐄𝐑𝐄 𝐈 𝐀𝐌 𝐎𝐍𝐋𝐈𝐍𝐄 𝐍𝐎𝐖 💓/n/n 🎁𝐎𝐰𝐧𝐞𝐫 :- 𝐃𝐈𝐍𝐔𝐊𝐀 𝐇𝐈𝐌𝐒𝐀𝐑𝐀/n/n 🎁𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧 :- 𝐃𝐈𝐍𝐔𝐊𝐀 𝐇𝐈𝐌𝐒𝐀𝐑𝐀 /n/n 💝 𝐁𝐋𝐀𝐂𝐊𝐑𝐈𝐂𝐎 𝐁𝐔𝐓𝐓𝐎𝐍 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 💝 /n/n 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐌𝐞 𝐎𝐧 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 :- wa.me/+94761209144'
else MSG = Config.ALIVEMSG


Rico.addCommand({pattern: 'alive', fromMe: Work_Mode, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {
    var logo = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
    var PIC = Buffer.from(logo.data)

    const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })

    var BUTTHANDLE = '';
    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
        BUTTHANDLE = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
    } else {
        BUTTHANDLE = '.';
    }
        
    const buttons = [
        {buttonId: BUTTHANDLE + 'versiondraco', buttonText: {displayText: VER }, type: 1},
        {buttonId: BUTTHANDLE + 'RICO', buttonText: {displayText: SYSDTXT }, type: 1}
    ]
    const buttonMessage = {
        contentText: MSG,
        footerText: 'ʙʟᴀᴄᴋ ʀɪᴄᴏ ʙᴜᴛᴛᴏɴ ᴠᴇʀsɪᴏɴ',
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage    
    }
    await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
}))


Rico.addCommand({pattern: 'versiondraco', fromMe: Work_Mode, desc: Lang.BOT_V, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {
    await message.client.sendMessage(message.jid, 
        `*🧬 Black Rico Version 🧬*\n\n` + 
        '```Installed version :```\n' +
        Lang.version + 
        `\n\nCheck official website : https://github.com/CyberDraco/BlackRico`
   , MessageType.text, {quoted: message.data});
    
}));
