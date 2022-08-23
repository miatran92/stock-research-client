import axios from 'axios';
import { useEffect, useState } from 'react';
import { Grid } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { getTopLosers } from '../../../config/api';

function Losers() {
  const [losers, setLosers] = useState([])
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
     try {
         const response = await axios.get(getTopLosers())
         const data = await (response.data.topMovers)
         const filterData = await data.splice(1)
         setLosers(filterData)
         setisLoading(false)
     } catch (error) {
         console.log(error)
     }
    }
    fetchData()
 }, [])
 return ( isLoading 
    ? 
    <div className='loading'>
        <Grid />
    </div>
    : 
  <div className='moverContainer'>
    <div className="moverWrapper">
    <table>
        <caption>
            <span>Top Losers</span>
            <Link to='/toplosers'>See more</Link>
        </caption>
          <thead>
              <tr>
                  <th>Symbol/Name</th>
                  <th>Price(Intraday)</th>
                  <th>Change</th>
                  <th>% Change</th>
                  <th>Volume</th>
                  <th>Avg Vol(3month)</th>
                  <th>Market Cap</th>
                  <th>PE Ratio(TTM)</th>
              </tr>
          </thead>
          <tbody>
              {losers.map(i => (
                <tr key={i[0]}>
                    <td>
                        <Link to={`/stocks/${i[0]}`}>{i[0]}</Link>
                        <br/>{i[1]}
                      </td>
                      <td>{i[2]}</td>
                      <td style={{color: i[3] > 0 ? 'green' : 'red'}}>{i[3]}</td>
                      <td style={{color: i[3] > 0 ? 'green' : 'red'}}>{i[4]}</td>
                      <td>{i[5]}</td>
                      <td>{i[6]}</td>
                      <td>{i[7]}</td>
                      <td>{i[8]}</td>
                  </tr>
              ))}
          </tbody>
      </table>
    </div>
  </div>
)
}
export default Losers