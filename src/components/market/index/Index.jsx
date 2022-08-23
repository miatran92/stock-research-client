import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {MdArrowDropDown, MdArrowDropUp} from 'react-icons/md'
import { Bars } from 'react-loader-spinner'

import './Index.scss'
function Index() {
  const [indexData, setIndexData] = useState([])
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/overview/market')
      setIndexData(response.data)
      setisLoading(false)
      console.log(response.data)
    }
    fetchData()
  }, [])
  return ( isLoading 
    ? <div className='loading'>
        <Bars />
      </div>
    : <div className="indexContainer">
      <div className="indexWrapper">
        {indexData.map(i => 
         <span className='indexItem' key={i[0]}>
          <span>
            <b>{i[0]}</b>
          </span>
          <span>
            <b>{i[1]}</b>
            {i[2] > 0 
            ? <MdArrowDropUp color='green'/> 
            : <MdArrowDropDown color='red' />}
          </span>
          <span style={{ 
            fontSize: '12px', 
            color: i[2] > 0 ? 'green' : 'red'
            }}>{i[2]} {i[3]}
          </span>
        </span>
        )}
      </div>
    </div>
  )
}
export default Index