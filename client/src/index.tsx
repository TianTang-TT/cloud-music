import * as React from 'react'
import * as ReactDom from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import 'lib-flexible'
import 'normalize.css'
import 'assets/scss/index.scss'

import Welcome from './view/Welcome'
import Login from './view/Login'
import Home from './view/home'

ReactDom.render(
    <Router>
        <div className="container">
            <Route path="/login" component={Login}></Route>
            <Route path="/welcome" component={Welcome}/>
            <Route path="/" component={Home}/>
        </div>
    </Router>,
    document.querySelector('#app')
);