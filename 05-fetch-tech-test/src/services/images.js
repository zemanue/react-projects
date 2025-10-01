const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

// getCatImageUrl: devolverá una Promesa con la URL de la imagen del gato con las tres primeras palabras del hecho
export const getCatImageUrl = (fact) => {
    if (!fact) return Promise.resolve(undefined) // Si no hay hecho, devolvemos una promesa resuelta

    // Dividimos el hecho en un array de las tres primeras palabras y las unimos en un array con espacios de nuevo.
    const firstThreeWords = fact.split(' ', 3).join(' ') + "..."

    // Segundo fetch: Obtener la imagen del gato con las tres primeras palabras, en formato JSON
    return fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${firstThreeWords}?json=true`)
        .then(response => response.json())
        .then(responseJson => {
            // Extraemos "url" de la respuesta JSON y actualizamos el estado
            const url = responseJson.url
            return url
        })
}