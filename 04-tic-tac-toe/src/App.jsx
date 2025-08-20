import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Board from './components/Board'
import Square from './components/Square'
import WinnerModal from './components/WinnerModal'
import ResetButton from './components/ResetButton'
import { TURNS } from './constants'
import { checkWinnerFrom } from './logic/board'


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // Se hace una copia del tablero porque nunca se debe modificar el estado
    const newBoard = [...board]
    if (!newBoard[index] && !winner) {
      newBoard[index] = turn // Se añade X / O dependiendo del turno
      setBoard(newBoard)

      const winner = checkWinnerFrom(newBoard)
      if (winner) {
        confetti() // Efecto de confeti al ganar
        setWinner(winner)
        return
      } else if (checkEndGame(newBoard)) {
        setWinner(false)
        return
      }
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
  }

  const checkEndGame = (boardToCheck) => {
    // Si cada casilla está ocupada (!= null), es un empate
    return boardToCheck.every(square => square !== null)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board board={board} updateBoard={updateBoard} />
      <ResetButton buttonText="Reiniciar" resetGame={resetGame} />

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </>
  )
}

export default App