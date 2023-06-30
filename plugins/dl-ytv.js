
import fg from 'api-dylux'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let limit = 350 
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `✳️ Example :\n${usedPrefix + command} https://youtu.be/LzkTFFwxtXI`
    if (!args[0].match(/youtu/gi)) throw `❎ Verify that the YouTube link`
	 let chat = global.db.data.chats[m.chat]
	 m.react(rwait) 
	try {
		let q = args[1] || '360p'
		let v = args[0]
		const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
		const dl_url = await yt.video[q].download()
		const title = await yt.title
		const size = await yt.video[q].fileSizeH 
		
       if (size.split('MB')[0] >= limit) return m.reply(` ≡  *DM YTDL*\n\n▢ *⚖️Peso* : ${size}\n▢ *🎞Quality* : ${q}\n\n▢ _The file exceeds the download limit_ *+${limit} MB*`)    
	  conn.sendFile(m.chat, dl_url, title + '.mp4', `
 ≡  *DM YTDL*
  
▢ *📌Title* : ${title}
▢ *📟 Ext* : mp4
▢ *🎞Quality* : ${q}
▢ *⚖Weight* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done) 
		
	} catch {
		
       m.reply(`✳️ Error downloading video try later`) 
		/*const { title, result, quality, size, duration, thumb, channel } = await fg.ytv(args[0]) 
		if (size.split('MB')[0] >= limit) return m.reply(` ≡  *FG YTDL2*\n\n▢ *⚖Weight* : ${size}\n▢ *🎞Quality* : ${quality}\n\n▢ _The file exceeds the download limit_ *+${limit} MB*`)
	conn.sendFile(m.chat, result, title + '.mp4', `
 ≡  *DM YTDL2*
  
▢ *📌Title* : ${title}
▢ *📟 Ext* : mp4
▢ *⚖Weight* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done)*/ 
	} 
		 
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['dl'] 
handler.command = ['ytmp4', 'dmmp4']
handler.diamond = true
handler.premium = true

export default handler
