//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Awmtea Polythene" //ur yt chanel name
global.socialm = "GitHub: Awmteacck" //ur github or insta name
global.location = "Pakistan, Punjab, Lahore" //ur location

//new
global.botname = 'Flex' //ur bot name
global.ownernumber = ['918787651195'] //ur owner number, dont add more than one
global.ownername = 'Awmtea Polythene' //ur owner name
global.websitex = "https://youtu.be/WpfdClSeQyg"
global.wagc = "https://whatsapp.com/channel/0029Vakp5lvI7BeHPAtVmx2a"
global.themeemoji = '🪀'
global.wm = "Flex."
global.botscript = 'https://github.com/Awmteacck/GLOBAL-MD' //script link
global.packname = "Sticker By"
global.author = "Awmtea\n\n+918787651195"
global.creator = "918787651195@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["918787651195"] // Premium User

//channel id
global.xchannel = {
	jid: '120363322386211344@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '92,62,212' //set autoblock country code
global.antiforeignnumber = '1' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
