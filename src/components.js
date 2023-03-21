import React, { memo } from "react";
import withLog from "./withLog";

class Display extends React.Component {
    render() {
        return(
            <p
                id="display"
                // passing tabIndex -1 to make text-area non-focusable
                // by keyboard
                tabIndex={-1}
            >{this.props.value}</p>
        )
    }
}

const Button = memo(function Button(props) {
    return (
        <button 
            onClick={props.onClick}
            value={props.value}
        >{props.value}</button>
    )
})

// const Button = (props) => (
//     <button
//         onClick={props.onClick}
//         value={props.value}
//     >
//     {props.value}
//     </button>
// )

const ButtonWithLog = withLog(Button)

class KeyRow extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.children}
            <br/>
            </div>
        )
    }
}

class NumberGrid extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class ArithmeticColumn extends React.Component {
    render() {
        return (
            <div className="column">
                {this.props.children}
            </div>
        )
    }
}

class Keypad extends React.Component {
    render() {
        return (
            <div className="flex" id="keypad">
                <NumberGrid>
                    {/* Button inside KeyRow is an attempt at Containment */}
                    <KeyRow>
                        <ButtonWithLog onClick={this.props.onClick} value="1" />
                        <Button onClick={this.props.onClick} value="2" />
                        <Button onClick={this.props.onClick} value="3" />
                    </KeyRow>
                    <KeyRow>
                        <Button onClick={this.props.onClick} value="4" />
                        <Button onClick={this.props.onClick} value="5" />
                        <Button onClick={this.props.onClick} value="6" />
                    </KeyRow>
                    <KeyRow>
                        <Button onClick={this.props.onClick} value="7" />
                        <Button onClick={this.props.onClick} value="8" />
                        <Button onClick={this.props.onClick} value="9" />
                    </KeyRow>
                    <KeyRow>
                        <Button onClick={this.props.onClick} value="0" />
                        <Button value="C" onClick={this.props.onClearScreen} />
                        <Button value="=" onClick={this.props.onCalculateResult} />
                    </KeyRow>
                </NumberGrid>
                <ArithmeticColumn>
                    <Button value="+" onClick={this.props.onOperationClick} />
                    <Button value="-" onClick={this.props.onOperationClick} />
                    <Button value="*" onClick={this.props.onOperationClick} />
                    <Button value="÷" onClick={this.props.onOperationClick} />
                </ArithmeticColumn>
            </div>
        )
    }
}

export {Display, Keypad}