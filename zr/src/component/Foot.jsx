import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export class Foot extends Component {
    render() {
        return (
            <>
                <NavLink to='/Home' activeClassName="but">首页</NavLink>
                <NavLink to='/Classify' activeClassName="but">分类</NavLink>
                <NavLink to='/ShoppingTrolley' activeClassName="but">购物车</NavLink>
                <NavLink to='/My' activeClassName="but">个人</NavLink>
            </>
        )
    }
}

export default Foot
