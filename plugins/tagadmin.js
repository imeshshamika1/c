const CyberQueen = require('../events');
const TAGADMİN = "Tags group admins."
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

    CyberQueen.addCommand({pattern: 'tagadmin', fromMe: false, desc: TAGADMİN}, (async (message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '@' + uye.id.split('@')[0] + ' ';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
