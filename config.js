const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_43_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjExLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDAsXG4gICAgICAgIDUyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkxLFxuICAgICAgICA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODksXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICA4NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDc2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDczLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDM2LFxuICAgICAgICA0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyZ3V0RnBWb080ZnZvSVFydnJnZlFNVW5SRVd2ZXNBWnBkaDVTRzdQZjM4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMzY3NTczOTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNjZCMTlDNTU4RDQzMjA4MjkwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTkxNzAyOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLbnI5T1RRaFN5LXFqTmdpN0Vkd0ZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI3NzFjMDJmLTIzMDgtNDMxYy1hY2YzLTRkYTViYmZlNjQ4NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICAxMzgsXG4gICAgICA0NCxcbiAgICAgIDIwLFxuICAgICAgMTkzLFxuICAgICAgNTEsXG4gICAgICA4MSxcbiAgICAgIDI0NSxcbiAgICAgIDMxLFxuICAgICAgMjA0LFxuICAgICAgNzgsXG4gICAgICAxMzYsXG4gICAgICAyMDQsXG4gICAgICAxNTcsXG4gICAgICAxMDksXG4gICAgICAxNDUsXG4gICAgICA5LFxuICAgICAgMjIsXG4gICAgICAxMjMsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgMTgwLFxuICAgICAgMTYwLFxuICAgICAgMTQsXG4gICAgICAxMzcsXG4gICAgICAyMzYsXG4gICAgICAyMDksXG4gICAgICAxNjksXG4gICAgICAzMCxcbiAgICAgIDE3MCxcbiAgICAgIDI1MSxcbiAgICAgIDk0LFxuICAgICAgMTk3LFxuICAgICAgNCxcbiAgICAgIDEzOCxcbiAgICAgIDEwNixcbiAgICAgIDExLFxuICAgICAgMixcbiAgICAgIDE5NCxcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGQjVGWE0xUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzNjc1NzM5Mjo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM5MTE4NTg3NzExNTg4OjUzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIu+jv1/wnZS58J2VmvCdlZhf8J2VlPCdlaPwnZWq8J2VofCdlaXwnZWgX++jv1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lmTDk0Z1BFTnV6ajdRR0dBMGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTnlVNXRSSnVoR3Fua09JOG1vcC9CUHVSTnQvTFAyWTVXOE8vcFFySEhYND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXcno2ZFR0THdWSkVuR29ielowZUpBdVVZT2Q2a0JvVzd3QjZ3aFJONFZrYkJ1cTNzN3F6WHM0L1BOVU1jTzRmVG8rUWFnaEdmTG5LcTI4Tm1rbHRpQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaNkdZRVNNYUZ0K1Q4eEpacGJYdlNud2dDdy9CTUVIbEFPNmxtWGhkVEI5WWYxNVVDT3pYVjhBc213VUsrbHkxOHlTd1JqOWpKRDBtMnl2aldzQ0ZoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM2NzU3MzkyOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTkxNzAyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpHNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkc2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibTZmeWtvSkIra0ZyNGRGMWhlcGhYU1g0WEhhdGFpUDlXa1oxczZIaGRMQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MDQ1MjY4MzU5LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwyLDQsNV19LFwidGltZXN0YW1wXCI6XCIxNzE5MzMzNTUzNzQ4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
