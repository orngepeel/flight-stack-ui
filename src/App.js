import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Search } from './pages/search';
import { Swipe } from './pages/swipe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/swipe" element={<Swipe />} />
        {/* 
        <Route path="/compare" element={<Compare />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
