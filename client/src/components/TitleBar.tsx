import * as React from 'react'

interface TitleBarProps {
    title: string
}

export default class TitleBar extends React.Component<TitleBarProps, {}> {

    constructor (props:TitleBarProps ) {
        super(props)
    }

    render () {
        return (
            <h2 className="title-bar">
                { this.props.title }
            </h2>
        )
    }
}