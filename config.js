import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['918252005404', '𓆩✮͢ꪑꪖꪖꫝỉꪹ_404⃤𓆪', true],
  ['919693000131',false], 
  ['000000000000'] 
] //Numeros de owner 

global.mods = ['918252005404'] 
global.prems = ['918252005404']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}
global.shizokeys = 'shizo'
global.bname = 'Glitch-md'
global.botname = 'Glitch-md'
global.piesmsg = '_Here you go with Glitch-Md 🥵💦_'
global.cheemu = '_Cheems Memes 😂👀_'
// Sticker WM
global.packname = '𓆩✮͢ꪑꪖꪖꫝỉꪹ_404 ⃤𓆪' 
global.author = '𝙂𝙇𝙄𝙏𝘾𝙃-𝙈𝘿 ❤️' 
global.fgig = 'https://www.instagram.com/maahir_404'
global.dygp = 'https://www.instagram.com/maahir_404'
global.fgsc = 'https://www.instagram.com/maahir_404'
global.fgyt = 'https://www.instagram.com/maahir_404'
global.fgpyp = 'https://www.instagram.com/maahir_404'
global.fglog = 'https://i.imgur.com/k7l5Gwx.jpg' 

global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '🌚'
global.error = '😐' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
