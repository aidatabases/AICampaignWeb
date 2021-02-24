import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import Events from './Connect/Events'
import Issues from './Connect/Issues'
import Survey from './Connect/Survey'
import Voters from './Connect/Voters'
import News from './Connect/News'

const Connect = () => {
    let match = useRouteMatch()
    let cPath = match.url
    return (
        <div>
            <Switch>
                <Route exact path={cPath}>
                    <Redirect to={`${cPath}/news`}/>
                </Route>
                <Route exact path={`${cPath}/news`}>
                    <News/>
                </Route>

                <Route path={`${cPath}/events`}>
                    <Events/>
                </Route>
                <Route path={`${cPath}/issues`}>
                    <Issues/>
                </Route>
                <Route path={`${cPath}/survey`}>
                    <Survey/>
                </Route>

                <Route path={`${cPath}/voters`}>
                    <Voters/>
                </Route>
            </Switch>
        </div>
    )
}

export default Connect
