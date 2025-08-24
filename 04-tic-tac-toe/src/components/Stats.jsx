import { TURNS } from "../constants";
import ResetButton from "./ResetButton";

export default function Stats({ stats, resetStats }) {
    return (
        <div className='stats'>
            <h2>Estadísticas</h2>
            <p>Partidas jugadas: {stats.gamesPlayed}</p>
            <p>Victorias {TURNS.X}: {stats.xWins}</p>
            <p>Victorias {TURNS.O}: {stats.oWins}</p>
            <p>Empates: {stats.draws}</p>
            <ResetButton buttonText="Reiniciar estadísticas" resetFunction={resetStats} />
        </div>
    )
}