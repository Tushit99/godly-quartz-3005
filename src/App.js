import { Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import MainRout from './components/MainRout';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App"> 
    <Navbar /> 
    <div style={{display:"flex",gap:"40px", justifyContent:"center",marginTop:"190px",flexWrap:"wrap"}}>
      <Link to="/">home</Link>
      <Link to="/newarival">newarival</Link>  
      <Link to="/earring">Earring</Link> 
      <Link to="/ring" > Ring </Link>
      <Link to="/cart">Cart</Link>  
      <Link to="/admin" > Admin </Link> 
      <Link to="/login" > Login </Link> 
      <Link to="/signup" > Signup </Link>      

    </div>
      <MainRout />  
      <Footer /> 
    </div>
  );
}

export default App;
