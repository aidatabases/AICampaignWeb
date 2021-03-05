import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'
import Create from './Survey/Create'
import Collect from './Survey/Collect'
import Result from './Survey/Result'
import ViewForm from './Survey/collect/ViewForm'
import FormCreator from './Survey/form/FormCreator'

const Survey = () => {
    let match = useRouteMatch()
    let cPath = match.url
    return (
        <div>
            <Switch>
                <Route exact path={cPath}>
                    <Redirect to={`${cPath}/create`}/>
                </Route>
                <Route exact path={`${cPath}/create`}>
                    <Create/>
                </Route>
                <Route path={`${cPath}/create/:form_id`}>
                    <FormCreator/>
                </Route>
                <Route exact path={`${cPath}/collect`}>
                    <Collect/>
                </Route>
                <Route path={`${cPath}/collect/:form_id`}>
                    <ViewForm/>
                </Route>
                <Route path={`${cPath}/result`}>
                    <Result/>
                </Route>
            </Switch>
        </div>
    )
}

export default Survey
