import * as React from 'react'
import Header from './Header'
import Nav from './Nav'

export default class Home extends React.Component {
    render () {
        return (
            <div className="page-home">
                <Header></Header>
                <Nav></Nav>
            </div>
        )
    }
}