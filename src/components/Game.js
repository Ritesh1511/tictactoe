import React, { useState } from 'react';
import { calculateWinner } from '../helpers.js';
import Board from './Board';

const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
           const handleClick = i => {
           const boardCopy = [...board];
    
                    if (winner || boardCopy[i]) return;
                        boardCopy[i] = xIsNext ? 'X' : 'O';
                         setBoard(boardCopy);
                             setXisNext(!xIsNext);
                             }

    const jumpTo = () => {

    }

    const renderMoves = () => (
        <button className ="button"onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    return (
        <div>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>

                <h2 className="text">{winner ? 'Winner: '+ winner :'Next Player: ' + (xIsNext ? 'X' : 'O')}</h2>
                {renderMoves()}
                
            </div>
        </div>
    )
}

export default Game;