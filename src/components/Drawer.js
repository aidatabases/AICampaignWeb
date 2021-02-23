import React from 'react'
import './Drawer.scss'
import Logo from '../images/search.png'
import { Link } from 'react-router-dom'

const Drawer = () => {
    return (
        <div className="drawer">
            <Link to='/'>
                <div className="drawer-nav">
                    <img src={Logo}/>
                    <div>Home</div>
                </div>
            </Link>
            <Link to='/profile'>
                <div className="drawer-nav">
                    <img src={Logo}/>
                    <div>My Profile</div>
                </div>
            </Link>
            <Link to='/social'>
                <div className="drawer-nav">
                    <img src={Logo}/>
                    <div>Social Media Post</div>
                </div>
            </Link>
            <Link to='/localConnect'>
                <div className="drawer-nav">
                    <img src={Logo}/>
                    <div>Local Connect</div>
                </div>
            </Link>
            <Link to='/achievements'>
                <div className="drawer-nav">
                    <img src={Logo}/>
                    <div>Achievements Card</div>
                </div>
            </Link>
            <Link to='/talkpoints'>
                <div className="drawer-nav">
                    <img src={Logo}/>
                    <div>Talking Points</div>
                </div>
            </Link>
            <Link to='/donations'>
                <div className="drawer-nav">
                    <img src={Logo}/>
                    <div>Ask for Donations</div>
                </div>
            </Link>
        </div>
    )
}

export default Drawer
