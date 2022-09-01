import Home from "./pages/home"
import Game from "./pages/game"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
