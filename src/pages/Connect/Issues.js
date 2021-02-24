import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import Create from './Issues/Create'
import View from './Issues/View'

const Issues = () => {
    let match = useRouteMatch()
    let cPath = match.url
    return (
        <div>
            <Switch>
                <Route exact path={cPath}>
                    <Redirect to={`${cPath}/create`}/>
                </Route>
                <Route path={`${cPath}/create`}>
                    <Create/>
                </Route>
                <Route path={`${cPath}/view`}>
                    <View/>
                </Route>
            </Switch>
        </div>
    )
}

export default Issues
