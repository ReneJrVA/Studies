
// verzoek maken:
fetch('https://api.coingecko.com/api/v3/exchange_rates', {
    mode: 'cors',
    method: 'POST',
    body: {
        name: 'Rene',
        age: 26
    }, headers: {

    }
}).then((data) => {
    console.log(data)
})

// een object van js is gewoon
// een object JSON is met strings zoals hieronder (dubbele haakjes)
const obj = {name: 'Rene',age: 26}

//console.log(JSON.parse(obj))   // Gaat een string van json naar een object 
                                 // van javascript getransformeerd.

console.log(JSON.stringify(obj)) // Gaat een object javascript en gaat dit transformeren
                                 // naar een object JSON