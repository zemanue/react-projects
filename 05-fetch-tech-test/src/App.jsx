import React, { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { getCatImageUrl } from './services/images'

export default function App() {
  // Estados para el hecho y la URL de la imagen
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState()

  // Efecto para obtener el hecho al montar el componente (solo una vez "[]")
  useEffect(() => getRandomFact().then(newFact => setFact(newFact)), [])

  // Efecto para obtener la imagen cuando el hecho cambia
  useEffect(() => getCatImageUrl(fact).then(newImageUrl => setImageUrl(newImageUrl)), [fact]) // Solo se vuelve a ejecutar si "fact" cambia

  const handleClick = () => {
    getRandomFact().then(newFact => setFact(newFact))
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
