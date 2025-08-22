import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Board from './components/Board'
import WinnerModal from './components/WinnerModal'
import ResetButton from './components/ResetButton'
import TurnSection from './components/TurnSection'
import { TURNS } from './constants'

import { checkWinnerFrom, checkEndGame, getNextTurn } from './logic/board'
import { saveGameToLocalStorage, resetGameStorage } from './logic/save'


function App() {
  const [board, setBoard] = useState(() => {
    const storedBoard = window.localStorage.getItem('board')
    return storedBoard ? JSON.parse(storedBoard) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const storedTurn = window.localStorage.getItem('turn')
    return storedTurn ? storedTurn : TURNS.X
  })
  console.log('turn', turn)

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // Se hace una copia del tablero porque nunca se debe modificar el estado
    const newBoard = [...board]
    if (!newBoard[index] && !winner) {
      newBoard[index] = turn // Se añade X / O dependiendo del turno
      setBoard(newBoard)
      // Cambiar el turno
      const newTurn = getNextTurn(turn)
      setTurn(newTurn)

      saveGameToLocalStorage({ 
        board: newBoard, 
        turn: newTurn 
      })

      const winner = checkWinnerFrom(newBoard)
      if (winner) {
        confetti() // Efecto de confeti al ganar
        setWinner(winner)
        return
      } else if (checkEndGame(newBoard)) {
        setWinner(false)
        return
      }
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
    resetGameStorage()
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