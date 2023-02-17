import React from "react";

class Display extends React.Component {
    render() {
        return(
            <div>
                <textarea 
                    className="calc-display"
                    cols={30}
                    rows={3}
                    value={this.props.value}
                    readOnly
                ></textarea>
            </div>
        )
    }
}

class Button extends React.Component {
    render() {
        return (
            <button 
                onClick={this.props.onClick}
                value={this.props.value}
            >{this.props.value}</button>
        )
    }
}

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
            <div>
                {this.props.children}
            </div>
        )
    }
}

class BottomKeysRow extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class Keypad extends React.Component {
    render() {
        return (
            <div className="flex">
                <NumberGrid>
                    {/* Button inside KeyRow is an attempt at Containment */}
                    <KeyRow>
                        <Button onClick={this.props.onClick} value="1" />
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
                </NumberGrid>
                <BottomKeysRow>
                    <Button onClick={this.props.onClick} value="0" />
                    <Button value="C" />
                </BottomKeysRow>
                <ArithmeticColumn>
                    <Button value="+" />
                    <Button value="-" />
                    <Button value="*" />
                    <Button value="÷" />
                </ArithmeticColumn>
            </div>
        )
    }
}

export {Display, Keypad}