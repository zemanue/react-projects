import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

export function useFacts() {
    const [fact, setFact] = useState('')

    const refreshFact = () => {
        // Como getRandomFact() devuelve una promesa, usamos .then para obtener el hecho
        getRandomFact().then(newFact => setFact(newFact))
    }
    
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}
