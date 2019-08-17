import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './router-view';
import routes from './router-setting';
function Router() {
    return <BrowserRouter>
    <RouterView routes={routes}></RouterView>
    </BrowserRouter>
}

export default Router
