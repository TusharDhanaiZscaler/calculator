import React from "react";
import { Display, Keypad } from "./components";
import './sass/app.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: 0,         // setting initial value of display to 0
            operation: '',
            previousValue: 0
        }
    }

    /* 
        arrow functions don't need to be binded else use the following in 
        constructor:
        this.handleClick = this.handleClick.bind(this);
    */
    handleClick = (event) => {
        if (this.state.displayValue === 0) {
            this.setState({
                displayValue: event.target.value
            })
        } else if (this.state.operation === this.state.displayValue) {
            this.setState({
                displayValue: event.target.value
            })
        }
         else {
            // using function which accepts previous state and returns an object
            this.setState((prevState) => ({
                displayValue: Number(prevState.displayValue*10) + 
                                Number(event.target.value)
            }))
        }
    }

    clearScreen = () => {
        this.setState({
            displayValue: 0,
            operation: '',
            previousValue: 0
        })
    }

    calculateResult = (event) => {
        switch (this.state.operation) {
            case '+':
                this.setState((prevState) => ({
                    displayValue: Number(prevState.displayValue) +
                                    Number(prevState.previousValue)
                }))
                break;
                
            case '-':
                this.setState((prevState) => ({
                    displayValue: Number(prevState.previousValue) -
                                    Number(prevState.displayValue)
                }))
                break;
                
            case '*':
                this.setState((prevState) => ({
                    displayValue: Number(prevState.displayValue) *
                                    Number(prevState.previousValue)
                }))
                break;
                
            case '÷':
                this.setState((prevState) => ({
                    displayValue: Number(prevState.previousValue) /
                                    Number(prevState.displayValue)
                }))
                break;
        
            default:
                console.log("No case fired.");
                break;
        }
    }

    operationClick = (event) => {
        this.setState((prevState) => ({
            displayValue: event.target.value,
            operation: event.target.value,
            previousValue: prevState.displayValue
        }))
    }

    render() {
        return (
            <div className="app">
                <Display 
                    value={this.state.displayValue} />
                <Keypad 
                    onClick={this.handleClick}
                    onClearScreen={this.clearScreen}
                    onCalculateResult={this.calculateResult}
                    onOperationClick={this.operationClick}
                />
            </div>
        )
    }
}

export default App
