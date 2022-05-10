import './App.css';
import NavBar from './Pages/NavBar/navbar';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
