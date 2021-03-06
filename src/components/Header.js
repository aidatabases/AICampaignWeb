import React from 'react'
import AILogo from '../images/AILogo.png'
import profileImg from '../images/profilesample.png'
import './Header.scss'
import { Link } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({setDrawerOpen}) => {
    const clickHandler = () => {
        setDrawerOpen(drawerOpen => !drawerOpen)
    }
    return (
        <div className="header-main">
            <div className="header-left">
                <Link to='/'><img src={AILogo}/></Link>
                <div className='header-burger-container'>
                    <div className="header-burger" onClick={clickHandler}>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            </div>
            <div className="header-right">
                <div className="header-search">
                    <input type = "text" placeholder="search everything"/>
                    <FontAwesomeIcon icon={faSearch} className='header-search-icon'/>
                </div>
                <div className="header-noti">
                    <FontAwesomeIcon icon = {faBell} className='noti-icon'/>
                    <div></div>
                </div>
                <div className="header-verti-line"/>
                <Link to='/profile'>
                    <div className="header-profile">
                        <img src={profileImg}/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
