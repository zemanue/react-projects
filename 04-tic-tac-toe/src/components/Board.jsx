import Square from "./Square"

export default function Board({ board, updateBoard }) {
    return (
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
    )
}