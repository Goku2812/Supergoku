let handler = async (m, { command, text }) => m.reply(`
*𝙷𝙾𝙻𝙰 𝚃𝙴 𝚅𝙰𝚂 𝙲𝙰𝙼𝙱𝙸𝙰𝚁 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝚈 𝚀𝚄𝙸𝙴𝚁𝙴𝚂* *𝙸𝙽𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙰𝚀𝚄𝙸 𝙴𝙹𝙴𝙼𝙿𝙻𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾𝚂*
𝚁𝚎𝚌𝚞𝚎𝚛𝚍𝚊  𝚚𝚞𝚎 𝙳𝚎𝚋𝚎𝚜  𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚛 𝚍𝚎 𝚝𝚞 𝚌𝚊𝚖𝚋𝚒𝚘 𝚍𝚎 𝚗𝚘𝚖𝚋𝚛𝚎 𝚊𝚚𝚞𝚒 𝚊𝚕 𝚐𝚛𝚞𝚙𝚘 𝚘 𝚑𝚊𝚌𝚎𝚛 𝚖𝚎𝚗𝚌𝚒𝚘́𝚗 𝚊 𝚕𝚘𝚜 𝚕𝚒𝚍𝚎𝚛𝚎𝚛𝚎𝚜 𝚖𝚞𝚢 𝚏𝚊́𝚌𝚒𝚕 𝚜𝚘𝚕𝚘 𝚎𝚜𝚌𝚛𝚒𝚋𝚎 *𝚊𝚍𝚖𝚒𝚗𝚜* 𝚢  𝚛𝚎𝚌𝚞𝚎𝚛𝚍𝚊 𝚗𝚘  𝚚𝚞𝚒𝚝𝚊𝚛𝚕𝚎 𝚎𝚕 𝚎𝚜𝚙𝚊𝚌𝚒𝚘 𝚊 𝚕𝚊𝚜 𝚒𝚗𝚒𝚌𝚒𝚊𝚕𝚎𝚜.


✅ᴴᴬ│ㅤ𝙶𝙾𝙺𝚄𝙱𝙾𝚃      ✔️
✅ᴴᴬ│ㅤ𝙶𝙾𝙺𝚄ㅤ𝙱𝙾𝚃   ✔️
🚫ᴴᴬ│𝙶𝙾𝙺𝚄𝙱𝙾𝚃

 𝚂𝚒 𝚐𝚞𝚜𝚝𝚊𝚗 *𝙲𝙰𝚃𝚂𝚄𝙿* 𝚕𝚎𝚜 𝚙𝚞𝚎𝚍𝚎 𝚊𝚢𝚞𝚍𝚊𝚛 𝚊 𝚑𝚊𝚌𝚎𝚛  𝚜𝚞 𝚗𝚘𝚖𝚋𝚛𝚎 𝚌𝚘𝚗 𝚌𝚘𝚗𝚏𝚒𝚊𝚗𝚣𝚊 𝚜𝚎 𝚕𝚘 𝚙𝚞𝚎𝚍𝚎𝚗 𝚙𝚎𝚍𝚒𝚛

𝙴𝚇𝙴𝙻𝙴𝙽𝚃𝙴 𝙳𝙸́𝙰 𝙰 𝚃𝙾𝙳𝙾𝚂 ❤
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['ejm<texto>?']
handler.tags = ['kerang']
handler.command = /^ejm|EJM$/i
export default handler