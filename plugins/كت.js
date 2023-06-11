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

    let message = `${userCharacterSeletion}`
    
}
handler.help = ["character @tag"]
handler.tags = ['fun']
handler.customPrefix = /^(كت)$/i
handler.command = new RegExp

export default handler 
