import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router'
import Create from './Events/Create'
import View from './Events/View'

const Events = () => {
    let match = useRouteMatch()
    return (
        <div>
            <Switch>
                <Route exact path={match.url}>
                    <Redirect to={`${match.url}/create`}/>
                </Route>
                <Route exact path={`${match.url}/create`}>
                    <Create/>
                </Route>
                <Route exact path={`${match.url}/view`}>
                    <View/>
                </Route>
            </Switch>
        </div>
    )
}

export default Events
