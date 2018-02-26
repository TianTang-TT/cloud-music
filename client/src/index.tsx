import * as React from 'react'
import * as ReactDom from 'react-dom'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import 'assets/scss/index.scss'

import { A, B, C } from "./components/Hello";

ReactDom.render(
    <Router>
        <div className="container">
            <Route exact path="/" component={A}/>
            <Route path="/b" component={B}/>
            <Route path="/c" component={C}/>
        </div>
    </Router>,
    document.querySelector('#app')
);