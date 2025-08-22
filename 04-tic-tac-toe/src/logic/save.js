export const saveGameToLocalStorage = ({ board, turn }) => {
    window.localStorage.setItem('board', JSON.stringify(board)) // convertir el array en string
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}