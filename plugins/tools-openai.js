
import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { conn, text }) => {
	
if (!text) throw `enter the text`
m.react('💖')

	try {
        let syms = `You are glitch-md, a great language model trained by OpenAI. Carefully follow the user instructions. Answer using Markdown.`
        let res = await gpt.ChatGpt(text, syms)
         await m.reply(res.text)
	} catch {
		m.reply(`❎ Error: try again later`)
	}

}
handler.help = ['ai <text>']
handler.tags = ['tools']
handler.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt']

export default handler
