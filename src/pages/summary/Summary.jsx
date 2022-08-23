import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Grid } from "react-loader-spinner"
import { useParams } from "react-router-dom"
import { getStockSummary } from "../../config/api"
import './Summary.scss'


function Summary() {
    const { ticker } = useParams()
    const [isLoading, setIsLoading]= useState(true)
    const [summary, setSummary] = useState({
        price: [],
        financial: []
    })

    const fetchData = async () => {
        const response = await axios.get(getStockSummary(ticker));
        const responseData = Object.values(response.data)

        setSummary({
            price: responseData[0].split("/"),
            financial: responseData[1].split("*"),
        })
        setIsLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
  return (
    isLoading ? (
        <div>
            <Grid />
        </div>
    ) : (
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
    
  )
}
export default Summary