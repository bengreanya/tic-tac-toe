import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import './Box.css';

export default function Box({ space, content }) {
  console.log('content', content);
  const { handleClick } = useGameContext();
  return (
    <div className="box" onClick={() => handleClick(space)}>
      {content}
    </div>
  );
}
