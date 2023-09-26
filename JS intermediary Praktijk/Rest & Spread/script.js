/*function provincies (...provincies){
    console.log(provincies)
}

provincies ('Antwerpen','West Vlaanderen','Oost Vlaanderen', 'Waalsbrabant')*/

const hogeAutos = ['tucson','Trafic','Renegade','Model3']
const kleineAutos = ['Mini','picanto','smart','twingo']


const autos = [...hogeAutos,...kleineAutos]

const persoon = {
    naam: 'René',
    leeftijd: 26,
    job: 'developer'
}

const adres = {
    stad: 'Antwerpen',
    provincie: 'Antwerp',
    Land: 'Belgie'
}

const data = {
    ...persoon,
    ...adres
}