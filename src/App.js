import './App.css';
import Nav from './components/nav/Nav';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
// import Overview from './components/market/overview/Overview';
import Gainers from './components/market/gainers/Gainers';
import Losers from './components/market/losers/Losers';
import MostActives from './components/market/mostactives/MostActives';
import Home from './pages/home/Home';
import StockPage from './pages/stockpage/StockPage';
import Search from './components/searchbox/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Search/>
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
