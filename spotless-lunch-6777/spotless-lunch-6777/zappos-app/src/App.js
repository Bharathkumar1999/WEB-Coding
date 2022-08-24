// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import HomePage from './Routes/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomePage/> */}
      <AllRoutes />
      <Footer />
    </div>
  );
}



export default App;
