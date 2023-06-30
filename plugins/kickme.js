let handler = async function(m, { conn , args, text, isAdmin, isBotAdmin, groupMetadata }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let asu = m.sender
  let vir = asu.split("@s.whatsapp.net")[0]
   if (isBotAdmin) {
 	      await conn.groupParticipantsUpdate(m.chat, [asu], "remove")
  // conn.groupRemove(m.chat, [asu])
     } else { 
     	m.reply('```Aham Aham Admin banao yaar 😗```')
    }
  } 
}
handler.command =/kickme/i
export default handler