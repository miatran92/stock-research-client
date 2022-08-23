import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Losers from './pages/market/losers/Losers';
import MostActives from './pages/market/mostactives/MostActives';
import Home from './pages/home/Home';
import StockPage from './pages/stockpage/StockPage';
import Gainers from './pages/market/gainers/Gainers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
          <Routes>
            {/* <Route path='/overview' element={ <Overview/>}/> */}
            <Route path='/' element={ <Home/>}/>
            <Route path='/topgainers' element={ <Gainers/>}/>
            <Route path='/toplosers' element={ <Losers/>}/>
            <Route path='/mostactives' element={ <MostActives/>}/>
            <Route path='/stocks/:ticker' element={ <StockPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
