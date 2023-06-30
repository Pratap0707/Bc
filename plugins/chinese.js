let handler = async (m) => {
let shizo = { contextInfo: { externalAdReply: { mediaUrl: 'https://Instagram.com/maahir_404', mediaType: 'VIDEO', description: 'CHINIESE PIES ðŸ¥µðŸ’¦', title: 'CHINIESE PIES ðŸ¥µðŸ’¦', body: `Glitch-md`, thumbnailUrl: 'https://i.imgur.com/SBx8bMC.jpg', sourceUrl: 'https://Instagram.com/Maahir_404', }}}

let errorteam = `https://shizoapi.cyclic.app/api/pies/china?apikey=${shizokeys}`
conn.sendFile(m.chat, errorteam, bname, piesmsg, m, true, shizo)
}
handler.command = /^(^chinpies)$/
handler.tags = ['pies']
handler.help = ['chinpies']

export default handler