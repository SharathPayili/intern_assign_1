


const xlsx = require("xlsx");


const wb = xlsx.readFile("Sri Ramnikethan Work schedule.xlsx",{cellDates:true})

const ws = wb.Sheets["Bar coad Shedule"]

 var inf = xlsx.utils.sheet_to_json(ws);

console.log(inf);
