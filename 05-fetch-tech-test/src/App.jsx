import React, { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export default function App() {
  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res ) => res.json())
      .then((data) => setFact(data.fact))
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
      <ol>
        <li>Random Fact: {fact}</li>
      </ol>
    </main>
  )
}
