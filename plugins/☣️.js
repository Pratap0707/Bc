let handler = function (m, { conn }) {
    if (!m.quoted) throw false
    let { chat, fromMe, isBaileys } = m.quoted
    setTimeout(() => {
	   conn.sendMessage(chat, { delete: m.quoted.vM.key })
		}, 6)
}

handler.customPrefix = /☣️/i
handler.command = new RegExp
handler.rowner = true

export default handler