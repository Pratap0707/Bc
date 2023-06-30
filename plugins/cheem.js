let handler = async (m) => {
let shizo = { contextInfo: { externalAdReply: { mediaUrl: 'https://Instagram.com/maahir_404', mediaType: 'VIDEO', description: 'Cheemu 😂👀', title: 'cHeemu’¦', body: `Glitch-md`, thumbnailUrl: 'https://i.imgur.com/SBx8bMC.jpg', sourceUrl: 'https://Instagram.com/Maahir_404', }}}

let errorteam = `https://shizoapi.cyclic.app/api/memes/cheems?apikey=${shizokeys}`
conn.sendFile(m.chat, errorteam, bname, cheemu, m, true, shizo)
}
handler.command = /^(^cheems)$/
handler.tags = ['funny']
handler.help = ['cheems']

export default handler