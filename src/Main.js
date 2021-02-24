import React from 'react'
import './Main.scss'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Donations from './pages/Donations'
import Social from './pages/Social'
import Achievements from './pages/Achievements'
import Talking from './pages/Talking'
import Connect from './pages/Connect'

const Main = () => {
    return (
        <div className="main-content">
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/profile'>
                    <Profile/>
                </Route>
                <Route path='/social'>
                    <Social/>
                </Route>
                <Route path='/connect'>
                    <Connect/>
                </Route>
                <Route path='/achievements'>
                    <Achievements/>
                </Route>
                <Route path='/talkpoints'>
                    <Talking/>
                </Route>
                <Route path='/donations'>
                    <Donations/>
                </Route>
            </Switch>
        </div>
    )
}

export default Main
