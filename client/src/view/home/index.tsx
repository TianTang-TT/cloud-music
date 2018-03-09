import * as React from 'react'
import Header from './Header'
import Content from './Content'

export default class Home extends React.Component {
    render () {
        return (
            <div className="page-home">
                <Header></Header>
                <Content></Content>
            </div>
        )
    }
}