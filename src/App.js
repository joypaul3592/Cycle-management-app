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
import RequireAuth from './Components/UserLogin/RequireAuth/RequireAuth';
import ManagmentInventory from './Components/ManagmentInventory/ManagmentInventory';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/manageItem" element={<RequireAuth><ManageProduct></ManageProduct></RequireAuth>} />
        <Route path="/addItem" element={<RequireAuth><AddProduct></AddProduct></RequireAuth>} />
        <Route path="/myItem" element={<RequireAuth><MyProduct></MyProduct></RequireAuth>} />
        <Route path="/managmentInventory/:id" element={<RequireAuth><ManagmentInventory></ManagmentInventory></RequireAuth>} />
        <Route path="/blog" element={<Blog></Blog>} />
      </Routes>
    </div>
  );
}

export default App;
