import React, {useState} from "react";
import { Display, Keypad } from "./components";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: 0
        }
    }

    // static getDerivedStateFromProps = (nextState) => {
    //     return {
    //         displayValue: nextState.displayValue
    //     }
    // }

    handleClick = (event) => {
        if (this.state.displayValue === 0) {
            this.setState({
                displayValue: event.target.value
            })
        } else {
            this.setState((state) => ({
                displayValue: Number(state.displayValue*10) + 
                                Number(event.target.value)
            }))
        }
    }

    render() {
        return (
            <div>
                <Display 
                    value={this.state.displayValue} />
                <Keypad onClick={this.handleClick} />
            </div>
        )
    }
}

export default App
