import * as React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Nav from './Nav'
import Recommend from './recommend'
import Hot from './hot'
import Search from './search'

export default class Content extends React.Component<{}, {}> {
    render () {
        return (
            <Router>
                <div className="cm-content">
                    <Nav></Nav>
                    <div className="content-wrap">
                        <Route path="/" exact component={ Recommend }></Route>
                        <Route path="/hot" component={ Hot }></Route>
                        <Route path="/search" component={ Search }></Route>
                    </div>
                </div>
            </Router>
        )
    }
}