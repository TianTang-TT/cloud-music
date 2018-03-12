import * as React from 'react'
import { withRouter } from 'react-router-dom'

interface WelcompProps {
    history: Array<Object>
}

class Welcome extends React.Component<WelcompProps, {}> {
    constructor (props:any) {
        super(props)
    }

    render () {
        return (
            <div className="page-welcome">
                <p> 时光时光慢些吧 </p>
            </div>
        )
    }

    componentDidMount () {
       setTimeout(() => {
           this.props.history.push('');
       }, 2000)
    }
}

export default withRouter(Welcome)