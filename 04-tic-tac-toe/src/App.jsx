import { useState } from 'react'
import { useEffect } from 'react'
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
  // Estado inicial del tablero: lo que haya guardado en el localStorage, y si no, un tablero vacío
  const [board, setBoard] = useState(() => {
    const storedBoard = window.localStorage.getItem('board')
    return storedBoard ? JSON.parse(storedBoard) : Array(9).fill(null)
  })

  // Estado inicial del turno: lo que haya guardado en el localStorage, y si no, el turno X
  const [turn, setTurn] = useState(() => {
    const storedTurn = window.localStorage.getItem('turn')
    return storedTurn ? storedTurn : TURNS.X
  })

  // Estado inicial del ganador: siempre a null (no hace falta guardarlo en memoria)
  const [winner, setWinner] = useState(null)

  // Estado inicial del ganador: lo que haya guardado en el localStorage, y si no, todo a 0.
  const [stats, setStats] = useState(() => {
    const storedStats = window.localStorage.getItem('stats')
    return storedStats ? JSON.parse(storedStats) : { gamesPlayed: 0, xWins: 0, oWins: 0, draws: 0 }
  })

  // Guardamos el tablero y turno en localStorage cada vez que cambian sus valores
  useEffect(() => {
    saveGameToLocalStorage({ board, turn })
    console.log(
      `Efecto: Guardando el estado del juego en localStorage
      - Tablero guardado: ${JSON.stringify(board)}
      - Turno guardado: ${turn}`
    )
  }, [board, turn])

  // Guardamos las estadísticas en localStorage cada vez que cambian
  useEffect(() => {
    saveStatsToLocalStorage(stats);
    console.log(`Efecto: Guardando estadísticas en localStorage
      - Partidas jugadas: ${stats.gamesPlayed}
      - Victorias X: ${stats.xWins}
      - Victorias O: ${stats.oWins}
      - Empates: ${stats.draws}`)
  }, [stats]);

  const updateBoard = (index) => {
    // Se hace una copia del tablero porque nunca se debe modificar el estado
    const newBoard = [...board]
    if (!newBoard[index] && !winner) {
      newBoard[index] = turn // Se añade X / O dependiendo del turno
      setBoard(newBoard)
      // Cambiar el turno
      const newTurn = getNextTurn(turn)
      setTurn(newTurn)

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
        return
      } else if (checkEndGame(newBoard)) {
        setWinner(false)
        const newStats = { ...stats, gamesPlayed: stats.gamesPlayed + 1, draws: stats.draws + 1 }
        setStats(newStats)
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