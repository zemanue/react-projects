import React, { useEffect, useState } from 'react'
import './App.css'
import { useFacts } from './hooks/useFacts'
import { getCatImageUrl } from './services/images'

export default function App() {
  // Con este custom hook useFacts(), obtenemos el hecho y la función para refrescarlo
  const { fact, refreshFact } = useFacts()

  // Estados para la URL de la imagen
  const [imageUrl, setImageUrl] = useState()

  // Efecto para obtener la imagen cuando el hecho cambia
  useEffect(() => {
    getCatImageUrl(fact).then(newImageUrl => setImageUrl(newImageUrl))
  }, [fact]) // Solo se vuelve a ejecutar si "fact" cambia

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
