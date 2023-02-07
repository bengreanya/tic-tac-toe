import React from 'react';
import './Header.css';
import { useGameContext } from '../context/GameContext.js';

export default function Header() {
  const { message } = useGameContext();
  return (
    <div className="header">
      <h1>{message}</h1>
    </div>
  );
}
