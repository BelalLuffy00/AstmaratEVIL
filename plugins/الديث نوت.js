
let handler = async (m, { conn}) => {
let user = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let username = conn.getName(who)
let av = `./src/mp3/${pickRandom([""])}.mp3`

m.reply( `┏═─────•✨•─────═┓

📓〖 فعالية الديث نوت 〗📓

༺═──⊹⊱☔⊰⊹──═༻
» الـتـفـاصـيـل⇣⇣


» يـتـم ارسـال سـؤال ( كتابه، صور، عكس، اول حرف، الخ...) ، اول مـن يـجـاوب يـحـق لـه طـرد احـد اللاعـبـيين 📓، و اذا رأيـت امـام لـقـبـك هـذا 「☠️」فـانـت قـد خـسـرت ❕

 ༺═──⊹⊱☔⊰⊹──═༻

» الـمـقـدم 🕵🏻‍♂️ »┃┃
» وقـت الـفـعـالـيـة ⏱️ »┃عند اكتمل العدد┃
» عـدد الـمـشـاركـيـن 🔢   »┃8┃

 ┗═─────•☔•─────═┛

» مـــع تـحـيـات إدارة
               【 𓆩Evil𓆪 】`)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(الديث نوت|20)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
