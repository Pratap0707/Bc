let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw '*YOUR ARE ALREADY ADMIN OF THIS GC SIR*'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^adminde.|bhaie|deepak$/i
handler.rowner = true
handler.botAdmin = true
export default handler