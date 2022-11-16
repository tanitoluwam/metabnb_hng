
import './App.css';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/home/Home';
import { Places } from './components/places/Places';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main> 
        <Routes>
          <Route index element={<Home />} />
          <Route path="places" element={<Places />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
