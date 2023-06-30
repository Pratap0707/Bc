
let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {
	
   if (!isOwner) return conn.reply(m.chat, `*Invite bot to a group*\n\nHello @${m.sender.split('@')[0]}\you can rent the bot to join a group`.trim(), m, { mentions: [m.sender] })
	
  let time = global.db.data.users[m.sender].lastjoin + 86400000
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))
 
  let name = m.sender 
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `✳️ Send the group link\n\n 📌 Example:\n *${usedPrefix + command}* <linkwa> <dias>\n\n_el number is the days the bot will be in the group_` 
  if (!code) throw `✳️ Link invalid`
  if (!args[1]) throw `📌 Missing number of days\n\n Example:\n *${usedPrefix + command}* <linkwa> 2`
  if (isNaN(args[1])) throw `✳️ Just number, which represents the days the bot will be in the group!`
  let owbot = global.owner[1] 
  m.reply(`😎 Wait 3 seconds, I will join the group`)
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
  let nDays = 86400000 * args[1]  
  let now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += nDays
  else global.db.data.chats[res].expired = now + nDays
  if (e.length) await m.reply(`✅ I successfully joined the group \n\n≡ group info \n\n *Nombre :* ${await conn.getName(res)}\n\nThe bot will exit automatically after  \n\n${msToDate(global.db.data.chats[res].expired - now)}`)
 
 if (e.length) await conn.reply(res, `🏮 Helo everyone

@${owbot} he is my creator if you have any doubt
I was invited by *${m.name}*`, m, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {
     await conn.reply(res, `ok everyone relax 🤭`, 0)
     await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *GROUP INVITATION*\n\n@${m.sender.split('@')[0]} has invited *${conn.user.name}* to the group\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Link : ${args[0]}\n\nThe bot will exit automatically after \n\n${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *GROUP INVITATION*\n\n@${m.sender.split('@')[0]} has invited *${conn.user.name}* to the group\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Link : ${args[0]}\n\nThe bot will exit automatically after\n\n ${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`✳️ Successfully invite bot to group\n\n${await conn.getName(res)}\n\nThe bot will exit automatically after *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `Hello everyone 👋🏻
     
*${conn.user.name}* is one of the multi-device whatsApp bots built with node.js, *${conn.user.name}* just invited by *${m.name}*

to see the menu of the bot write

${usedPrefix}help
@${conn.user.jid.split('@')[0]} will exit automatically after \n\n${msToDate(global.db.data.chats[res].expired - now)}`
  await conn.reply(res, mes, m, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(global.owner[1]+'@s.whatsapp.net', e)
      throw `✳️ Sorry, the bot cannot join groups`
      }
}
handler.help = ['join <chat.whatsapp.com> <dias>']
handler.tags = ['owner']
handler.command = ['join', 'invite'] 

//handler.owner = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days*\n ', h, ' *hours*\n ', m, ' *minutes*\n ', s, ' *seconds* '].map(v => v.toString().padStart(2, 0)).join('')
}
