const Rico = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');
let Work_Mode = Config.WORKTYPE == 'public' ? false : true


var t6 = ''
if (Config.LANG == 'EN') t6 = 'btntest'
if (Config.LANG == 'SI') t6 = 'test'


Rico.addCommand({pattern: 'btn', fromMe: Work_Mode, desc: t6,  deleteCommand: false}, (async (message, match) => {


const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
]

const buttonMessage = {
    contentText: "Hi it's button message",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}

    await conn.sendMessage(id, buttonMessage, MessageType.buttonsMessage)
