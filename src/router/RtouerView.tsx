import React, {FC, Suspense} from "react";
import {Switch, Route} from 'react-router-dom'
import {routes, IRoute} from './index'

const RouteWithSubRoutes = (route: IRoute) => {

    return (<Route
        path={route.path}
        render={props => (<route.component {...props} routes={route.routes}/>)}

    />)
}

const RouterView: FC = () => {


    return (<>
        <Suspense fallback={<>Loading...</>}>
            <Switch>
                {routes.map((route, i) => <RouteWithSubRoutes key={route.path} {...route}/>)}
            </Switch>
        </Suspense>
    </>)
}
export default RouterView