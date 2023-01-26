import React from 'react';
import Box from '../Box/Box.js';
import { useGameContext } from '../context/GameContext.js';
import './Board.css';

export default function Board() {
  const { board, setBoard } = useGameContext();
  return (
    <div className="board">
      {board.map((box) => (
        <Box key={box.space} />
      ))}
    </div>
  );
}
