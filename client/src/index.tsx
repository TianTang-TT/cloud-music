import * as React from 'react'
import * as ReactDom from 'react-dom'
import './index.scss'

import { tsNumber } from "./components/Hello";

ReactDom.render(
    <h1>{ tsNumber }</h1>,
    document.querySelector('#app')
);