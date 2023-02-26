import './App.css';
import Footer from './components/Footer/Footer';
import MainRout from './components/MainRout';
import Navbar from './components/NavBar/Navbar'; 

function App() {
  return (
    <div className="App"> 
      <Navbar /> 
      <div style={{marginTop:"150px", marginBottom:"10px"}}>
      <MainRout/>  
      </div>
      <Footer />  
    </div>
  );
}

export default App;
