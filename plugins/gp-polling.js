
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `✳️ Missing text for poll \n\n📌 Example : \n*${usedPrefix + command}* Message |DI|xd`
if (!text.includes('|')) throw  `✳️ Separate surveys with *|* \n\n📌 Example : \n*${usedPrefix + command}* my survey|n |how|xd|okay`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `📊 *Survey requested by:* ${name}\n\n*Mensaje:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <hEy|dipak|xd>']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta', 'polling'] 
handler.group = true

export default handler
