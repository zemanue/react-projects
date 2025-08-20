import Square from "./Square"
import ResetButton from "./ResetButton"

export default function WinnerModal({ winner, resetGame }) {

    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : `El ganador es:`

    return (
        <section className='winner'>
            <div className='text'>

                <h2>{winnerText}</h2>

                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>

                <ResetButton buttonText="Volver a jugar" resetGame={resetGame} />
            </div>
        </section>
    )


}
