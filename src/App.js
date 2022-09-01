import Home from "./pages/home"
import Game from "./pages/game"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from "./components/header/header";
import Register from "./pages/Register";
import { useState } from "react";

function App() {
  const [name, setName] = useState("empty");


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game name={name} />} />
          <Route path="register" element={<Register setName={ setName} name={name} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
