import React, {useState} from 'react'
import './Drawer.scss'
import Logo from '../images/search.png'
import { Link } from 'react-router-dom'

const Drawer = () => {
    const [social, setSocial] = useState(false)
    const [connect, setConnect] = useState(false)
    const [events, setEvents] = useState(false)
    const [issues, setIssues] = useState(false)
    const [survey, setSurvey] = useState(false)

    return (
        <div className='drawer-container'>
        <div className='drawer-holder'>
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
            {/* <Link to='/social'> */}
            <div>
                <div className="drawer-nav" onClick={() => setSocial(!social)}>
                    <img src={Logo}/>
                    <div>Social Media Post</div>
                </div>
                    {social && 
                    <div>
                        <div className="drawer-nav sub-nav">Post an Update</div>
                        <div className="drawer-nav sub-nav">Live Streaming</div>
                        <div className="drawer-nav sub-nav">Post Reach</div>
                    </div>
                    }
            </div>
            {/* </Link> */}
            {/* <Link to='/localConnect'> */}
            <div>
                <div className="drawer-nav" onClick={() => setConnect(!connect)}>
                    <img src={Logo}/>
                    <div>Local Connect</div>
                </div>
                {connect && 
                <div>
                    <div className="drawer-nav sub-nav">News</div>
                    <div className="drawer-nav sub-nav" onClick={() => setEvents(!events)}>Events</div>
                    {events && 
                    <div>
                        <div className="drawer-nav sub-sub-nav">Create an Event</div>
                        <div className="drawer-nav sub-sub-nav">View Events</div>
                    </div>
                    }
                    <div className="drawer-nav sub-nav" onClick={() => setIssues(!issues)}>Issues</div>
                    {issues && 
                    <div>
                        <div className="drawer-nav sub-sub-nav">Create an Issue</div>
                        <div className="drawer-nav sub-sub-nav">View Posted Issues</div>
                    </div>
                    }
                    <div className="drawer-nav sub-nav" onClick={() => setSurvey(!survey)}>Survey</div>
                    {survey && 
                    <div>
                        <div className="drawer-nav sub-sub-nav">Create a Survey</div>
                        <div className="drawer-nav sub-sub-nav">Collect Survey Responses</div>
                        <div className="drawer-nav sub-sub-nav">Result Dashboard</div>
                    </div>
                    }
                    <div className="drawer-nav sub-nav">Voter Databases</div>
                </div>
                }
            </div>
            {/* </Link> */}
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
        </div>
        </div>
    )
}

export default Drawer
