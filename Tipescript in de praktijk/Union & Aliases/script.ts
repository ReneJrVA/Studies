

//UNION
interface werk{
    job: string,
    locatie: string
}

interface persoon {
    naam: string,
    leeftijd: number,
    stad: string,
}

const persoon: persoon | werk = {
    job: 'developer',
    locatie: 'thuis',  
}

const maaktNietUit: number | string = '30'

//ALIASES


interface school{
    studie: string,
    locatie: string
}

interface persoon1 {
    naam: string,
    leeftijd: number,
    stad?: string,
}

type data = school & persoon1

const persoon1: data = {
    studie: 'developer',
    locatie: 'thuis',
    leeftijd: 26,
    naam: 'Rene',
    
}