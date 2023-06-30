let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`*YOU•R TAGGED BY GLITCH-MD*\n❀°〘Group〙: *${groupMetadata.subject}*\n❀°〘Members〙: *${participants.length}*${text ? `\n✮͢ 〘Message〙 : ${text}\n` : ''}\n┏────────────┈ ⳹★\n` + users.map(v => '*┆*✦@' + v.replace(/@.+/, '')).join`\n` + '\n┗────────•••──────┄ °❀', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
