import { useState, useEffect } from "react";
import { getCatImageUrl } from "../services/images";

export function useCatImage(fact) {
    // Estados para la URL de la imagen
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        // Como getCatImageUrl() devuelve una promesa, usamos .then para obtener la URL
        getCatImageUrl(fact).then(newImageUrl => setImageUrl(newImageUrl))
    }, [fact]) // Se ejecutará al montar y cada vez que "fact" cambie

    return { imageUrl }
}
