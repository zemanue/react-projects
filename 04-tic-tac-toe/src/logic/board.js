import { WINNING_COMBINATIONS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
    // Se hace una comprobación de cada combinación ganadora
    for (const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination
        // Si los valores de la combinación son iguales y no son null, se retorna el ganador
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    // Si no hay ganador, se retorna null
    return null
}
