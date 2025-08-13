export default function ContadorDefectuoso() {
    // Si usamos una variable normal de JavaScript, React no la detectará como un cambio de estado. Por lo tanto, los cambios no se reflejarán en la interfaz de usuario.
    let contador = 0;

    return (
        <button onClick={() => {
            contador++;
            console.log("Contador incrementado: " + contador); // Puedes comprobar que el contador se incrementa, pero...
            return contador;
        }}>
            {contador} {/* ... Este valor será 0 (el valor inicial) incluso después de hacer clic, porque React no detecta que ha habido un cambio y no re-renderizará el componente */}
        </button>
    );
}