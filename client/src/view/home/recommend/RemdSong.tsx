import * as React from 'react'

export default class RemdSong extends React.Component<{}, {}> {
    constructor (props: any) {
        super(props)
    }

    render () {
        return (
            <div className="remd_li">
                <div className="remd_song">
                    <div className="song_wrap">
                        <img src="" className="song_img"/>
                        <span className="remd_lnum"></span>
                    </div>
                </div>
                <p className="remd_text">text</p>
            </div>
        )
    }
}