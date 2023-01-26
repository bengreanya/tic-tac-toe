import React, { createContext, useState } from 'react';

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
  return <GameContext.Provider value={{ board, setBoard }}>{children}</GameContext.Provider>;
};
const useGameContext = () => {
  const context = useGameContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within GameProvider');
  }
  return context;
};
export { GameProvider, useGameContext };
