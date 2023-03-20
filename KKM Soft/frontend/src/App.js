import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';

import { Navbar } from './Components/Navbar';
import Products from './Components/Products';
import ProductsCreate from './Components/ProductsCreate';

function App() {

  // const handleLogout=()=>{
  //   localStorage.setItem("token","")


  // }

  return (
    <div className="App">
      
        {/* <h1>products App</h1> */}
        {/* <button onClick={handleLogout}>Logout</button> */}

        <Navbar/>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/createproduct' element={<ProductsCreate/>} />
        </Routes>


      
    </div>
  );
}

export default App;
