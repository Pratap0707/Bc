let handler = async (m) => {
let shizo = { contextInfo: { externalAdReply: { mediaUrl: 'https://Instagram.com/maahir_404', mediaType: 'VIDEO', description: 'INDIAN PIES 🥵💦', title: 'INDIAN PIES 🥵💦', body: `Glitch-md`, thumbnailUrl: 'https://i.imgur.com/SBx8bMC.jpg', sourceUrl: 'https://Instagram.com/Maahir_404', }}}

let errorteam = `https://shizoapi.cyclic.app/api/pies/indian?apikey=${shizokeys}`
conn.sendFile(m.chat, errorteam, bname, piesmsg, m, true, shizo)
}
handler.command = /^(indpies)$/
handler.tags = ['pies']
handler.help = ['indpies']

export default handler