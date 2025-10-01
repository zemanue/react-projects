import React from 'react'
import './App.css'
import { useFacts } from './hooks/useFacts'
import { useCatImage } from './hooks/useCatImage'

export default function App() {
  // Con este custom hook useFacts(), obtenemos el hecho y la función para refrescarlo
  const { fact, refreshFact } = useFacts()

  // Con este custom hook useCatImage(), obtenemos la URL de la imagen del gato basada en el hecho  
  const { imageUrl } = useCatImage(fact)

  const handleClick = async () => {
    refreshFact()
  }

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
      <button onClick={handleClick}>🔄️ New Random Fact</button>
      <section>
        {imageUrl && <img src={imageUrl} alt={`Imagen de un gato con las tres primeras palabras del hecho ${fact}`} />}
        {fact && <p>Random Fact: {fact}</p>}
      </section>
    </main>
  )
}
