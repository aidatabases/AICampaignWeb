import React, { useState } from "react";
import "./Drawer.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faHome } from '@fortawesome/free-solid-svg-icons'

const Drawer = () => {
  const [social, setSocial] = useState(false);
  const [connect, setConnect] = useState(false);
  const [events, setEvents] = useState(false);
  const [issues, setIssues] = useState(false);
  const [survey, setSurvey] = useState(false);

  return (
    <div className="drawer-holder">
      <div className="drawer">
        <NavLink activeClassName='drawer-nav-active' exact to="/">
          <div className="drawer-nav">
            <div className='drawer-nav-content'>
                <FontAwesomeIcon icon={faHome} className='drawer-home'/>
                <div className="drawer-nav-text">Home</div>
            </div>
          </div>
        </NavLink>
        <NavLink activeClassName='drawer-nav-active' to="/profile">
          <div className="drawer-nav">
            <div className='drawer-nav-content'>
                <FontAwesomeIcon icon={faHome} className='drawer-home'/>
                <div className="drawer-nav-text">My Profile</div>
            </div>
          </div>
        </NavLink>
        <div>
          <div className="drawer-nav" onClick={() => setSocial(!social)}>
          <div className='drawer-nav-content'>
            <FontAwesomeIcon icon={faHome} className='drawer-home'/>
            <div className="drawer-nav-text">Social Media Post</div>
            </div>
            <FontAwesomeIcon icon={faAngleUp} className='drawer-arrow' rotation={social ? 0 : 180}/>
          </div>
          {social && (
            <div>
              <NavLink activeClassName='drawer-nav-active' to="/social/update">
                <div className="drawer-nav sub-nav drawer-nav-text">Post an Update</div>
              </NavLink>
              <NavLink activeClassName='drawer-nav-active' to="/social/liveStream">
                <div className="drawer-nav sub-nav drawer-nav-text">Live Streaming</div>
              </NavLink>
              <NavLink activeClassName='drawer-nav-active' to="/social/postReach">
                <div className="drawer-nav sub-nav drawer-nav-text">Post Reach</div>
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <div className="drawer-nav" onClick={() => setConnect(!connect)}>
          <div className='drawer-nav-content'>
            <FontAwesomeIcon icon={faHome} className='drawer-home'/>
            <div className='drawer-nav-text'>Local Connect</div>
            </div>
            <FontAwesomeIcon icon={faAngleUp} className='drawer-arrow' rotation={connect ? 0 : 180}/>
          </div>
          {connect && (
            <div>
              <NavLink activeClassName='drawer-nav-active' to="/connect/news">
                <div className="drawer-nav sub-nav drawer-nav-text">News</div>
              </NavLink>
              <div
                className="drawer-nav sub-nav"
                onClick={() => setEvents(!events)}
              >
                <div className='drawer-nav-text'>Events</div>
                <FontAwesomeIcon icon={faAngleUp} className='drawer-arrow' rotation={events ? 0 : 180}/>
              </div>
              {events && (
                <div>
                  <NavLink activeClassName='drawer-nav-active' to="/connect/events/create">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">
                      Create an Event
                    </div>
                  </NavLink>
                  <NavLink activeClassName='drawer-nav-active' to="/connect/events/view">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">View Events</div>
                  </NavLink>
                </div>
              )}
              <div
                className="drawer-nav sub-nav"
                onClick={() => setIssues(!issues)}
              >
                <div className='drawer-nav-text'>Issues</div>
                <FontAwesomeIcon icon={faAngleUp} className='drawer-arrow' rotation={issues ? 0 : 180}/>
              </div>
              {issues && (
                <div>
                  <NavLink activeClassName='drawer-nav-active' to="/connect/issues/create">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">
                      Create an Issue
                    </div>
                  </NavLink>
                  <NavLink activeClassName='drawer-nav-active' to="/connect/issues/view">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">
                      View Posted Issues
                    </div>
                  </NavLink>
                </div>
              )}
              <div
                className="drawer-nav sub-nav"
                onClick={() => setSurvey(!survey)}
              >
                <div className='drawer-nav-text'>Survey</div>
                <FontAwesomeIcon icon={faAngleUp} className='drawer-arrow' rotation={survey ? 0 : 180}/>
              </div>
              {survey && (
                <div>
                  <NavLink activeClassName='drawer-nav-active' to="/connect/survey/create">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">
                      Create a Survey
                    </div>
                  </NavLink>
                  <NavLink activeClassName='drawer-nav-active' to="/connect/survey/collect">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">
                      Collect Survey Responses
                    </div>
                  </NavLink>
                  <NavLink activeClassName='drawer-nav-active' to="/connect/survey/result">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">
                      Result Dashboard
                    </div>
                  </NavLink>
                </div>
              )}
              <NavLink activeClassName='drawer-nav-active' to="/connect/voters">
                <div className="drawer-nav sub-nav drawer-nav-text">Voter Databases</div>
              </NavLink>
            </div>
          )}
        </div>
        <NavLink activeClassName='drawer-nav-active' to="/achievements">
          <div className="drawer-nav">
          <div className='drawer-nav-content'>
            <FontAwesomeIcon icon={faHome} className='drawer-home'/>
            <div className='drawer-nav-text'>Achievements Card</div>
            </div>
          </div>
        </NavLink>
        <NavLink activeClassName='drawer-nav-active' to="/talkpoints">
          <div className="drawer-nav">
          <div className='drawer-nav-content'>
            <FontAwesomeIcon icon={faHome} className='drawer-home'/>
            <div className='drawer-nav-text'>Talking Points</div>
            </div>
          </div>
        </NavLink>
        <NavLink activeClassName='drawer-nav-active' to="/donations">
          <div className="drawer-nav">
          <div className='drawer-nav-content'>
            <FontAwesomeIcon icon={faHome} className='drawer-home'/>
            <div className='drawer-nav-text'>Ask for Donations</div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Drawer;
