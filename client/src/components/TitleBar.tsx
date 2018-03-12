import * as React from 'react'

export default class TitleBar extends React.Component <{}, {}> {
    render () {
        <h2 className="title-bar">
            { this.props.title }
        </h2>
    }
}