let handler = async (m) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    m.reply(`*${totalreg} users in Database*`)
}
handler.command = /^(database|db|user)$/i

export default handler