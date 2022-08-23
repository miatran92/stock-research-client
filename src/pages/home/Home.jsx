import './Home.scss';
import Index from '../market/index/Index';
import Gainers from '../market/gainers/Gainers';
import Losers from '../market/losers/Losers';
import MostActives from '../market/mostactives/MostActives';
function Home() {
  return (
    <div className='overviewContainer'>
      <div className="overviewWrapper">
        <div className="overviewTop">
          <Index />
        </div>
        <div className="overviewBottom">
          <div className="topMovers">
            <div className="topMoversItem"><Gainers /></div>
            <div className="topMoversItem"><Losers /></div>
            <div className="topMoversItem"><MostActives /></div>
          </div>
          {/* <div className="news">
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default Home