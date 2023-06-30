
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `🤷🏻‍♂️ The user is not found in my database`
    conn.reply(m.chat, `
┌───⊷ *BALANCE* ⊶
✮͢ *📌Name* : _@${who.split('@')[0]}_
✮͢ *💎Dimonds* : _${user.diamond}_
✮͢ *⬆️XP* : _Total ${user.exp}_
└──────────────

*NOTE :* 
You can buy 💎 diamonds using the commands
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 

export default handler
