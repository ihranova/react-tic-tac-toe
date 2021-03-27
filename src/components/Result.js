
const Result = ({winner, reset}) => {
    return (
        <div className = "winner">
             <div className = "modal">
                 {winner === 'OK' && <h1>It's a tie!</h1>}
                 {winner === 'CROSS' && <h1>Cross won the game!</h1>}
                 {winner === 'CIRCLE' && <h1>Circle won the game!</h1>}
                 <button onClick = {reset} className = "button">Reset</button>
             </div>
        </div>
    );
}

export default Result;