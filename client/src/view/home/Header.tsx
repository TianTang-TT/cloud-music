import * as React from 'react'
export default class Header extends React.Component<{}, {}> {
    render () {
        return (
            <footer className="cm-header">
                <div className="wrap">
                    <span className="title">网易云音乐</span>
                    <div className="download">
                        <span className="download-text">
                            下载APP
                        </span>
                    </div>
                </div>
            </footer>
        )
    }
}