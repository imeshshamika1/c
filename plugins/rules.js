/* Copyright (C) 2022

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Cyber = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
let LOL = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('rules');



Cyber.addCommand({pattern: 'rules', fromMe: LOL,  deleteCommand: false, onlyGroup: true, desc: Lang.RULE_DESC}, (async (message, match) => {

    if (Config.RULES == 'default') {
            
        var image = await axios.get (Config.RULES_LOGO, {responseType: 'arraybuffer'})
       
    await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '⚜️ *⟪Group Rules⟫* ⚜️\n\n' + Lang.rules})

    }
    else {
            
        var image = await axios.get (Config.RULES_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '⚜️ *⟪Group Rules⟫* ⚜️\n\n' + Config.RULES })
    }
}));
