

import './App.css';
import CoinPage from './pages/Coin';
import DashboardPage from './pages/Dashboard';
import HomePage from './pages/Home';
import Compare from './pages/Compare';
import Watchlist from './pages/Watchlist';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/coin/:id" element={<CoinPage />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
