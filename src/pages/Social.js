import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import Update from './Social/Update'
import LiveStream from './Social/LiveStream'
import PostReach from './Social/PostReach'

const Social = () => {
    let match = useRouteMatch()
    //Per the official React documentation:

    // path - (string) The path pattern used to match. Useful for building nested <Route>s
    // url - (string) The matched portion of the URL. Useful for building nested <Link>s

    // Consider the route "/users/:userId". match.path would be "/users/:userId" while match.url would have the :userId value filled in, e.g. "users/5".
    return (
        <div>
            <Switch>
                <Route exact path={`${match.url}`}>
                    <Redirect to='/social/update'/>
                </Route>
                <Route path={`${match.url}/update`}>
                    <Update/>
                </Route>
                <Route path={`${match.url}/liveStream`}>
                    <LiveStream/>
                </Route>
                <Route path={`${match.url}/postReach`}>
                    <PostReach/>
                </Route>
            </Switch>
        </div>
    )
}

export default Social
