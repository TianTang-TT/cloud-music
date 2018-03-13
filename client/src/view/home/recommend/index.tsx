import * as React from 'react'
import TitleBar from '../../../components/TitleBar'

export default class Recommend extends React.Component<{}, {}> {
    render () {
        return (
            <div className="recommend">
                <TitleBar title="推荐歌单"></TitleBar>
            </div>
        )
    }
}