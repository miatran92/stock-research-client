import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Search from "../../components/searchbox/Search"
import { getStockSummary } from "../../config/api"
import './Summary.scss'


function Summary() {
    const { ticker } = useParams()
    const [summary, setSummary] = useState({
        price: [],
        financial: []
    })

    const fetchData = async () => {
        const response = await axios.get(getStockSummary(ticker));
        const responseData = Object.values(response.data)
        console.log(responseData)

        setSummary({
            price: responseData[0].split("/"),
            financial: responseData[1].split("*"),
        })
    }
    useEffect(() => {
        fetchData()

    }, [])
  return (
    <div className="summaryContainer">
        <h5>Summary</h5>
        <div className="sItems">
            <div className="sItem">
                {summary.price.map((e, i) => {
                if(i % 2 === 0){
                    return (
                        <li>
                            <span>{e}</span>
                        </li>
                    )
                }
            })}
            </div>
            <div className="sItem">
            {summary.price.map((e, i) => {
                if(i % 2 !== 0){
                    return (
                        <li>
                            <span><b>{e}</b></span>
                        </li>
                    )
                }
            })}
            </div>    
        </div>

        <div className="sItems">
            <div className="sItem">
                {summary.financial.map((e, i) => {
                if(i % 2 === 0){
                    return (
                        <li>
                            <span>{e}</span>
                        </li>
                    )
                }
            })}
            </div>
            <div className="sItem">
            {summary.financial.map((e, i) => {
                if(i % 2 !== 0){
                    return (
                        <li>
                            <span><b>{e}</b></span>
                        </li>
                    )
                }
            })}
            </div>    
        </div>
         
    </div>
  )
}
export default Summary