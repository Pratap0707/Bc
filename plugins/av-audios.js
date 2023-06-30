
let handler = m => m
handler.all = async function (m) {
  for (const message in audioMsg) {
    if (new RegExp(`^${message}$`, 'i').test(m.text)) {
      this.sendFile(m.chat, audioMsg[message], 'audio.mp3', null, m, true)
      break
    }
  }
  return !0
 }

export default handler


let audioMsg = {
  'Deepak': './src/mp3/fino.mp3',
  'Hi': 'https://file.io/hL14GF4j81uA',
  'Jay Shree Ram': 'https://d.top4top.io/m_2724wpmr21.mp3',
  'skkad': 'https://h.top4top.io/m_2474fhcbh1.mp3',
  '@9182005404|@9182525404': 'https://j.top4top.io/m_2702gahke0.mp3'
}
