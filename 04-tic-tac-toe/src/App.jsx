import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Board from './components/Board'
import WinnerModal from './components/WinnerModal'
import ResetButton from './components/ResetButton'
import TurnSection from './components/TurnSection'
import Stats from './components/Stats'
import { TURNS } from './constants'

import { checkWinnerFrom, checkEndGame, getNextTurn } from './logic/board'
import { saveGameToLocalStorage, resetGameStorage, saveStatsToLocalStorage, resetStatsStorage } from './logic/localStorage'


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

  const [stats, setStats] = useState(() => {
    const storedStats = window.localStorage.getItem('stats')
    return storedStats ? JSON.parse(storedStats) : { gamesPlayed: 0, xWins: 0, oWins: 0, draws: 0 }
  })

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
        const newStats = { ...stats, gamesPlayed: stats.gamesPlayed + 1 }
        if (winner === TURNS.X) {
          newStats.xWins += 1
        } else {
          newStats.oWins += 1
        }
        setStats(newStats)
        saveStatsToLocalStorage(newStats)
        return
      } else if (checkEndGame(newBoard)) {
        setWinner(false)
        const newStats = { ...stats, gamesPlayed: stats.gamesPlayed + 1, draws: stats.draws + 1 }
        setStats(newStats)
        saveStatsToLocalStorage(newStats)
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

  const resetStats = () => {
    setStats({ gamesPlayed: 0, xWins: 0, oWins: 0, draws: 0 })
    resetStatsStorage()
  }

  return (
    <>
      <div className="main-container">
        <div className='game'>
          <h1>Tic Tac Toe</h1>
          <Board board={board} updateBoard={updateBoard} />
          <ResetButton buttonText="Reiniciar" resetFunction={resetGame} />
          <TurnSection turn={turn} />
        </div>
        <Stats stats={stats} resetStats={resetStats} />
      </div>
      <WinnerModal winner={winner} resetFunction={resetGame} />
    </>
  )
}

export default App