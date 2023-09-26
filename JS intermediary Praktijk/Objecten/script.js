const data = {
    naam: 'Rene',
    leeftijd: 26
}

const job = {
    naam: 'Developer',
    stack: 'Javascript'
}

const adres = {
    stad: 'Antwerpen',
    provincie: 'ANTWERPEN',
    ...data,       //=> rest
    ...job
}


//Object.assign(data, adres)
//console.log()   // => {naam: 'Rene', leeftijd: 26, stad: 'Antwerpen', provincie: 'ANTWERPEN'}
                    // => Je kan ook een rest gebruiken om dit cleaner te doen. 

console.log(Object.keys(job))

console.log(Object.values(job))

