/**
 * File for higher order components that log "hello" when clicked
 */

import React from "react";

function withLog(WrappedComponent) {
    class WithLog extends React.Component {
        constructor(props){
            super(props);
        }

        render() {
            return <WrappedComponent {...this.props}
                onClick={(onclick) => {
                    console.log('hello')
                    this.props.onClick(onclick)
                }}
            />
        }
    }

    WithLog.displayName = 'WithLog'
    return WithLog
}

export default withLog