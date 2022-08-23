import './Search.scss';
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
        <input placeholder='Enter symbols' onChange={(e) => setSearch(e.target.value)}/>
    </form>
  )
}
export default Search