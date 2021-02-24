import React from 'react'
import './Main.scss'
import { Route, Switch } from 'react-router-dom'

const Main = () => {
    return (
        <div className="main-content">
            <Switch>
                <Route exact path='/'>
                    Hello Home
                </Route>
                <Route path='/profile'>
                    Profile section
                </Route>
                <Route path='/social'>
                    Social Media
                </Route>
                <Route path='/connect'>
                    Local Connect
                </Route>
                <Route path='/achievements'>
                    Achievements
                </Route>
                <Route path='/talkpoints'>
                    Talking Points
                </Route>
                <Route path='/donations'>
                    Donations
                </Route>
            </Switch>
        </div>
    )
}

export default Main
