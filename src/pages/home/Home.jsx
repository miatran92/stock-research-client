import Gainers from '../../components/market/gainers/Gainers'
import Index from '../../components/market/index/Index'
import Losers from '../../components/market/losers/Losers'
import MostActives from '../../components/market/mostactives/MostActives'
import Search from '../../components/searchbox/Search'
import './Home.scss'
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