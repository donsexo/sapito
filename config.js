global.DeveloperMode = 'false' //true Or false
global.owner = ['593998823589','573137284909','593982756581','5730244822637','5215534511943','50766913568', '51920909499', '5218714645540', '51986581769', '34640025838', '5217711786384', '5212288572239', '5212289888695', '5212281494413', '5212282540063', '5212281470511', '5212284219533', '5212295496781', '5212284148843', '5212284068170', '5212282831791', '5212283162611', '447451227115', '5212281593287', '5212281167132', '5212282879619', '5212284101432', '5212282879248','5212284036345','5212283780808','5212281935472', '5212284086797' , '5212281339780', '5215561724627', '97252-498-0009', '50583825588', '58412-8015774', '5212284804602', '5212281233165', '5212282578326', '+5212282541747', '5212282885431', '5212282835983', '5212282758204', '+5212282944594', '1(787)673-8023','51917189590','50242222322','58412-1953349','5217222818560','51924197709','59168574451','50557253473','50576590822','573228888548','33983333332' ] // Cambia los numeros por tu o tus numeros a los cuales te comtactaran y gestionaras el Bot


// Nota: Puedes contactarme si necesitas ayuda con algo al +5219996125657 (este es mi numero personal/real bloqueo personas que no sean temas de la instalación)
// => Solo dudas sobre la instalación, temas generales contactarme al +17722386341 o al +14503280343
// => NO ayudo a hacer Bots, ni crearlos, ni editarlos 
// - Haré tutoriales de como editar el Bot, los videos los podran encontrar en mi canal de YouTube en https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'DyotaMC05',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': 'rey2k21'
}

// Sticker WM
global.packname = '(☞ﾟ∀ﾟ)☞'
global.author = 'don sexo'


//global.wait = '*Esperé un momento..*'


global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
