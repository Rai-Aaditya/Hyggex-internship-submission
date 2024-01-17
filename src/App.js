import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FlashCard from './components/FlashCard';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/flashcard" element={<FlashCard/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
