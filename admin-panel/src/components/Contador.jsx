import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <>
            <p>Contador de clics: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>
                + 1
            </button>
            <p>Contador de clics: {contador}</p>
        </>
    );
}

export default Contador;