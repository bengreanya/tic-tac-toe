import './App.css';
import Board from './components/Board/Board.js';
import './components/context/GameContext.js';
import Header from './components/Header.js';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Board></Board>
    </div>
  );
}

export default App;
