const nummer = 10
const string = '20.9'
const gebrokenNummer = 10.8


//Methodes van de nummers:

Number.parseFloat(string) //20

Number.parseInt(string, 10) //20

gebrokenNummer.toFixed() // 11

nummer.toString() // '10'


//Methodes van de wiskunde:

Math.abs(-5) // 5

Math.ceil(4.3) // 5

Math.floor(4.9) // 4

Math.round(4.3) // 4

console.log((Math.random() * 200).toFixed())

Math.max(1,2,7,12) //12

Math.min(2,3,5,7,12) //2


//METHODES VAN DE DATUM:

const vandaag = new Date();

vandaag.getDate()

vandaag.getMonth()

vandaag.getFullYear()

vandaag.getHours()

vandaag.getMinutes()

vandaag.getDay()