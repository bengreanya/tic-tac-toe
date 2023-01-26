import './App.css';
import Board from './components/Board/Board.js';
import './components/context/GameContext.js';
import { useGameContext } from './components/context/GameContext.js';
function App() {
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}

export default App;
