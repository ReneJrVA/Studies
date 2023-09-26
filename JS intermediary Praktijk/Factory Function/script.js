const factoryFunction = (naam) => {
    return {
        ingelogt: () => alert (`De gebruiker ${naam} is ingelogt.`),
        uitgelogt: () => alert (`De gebruiker ${naam} is uitgelogt.`),
    }
}
factoryFunction('Rene').uitgelogt();