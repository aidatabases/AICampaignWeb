import React from 'react'
import AILogo from '../images/AILogo.png'
import bellIcon from '../images/notification.png'
import searchIcon from '../images/search.png'
import profileImg from '../images/profilesample.png'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = ({setDrawerOpen}) => {
    const clickHandler = () => {
        setDrawerOpen(drawerOpen => !drawerOpen)
    }
    return (
        <div className="header-main">
            <div className="header-left">
                <Link to='/'><img src={AILogo}/></Link>
                <div className="header-burger" onClick={clickHandler}>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
            <div className="header-right">
                <div className="header-search">
                    <input type = "text" placeholder="search everything"/>
                    <img src={searchIcon}/>
                </div>
                <div className="header-noti">
                    <img src={bellIcon}/>
                    <div></div>
                </div>
                <div className="header-verti-line"/>
                <div className="header-profile">
                    <img src={profileImg}/>
                </div>
            </div>
        </div>
    )
}

export default Header
