import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Search } from './pages/search';
import { Swipe } from './pages/swipe';


function App() {
  const [searchParams, setSearchParams] = useState();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search setSearchParams={setSearchParams}/>} />
        <Route path="/swipe" element={<Swipe searchParams={searchParams}/>} />
      </Routes>
    </Router>
  );
}

export default App;
