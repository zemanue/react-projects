const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// getRandomFact: devolverá una Promesa con el hecho aleatorio
export const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(response => response.json())
        .then(responseJson => {
            // Extraemos "fact" de la respuesta JSON y actualizamos el estado
            const fact = responseJson.fact
            return fact
        })
}
