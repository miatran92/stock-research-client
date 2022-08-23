import './Search.scss';
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [search, setSearch] = useState(null)
    let navigate = useNavigate()
    const handleSubmit = () => {
        navigate(`/stocks/${search}`)
    }
  return (
    <form className="searchContainer" onSubmit={handleSubmit}>
        <input placeholder='Search for symbols' onChange={(e) => setSearch(e.target.value)}/>
        <AiOutlineSearch size={20} onClick={handleSubmit}/>
    </form>
  )
}
export default Search