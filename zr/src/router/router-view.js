import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
function RouterView(props) {
    let {routes}=props
    let routerArr=routes.filter(item=>!item.redirect)
    let redirectArr=routes.filter(item=>item.redirect)
    return <Switch>
          {routerArr.map((item,ind)=><Route key={ind} path={item.path} render={(props)=>{
              return <item.component routes={item.children} {...props}/>
          }}></Route>)}
          {redirectArr.map((item,ind)=><Redirect key={ind} from={item.path} to={item.redirect}></Redirect>)}
    </Switch>
}

export default RouterView
