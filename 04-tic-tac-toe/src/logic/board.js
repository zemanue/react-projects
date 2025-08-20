import { TURNS, WINNING_COMBINATIONS } from '../constants'

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
    return null
}

export const checkEndGame = (boardToCheck) => {
    // Si cada casilla está ocupada (!= null), es un empate
    return boardToCheck.every(square => square !== null)
}

export const getNextTurn = (turn) => {
    return turn === TURNS.X ? TURNS.O : TURNS.X
}