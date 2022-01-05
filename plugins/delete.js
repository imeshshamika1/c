/* Copyright by @Nico
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const Cyber = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const DEL_DESC = "Deletes The Replied Message ❤‍🔥/n⚠️⚠️Warning ⚠️⚠️/nThis Command Created By Dinuka Himsara"

Cyber.addCommand({pattern: 'del', fromMe: true, desc: DEL_DESC}, (async (message, match) => {

  await message.reply_message.delete();

}));
