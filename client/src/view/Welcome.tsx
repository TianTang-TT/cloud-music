import * as React from 'react'
import { withRouter } from 'react-router-dom'

class Welcome extends React.Component<any, any> {
    constructor (props:any) {
        super(props)
    }

    render () {
        return (<div className="page-welcome">
            <p> 时光时光慢些吧 </p>
        </div>)
    }

    componentDidMount () {
       setTimeout(() => {
           this.props.history.push('');
       }, 3000)
    }
}

export default withRouter(Welcome)