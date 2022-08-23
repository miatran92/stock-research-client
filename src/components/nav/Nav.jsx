import './Nav.scss';
import {FaBars, FaTimes} from 'react-icons/fa';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {Link} from 'react-router-dom'
import { useState } from 'react';
function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }
  return (
    <div className="navContainer">
        <div className="navWrapper">
            <div className="navLeft">
                <Link to='/'><h1>alpaca</h1></Link>
            </div>
            <div className="navRight">
                <div className="hamburger">
                    {menuOpen 
                    ? <FaTimes size={40} onClick={handleClick} /> 
                    : <FaBars size={40} onClick={handleClick} />
                    }
                </div>
                
                <div className={menuOpen ? "menuItems active" : "menuItems"}>
                        <Link to='/mostactives'><li onClick={handleClick}>Most Actives</li></Link>
                        <Link to='/topgainers'><li onClick={handleClick}>Top Gainers</li></Link>
                        <Link to='/toplosers'><li onClick={handleClick}>Top Losers</li></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Nav