import React, { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export default function App() {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const fact = data.fact
        setFact(fact)

        const firstWord = fact.split(' ')[0]

        fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${firstWord}?json=true`)
          .then(res => res.json())
          .then(res => {
            console.log(res)
            const url = res.url
            setImageUrl(url)
          })
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <main>
      <h1>Fetch Technical Test</h1>
      <p>Explicación:</p>
      <ol>
        <li>Recupera un hecho aleatorio de gatos</li>
        <li>Muestra una imagen de un gato con la primera palabra del hecho</li>
      </ol>
      <p>APIS:</p>
      <ul>
        <li>Facts Random: https://catfact.ninja/fact</li>
        <li>Cat Images: https://cataas.com/cat/says/hello</li>
      </ul>
      <br />
      {fact && <p>Random Fact: {fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Imagen de un gato con la primera palabra del hecho ${fact}`} />}
    </main>
  )
}
