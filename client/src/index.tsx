import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import 'lib-flexible'
import 'normalize.css'
import 'assets/scss/index.scss'

import store from '../store'

import Welcome from './view/Welcome'
import Login from './view/Login'
import Home from './view/home'

render(
    <Provider store={store}>
        <Router>
            <div className="container">
                <Route path="/login" component={Login}></Route>
                <Route path="/welcome" component={Welcome}/>
                <Route path="/" component={Home}/>
            </div>
        </Router>
    </Provider>,
    document.querySelector('#app')
);