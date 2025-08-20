import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import Square from './components/Square'

const TURNS = {
  X: 'X',
  O: 'O',
}

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
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

  const updateBoard = (index) => {
    // Se hace una copia del tablero porque nunca se debe modificar el estado
    const newBoard = [...board]
    if (!newBoard[index] && !winner) {
      newBoard[index] = turn // Se añade X / O dependiendo del turno
      setBoard(newBoard)

      const winner = checkWinner(newBoard)
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
      <section className='board'>
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      {winner !== null && (
        <section className='winner'>
          <div className='text'>
            <h2>
              {
                winner === false ? 'Empate' : `El ganador es: `
              }
            </h2>
            <header className='win'>
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button onClick={resetGame} className='reset-btn'>Volver a jugar</button>
            </footer>
          </div>
        </section>
      )}
    </>
  )
}

export default App