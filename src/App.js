import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Sheard/Navbar/Navbar';
import Login from './Components/UserLogin/Login/Login';
import SignUp from './Components/UserLogin/SignUp/SignUp';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import AddProduct from './Components/AddProduct/AddProduct';
import MyProduct from './Components/MyProduct/MyProduct';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/manageItem" element={<ManageProduct></ManageProduct>} />
        <Route path="/addItem" element={<AddProduct></AddProduct>} />
        <Route path="/myItem" element={<MyProduct></MyProduct>} />
        <Route path="/blog" element={<Blog></Blog>} />
      </Routes>
    </div>
  );
}

export default App;
