import * as React from 'react'
import Nav from './Nav'

export default class Content extends React.Component<{}, {}> {
    render () {
        return (
            <div className="cm-content">
                <Nav></Nav>
            </div>
        )
    }
}