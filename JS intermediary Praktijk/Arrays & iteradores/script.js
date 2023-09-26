const stock = ['Rijst', 'Pasta', 'aardappelen', 'couscous', '']
const prijzen = [3.5, 5, 3.50, 2, 0]
const personen = [{ naam: 'Rene', leeftijd: 26 }, { naam: 'Puree', leeftijd: 25 }]

// personen.forEach((waarde, index, array) => {
//     console.log(waarde.naam, index)
// })

// const returnMap = stock.map((waarde,index,array) =>{
//     return `${waarde}${index}`
// })

// const totaal = prijzen.reduce((acc, waarde, index, array) => {
//     return acc + waarde
// }, 0)

// const resultaat = stock.find((waarde, index, Array) => {
//     return waarde;
// })

// const resultaat = stock.findIndex((waarde, index, Array) => {
//     return waarde;
// })

// const resultaat = stock.some((waarde, index, Array) => waarde);

// const resultaat = stock.every((waarde, index, array) => waarde);

const resultaat = stock.filter((waarde, index, array) => waarde === 'Rijst');