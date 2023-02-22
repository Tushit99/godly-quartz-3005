import { Link } from 'react-router-dom';
import './App.css';
import MainRout from './components/MainRout';

function App() {
  return (
    <div className="App"> 
    <div style={{display:"flex",gap:"40px", justifyContent:"center"}}>
      <Link to="/">home</Link>
      <Link to="/newarival">newarival</Link>  
      <Link to="/earring">Earring</Link>
    </div>
      <MainRout /> 
    </div>
  );
}

export default App;
