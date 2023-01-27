import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [board, setBoard] = useState([
    { space: 0, content: '' },
    { space: 1, content: '' },
    { space: 2, content: '' },
    { space: 3, content: '' },
    { space: 4, content: '' },
    { space: 5, content: '' },
    { space: 6, content: '' },
    { space: 7, content: '' },
    { space: 8, content: '' },
  ]);
  const handleClick = (space) => {
    // board[space] = { space: space, content: currentPlayer };
    const newBoard = board.map((box) => {
      if ((box.space === space) & (box.content === '')) {
        box.content = currentPlayer;
        currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
      }
      return box;
    });
    setBoard(newBoard);
  };
  const [active, setActive] = useState(true);
  const [message, setMessage] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState('X');
  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        active,
        setActive,
        handleClick,
        currentPlayer,
        setCurrentPlayer,
        message,
        setMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
const useGameContext = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within GameProvider');
  }
  return context;
};
export { GameProvider, useGameContext };
