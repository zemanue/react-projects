export default function ResetButton({ buttonText, resetFunction }) {
    return (
        <footer>
            <button onClick={resetFunction} className='reset-btn'>{buttonText}</button>
        </footer>
    )
}