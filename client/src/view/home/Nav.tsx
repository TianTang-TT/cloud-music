import * as React from 'react'
import {
    NavLink
} from 'react-router-dom'

export default class Nav extends React.Component<{}, {}> {
    render () {
        return (
            <nav className="nav">
                <li className="nav-link">
                    <NavLink to="recommend" activeClassName="acitved">推荐音乐</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/hot" activeClassName="acitved">热歌榜</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/search" activeClassName="acitved">搜索</NavLink>
                </li>
            </nav>
        )
    }
}