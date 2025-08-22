import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Board from './components/Board'
import WinnerModal from './components/WinnerModal'
import ResetButton from './components/ResetButton'
import TurnSection from './components/TurnSection'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame, getNextTurn } from './logic/board'


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
      setTurn(getNextTurn(turn))
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board board={board} updateBoard={updateBoard} />
      <ResetButton buttonText="Reiniciar" resetGame={resetGame} />

      <TurnSection turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </>
  )
}

export default App