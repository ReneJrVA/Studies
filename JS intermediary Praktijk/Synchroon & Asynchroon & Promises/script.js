

const mijnPromise = new Promise((resolve, reject) => {
    let conditie = false;
    if (conditie) {
        resolve('Opgelost')
    } else {
        reject('Afgewezen')
    }
})

//then en catch

mijnPromise.then((resultaat) => {
    console.log(resultaat)
}).catch((error) => {
    console.log(error)
})