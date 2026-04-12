
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WorkshopCard from './components/WorkshopCard';

function App() {
  return (
    <div>
      <Navbar />
       <div style={{ padding: "20px" }}>
        <WorkshopCard />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  
  );
}

export default App;
