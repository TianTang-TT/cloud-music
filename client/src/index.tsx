import * as React from 'react'
import * as ReactDom from 'react-dom'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import 'reset.css'
import 'assets/scss/index.scss'

import { Welcome } from './view/Welcome'

ReactDom.render(
    <Router>
        <div className="container">
            <Route exact path="/" component={Welcome}/>
        </div>
    </Router>,
    document.querySelector('#app')
);