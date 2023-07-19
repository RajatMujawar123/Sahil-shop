import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { CompanyRoutes } from './Company/CompanyRoutes';
import Footer from './Footer/Footer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>   
      <div><Navbar/></div>
    <div className="App" style={{marginTop: "120px", marginBottom:"80px"}}>
     
      <AllRoutes/>
      {/* <Footer/> */}
    </div >
    </>
  );
}

export default App;
