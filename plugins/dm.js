/*const QueenAmdi = require('queenamdi-public');
const Asena = events
const Build = build
const {MessageType} = require('@adiwajshing/baileys');
 
var DM_DESC = ''
if (Build.LANG == 'SI') DM_DESC = 'කණ්ඩායම් සාමාජිකයෙකුට සෘජු පණිවිඩයක් යවන්න.'
if (Build.LANG == 'EN') DM_DESC = 'Send a direct message to a group member.'

var NEED_REP = ''
if (Build.LANG == 'SI') NEED_REP = '*කරුණාකර පණිවිඩයකට පිළිතුරු දෙන්න.*'
if (Build.LANG == 'EN') NEED_REP = '*Please reply to a message.*'

var NEED_MSG = ''
if (Build.LANG == 'SI') NEED_MSG = '*කරුණාකර මට පණිවිඩයක් දෙන්න.*'
if (Build.LANG == 'EN') NEED_MSG = '*Please give me a message.*'

var SENT = ''
if (Build.LANG == 'SI') SENT = '*✅ යවන ලදී*'
if (Build.LANG == 'EN') SENT = '*✅ Sent*'

Asena.operate({pattern: 'dm ?(.*)', fromMe: true, desc: DM_DESC, deleteCommand: true}, (async (message, match) => {
   function _0x2d64(_0x46c0da,_0x184f54){const _0x498e14=_0x498e();return _0x2d64=function(_0x2d6449,_0x2c72e7){_0x2d6449=_0x2d6449-0xe5;let _0x468562=_0x498e14[_0x2d6449];return _0x468562;},_0x2d64(_0x46c0da,_0x184f54);}(function(_0x8745eb,_0x46eafd){function _0x26655c(_0x2268b5,_0x47e291){return _0x2d64(_0x2268b5-0x36f,_0x47e291);}function _0x1da7dc(_0x2aef2a,_0x4d2cd6){return _0x2d64(_0x4d2cd6-0x3d7,_0x2aef2a);}const _0x2a33be=_0x8745eb();while(!![]){try{const _0x148af2=-parseInt(_0x26655c(0x457,0x460))/0x1*(-parseInt(_0x26655c(0x467,0x460))/0x2)+-parseInt(_0x26655c(0x455,0x453))/0x3*(-parseInt(_0x1da7dc(0x4bf,0x4bc))/0x4)+-parseInt(_0x1da7dc(0x4c8,0x4c5))/0x5*(-parseInt(_0x26655c(0x463,0x46c))/0x6)+parseInt(_0x26655c(0x466,0x46a))/0x7*(-parseInt(_0x1da7dc(0x4bb,0x4c0))/0x8)+-parseInt(_0x26655c(0x461,0x46a))/0x9+-parseInt(_0x26655c(0x465,0x468))/0xa*(-parseInt(_0x1da7dc(0x4cf,0x4c6))/0xb)+parseInt(_0x26655c(0x456,0x453))/0xc*(-parseInt(_0x1da7dc(0x4c5,0x4ca))/0xd);if(_0x148af2===_0x46eafd)break;else _0x2a33be['push'](_0x2a33be['shift']());}catch(_0x5ddffe){_0x2a33be['push'](_0x2a33be['shift']());}}}(_0x498e,0xa4aab));function _0x471b9b(_0x18ced1,_0x2a173f){return _0x2d64(_0x18ced1- -0x1e9,_0x2a173f);}if(!message[_0x471b9b(-0xf9,-0xfc)+'\x61\x67\x65'])return await message[_0x471b9b(-0xff,-0x109)][_0xe8e4ef(-0xe8,-0xeb)+'\x65'](message[_0xe8e4ef(-0xe3,-0xe5)],NEED_REP,MessageType[_0xe8e4ef(-0xe9,-0xdf)],{'\x71\x75\x6f\x74\x65\x64':message[_0xe8e4ef(-0xe7,-0xe5)]});function _0xe8e4ef(_0x196420,_0xa6d203){return _0x2d64(_0x196420- -0x1d4,_0xa6d203);}if(message[_0xe8e4ef(-0xe4,-0xec)+_0xe8e4ef(-0xdf,-0xdc)]&&match[0x1]=='')return await message[_0x471b9b(-0xff,-0xf6)]['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](message[_0x471b9b(-0xf8,-0xf5)],NEED_MSG,MessageType[_0xe8e4ef(-0xe9,-0xe0)],{'\x71\x75\x6f\x74\x65\x64':message[_0x471b9b(-0xfc,-0x102)]});const dmJID=message[_0x471b9b(-0xf9,-0xfb)+_0xe8e4ef(-0xdf,-0xd8)]['\x6a\x69\x64'];await message['\x63\x6c\x69\x65\x6e\x74'][_0xe8e4ef(-0xe8,-0xe6)+'\x65'](dmJID,''+match[0x1],MessageType[_0x471b9b(-0xfe,-0xf8)],{'\x71\x75\x6f\x74\x65\x64':message[_0xe8e4ef(-0xe7,-0xf1)]}),await message[_0xe8e4ef(-0xea,-0xec)][_0xe8e4ef(-0xe8,-0xf1)+'\x65'](message['\x6a\x69\x64'],SENT,MessageType['\x74\x65\x78\x74'],{'\x71\x75\x6f\x74\x65\x64':message[_0xe8e4ef(-0xe7,-0xec)]});function _0x498e(){const _0x3e1976=['\x31\x34\x38\x37\x37\x37\x30\x4e\x70\x55\x62\x46\x4b','\x32\x35\x39\x73\x75\x53\x6f\x66\x66','\x38\x38\x32\x37\x38\x50\x75\x65\x51\x73\x6b','\x34\x4e\x41\x59\x70\x78\x52','\x33\x34\x37\x32\x39\x34\x37\x72\x61\x63\x65\x4a\x6e','\x33\x37\x32\x47\x75\x4a\x68\x43\x6c','\x38\x48\x4a\x50\x78\x53\x6a','\x31\x32\x39\x31\x39\x32\x6d\x77\x53\x46\x4f\x74','\x63\x6c\x69\x65\x6e\x74','\x74\x65\x78\x74','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x64\x61\x74\x61','\x31\x35\x49\x65\x77\x6a\x70\x68','\x35\x35\x73\x56\x6e\x5a\x49\x6a','\x72\x65\x70\x6c\x79\x5f\x6d\x65\x73\x73','\x6a\x69\x64','\x35\x37\x37\x38\x38\x31\x47\x4a\x6f\x6e\x52\x66','\x35\x35\x30\x33\x39\x34\x53\x67\x44\x75\x6b\x6d','\x37\x38\x38\x30\x35\x38\x68\x69\x76\x64\x4f\x4c','\x61\x67\x65'];_0x498e=function(){return _0x3e1976;};return _0x498e();}
}));
*/
