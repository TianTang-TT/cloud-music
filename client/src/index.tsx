import * as React from 'react'
import * as ReactDom from 'react-dom'
import 'assets/scss/index.scss'

import { Hello } from "./components/Hello";

ReactDom.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.querySelector('#app')
);