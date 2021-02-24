import React, { useState } from "react";
import "./Drawer.scss";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <div className="drawer-nav">
            <div className='drawer-nav-content'>
                <FontAwesomeIcon icon={faHome} className='drawer-home'/>
                <div className="drawer-nav-text">Home</div>
            </div>
          </div>
        </Link>
        <Link to="/profile">
          <div className="drawer-nav">
            <div className='drawer-nav-content'>
                <FontAwesomeIcon icon={faHome} className='drawer-home'/>
                <div className="drawer-nav-text">My Profile</div>
            </div>
          </div>
        </Link>
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
              <Link to="/social/update">
                <div className="drawer-nav sub-nav drawer-nav-text">Post an Update</div>
              </Link>
              <Link to="/social/liveStream">
                <div className="drawer-nav sub-nav drawer-nav-text">Live Streaming</div>
              </Link>
              <Link to="/social/postReach">
                <div className="drawer-nav sub-nav drawer-nav-text">Post Reach</div>
              </Link>
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
              <Link to="/connect/news">
                <div className="drawer-nav sub-nav drawer-nav-text">News</div>
              </Link>
              <div
                className="drawer-nav sub-nav"
                onClick={() => setEvents(!events)}
              >
                <div className='drawer-nav-text'>Events</div>
                <FontAwesomeIcon icon={faAngleUp} className='drawer-arrow' rotation={events ? 0 : 180}/>
              </div>
              {events && (
                <div>
                  <Link to="/connect/events/create">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">
                      Create an Event
                    </div>
                  </Link>
                  <Link to="/connect/events/view">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">View Events</div>
                  </Link>
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
                  <Link to="/connect/issues/create">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">
                      Create an Issue
                    </div>
                  </Link>
                  <Link to="/connect/issues/view">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">
                      View Posted Issues
                    </div>
                  </Link>
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
                  <Link to="/connect/survey/create">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">
                      Create a Survey
                    </div>
                  </Link>
                  <Link to="/connect/survey/collect">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">
                      Collect Survey Responses
                    </div>
                  </Link>
                  <Link to="/connect/survey/result">
                    <div className="drawer-nav sub-sub-nav drawer-nav-text">
                      Result Dashboard
                    </div>
                  </Link>
                </div>
              )}
              <Link to="/connect/voters">
                <div className="drawer-nav sub-nav drawer-nav-text">Voter Databases</div>
              </Link>
            </div>
          )}
        </div>
        <Link to="/achievements">
          <div className="drawer-nav">
          <div className='drawer-nav-content'>
            <FontAwesomeIcon icon={faHome} className='drawer-home'/>
            <div className='drawer-nav-text'>Achievements Card</div>
            </div>
          </div>
        </Link>
        <Link to="/talkpoints">
          <div className="drawer-nav">
          <div className='drawer-nav-content'>
            <FontAwesomeIcon icon={faHome} className='drawer-home'/>
            <div className='drawer-nav-text'>Talking Points</div>
            </div>
          </div>
        </Link>
        <Link to="/donations">
          <div className="drawer-nav">
          <div className='drawer-nav-content'>
            <FontAwesomeIcon icon={faHome} className='drawer-home'/>
            <div className='drawer-nav-text'>Ask for Donations</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
