
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
So I don't want any type of donation 💌🧸
Just support 
✮͢ *Deepak Sharma 💌🧸*

`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
