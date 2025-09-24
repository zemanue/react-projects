import React, { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export default function App() {
  // Estados para el hecho y la URL de la imagen
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState()

  // Efecto para obtener el hecho y la imagen al montar el componente (solo una vez "[]")
  useEffect(() => {
    // Primer fetch: Obtener un hecho aleatorio de gatos
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(responseJson => {
        // Extraemos "fact" de la respuesta JSON y actualizamos el estado
        const fact = responseJson.fact
        setFact(fact)

        // Dividimos el hecho en un array de las tres primeras palabras y las unimos en un array con espacios de nuevo.
        const firstThreeWords = fact.split(' ', 3).join(' ')

        // Segundo fetch: Obtener la imagen del gato con las tres primeras palabras, en formato JSON
        fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${firstThreeWords}?json=true`)
          .then(response => response.json())
          .then(responseJson => {
            // Extraemos "url" de la respuesta JSON y actualizamos el estado
            const url = responseJson.url  
            setImageUrl(url)
          })
          .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <main>
      <h1>Fetch Technical Test</h1>
      <p>Explicación:</p>
      <ol>
        <li>Recupera un hecho aleatorio de gatos</li>
        <li>Muestra una imagen de un gato con las tres primeras palabras del hecho</li>
      </ol>
      <p>APIS:</p>
      <ul>
        <li>Facts Random: https://catfact.ninja/fact</li>
        <li>Cat Images: https://cataas.com/cat/says/hello</li>
      </ul>
      <br />
      {fact && <p>Random Fact: {fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Imagen de un gato con las tres primeras palabras del hecho ${fact}`} />}
    </main>
  )
}
