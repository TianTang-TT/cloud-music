import * as React from 'react'
import TitleBar from '../../../components/TitleBar'
import RemdSong from './RemdSong'
export default class Recommend extends React.Component<{}, {}> {
    constructor (props: any) {
        super (props)
    }

    state = {
        songs: [
            {}, {}, {}
        ]
    }

    render () {
        return (
            <div className="recommend">
                <TitleBar title="推荐歌单"></TitleBar>
                <div className="remd_songs">
                    <div className="remd_ul">
                        {
                            this.state.songs.map((song, index) => <RemdSong key={index}></RemdSong>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}