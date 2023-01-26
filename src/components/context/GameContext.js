import React, { createContext, useState } from 'react';

const GameContext = createContext();
const GameProvider = ({ children }) => {
  const [board, setBoard] = useState();
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
