export default function ResetButton({ buttonText, resetGame }) {
    return (
        <footer>
            <button onClick={resetGame} className='reset-btn'>{buttonText}</button>
        </footer>
    )
}