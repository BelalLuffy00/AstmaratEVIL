let handler = async (m, { conn, command, text, usedPrefix, participants }) => {
 const userChar = [
      "*سانجي*",
      "*غابي*",
      "*هوتارو*",
      "*موراساكيبارا*",
      "*لوفي*",
      "*باجي*",
      "*هاكاي*",
      "مايكي",
      "*كازاتورا*",
      "*روبين*",
      "*نامي*",
      "*هانجي*",
      "*اكازا*",
      "*دوفلامينغو*",
      "*كورابيكا*",
      "*ايتوشي رين*",
      "*غوجو*",
    ]
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)]

    let message = `*${userCharacterSeletion}*`
    
    conn.sendMessage(m.chat, { text: message, mentions: [mentionedUser] }, { quoted: m })
    
}
handler.help = ["character @tag"]
handler.tags = ['fun']
handler.command = /^(كت|كتابه|كتابة)/i

export default handler 
