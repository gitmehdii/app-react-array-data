import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import ListDrivers from './pages/ListDrivers';
import Home from './pages/Home';
import TableDrivers from './pages/TableDrivers';
import './F1.css'
    
function App() {
    return (
      <Router basename="app-react-array-data">
      <Header />
      <Navbar />
          <Routes>
              <Route path="/" element = {<Home />} />
              <Route path="/list" element = {<ListDrivers />} />
              <Route path="/table" element = {<TableDrivers />} />            
          </Routes>
      <Footer />
  </Router>
    );
}	
    
export default App