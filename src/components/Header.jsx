import React from 'react'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = () =>  {
  return (
    <header>
        <div className="logo">
            <img
            src="https://telegra.ph/file/988492d8942beec37c096.jpg" alt="" />
        </div>
        <div className="contain">
        <nav>
            <div className="nav">
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/add">Добавить</Link></li>
                    <li><Link to="/contact">Про нас</Link></li>
                </ul>
            </div>
        </nav>
        </div>
    </header>
  )
}

export default Header