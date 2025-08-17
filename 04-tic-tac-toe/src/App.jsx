import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    // Se hace una copia del tablero porque nunca se debe modificar el estado
    const newBoard = [...board]
    if (!newBoard[index]) {
      newBoard[index] = turn // Se añade X / O dependiendo del turno
      setBoard(newBoard)
  
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
    }
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
    </>
  )
}

export default App