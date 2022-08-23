import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import LineChart from "../../components/charts/LineChart"
import { getHistoricalData, getStockSummary } from "../../config/api"
import './StockPage.scss'
import { Grid } from 'react-loader-spinner'
import Summary from "../summary/Summary"

function StockPage() {
    const { ticker } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [xValues, setXValues] = useState([]);
    const [yValues, setYValues] = useState([]);
    const [historicalData, setHistoricalData] = useState({
        companyName: '',
        price: '',
        dayChange: '',
    });

    const [input, setInput] = useState('')
    const fetchStock = async () => {
        const response = await axios.get(getHistoricalData(input || ticker));
            
        const responseData = Object.values(response.data);
        setXValues(responseData[2]);
        setYValues(responseData[1]);
        setHistoricalData({
            companyName: responseData[0],
            price: responseData[1][0],
            dayChange: responseData[1][0] - responseData[1][1],
            perChange: responseData[3],
            regHour: responseData[4],
        });
        setIsLoading(false);
    }
    useEffect(() => {
        fetchStock();
    }, [input || ticker])

    // Chart data
    const data = {
        labels: xValues,
        datasets: [
            {   label: 'Equity',
                data: yValues,
                borderColor: historicalData.dayChange < 0 ? 'red' : 'rgb(143,212,0)',
                pointRadius: 1,
                pointHoverRadius: 1.5,
                tension: 0
            }
        ]
    };
    const options = {
        bezierCurve: false,
        responsive: true,
        plugins: {
            legend: {
              display: false
            }
          },
        maintainAspectRatio: true,
         layout: {
             padding: 40
         },
         scales: {
            yAxes:{
              ticks:{
                fontSize: 4
              }
            },
             xAxes: 
                    {
                      ticks:{
                        font:{
                          size: 7
                        }
                      },
                     reverse: true, // will reverse the scale
                    }
         }
     };
  return ( isLoading ? 
   <div className="loading">
    <Grid/>
  </div>
    : <div className="stockPageContainer">
        <div className="stockPageWrapper">
        <input 
        className='searchInput'
        placeholder='Enter Ticker'
        onChange={(e) => setInput(e.target.value)}/>
            <div className="stockPageTop">
                <div className="infoBox">
                    <div className="coTitle">
                        <h3>{historicalData.companyName}</h3>
                        <h1>{historicalData.price}</h1>
                    </div>
                    <div className="tradeHour">
                        <span style={{ color: historicalData.dayChange > 0 ? 'green' : 'red'}}>
                            <b>{historicalData.dayChange.toFixed(2)} {historicalData.perChange}</b>
                        </span>
                        <span className="tradeTime">{historicalData.regHour}</span>
                    </div>
                   
                </div>
                <div className="chartContainer">
                    <LineChart data={data} options={options}/>
                </div>
            </div>
            <Summary/>
        </div>
    </div>
  )
}
export default StockPage