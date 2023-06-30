let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*GLITCH-MD LEAVES THE GROUP IT WAS A PLEASURE*\n*HE WAS HERE SEE YOU SOON UNTIL TAKE CARE AND GOOD BYE  😼👋*') 
await conn.groupLeave(id)}
handler.command = /^(salir|leavegc|fuckoff|leave)$/i
handler.group = true
handler.rowner = true
export default handler