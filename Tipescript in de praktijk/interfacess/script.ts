interface adres {
    stad: string,
    provincie: string
}


interface persoon {
    naam: string,
    leeftijd: number,
    adres: adres
}

let persoon: persoon = {
    naam: 'Rene',
    leeftijd: 22,
    adres: {
        stad: 'Antwerpen',
        provincie: 'Antwerp'
    }
}