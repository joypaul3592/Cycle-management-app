import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Sheard/Navbar/Navbar';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
