import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Sheard/Navbar/Navbar';
import Login from './Components/UserLogin/Login/Login';
import SignUp from './Components/UserLogin/SignUp/SignUp';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
