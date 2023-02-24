import { Link } from 'react-router-dom';
import './App.css';
import MainRout from './components/MainRout';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App"> 
    <Navbar /> 
    <div style={{display:"flex",gap:"40px", justifyContent:"center",marginTop:"90px"}}>
      <Link to="/">home</Link>
      <Link to="/newarival">newarival</Link>  
      <Link to="/earring">Earring</Link> 
      <Link to="/ring" > Ring </Link>
      <Link to="/cart">Cart</Link>  
      <Link to="/admin" > Admin </Link>
    </div>
      <MainRout /> 
    </div>
  );
}

export default App;
