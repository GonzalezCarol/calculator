import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class calculator extends Component {
    state = {...initialState}
    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.addDigitButton = this.addDigitButton.bind(this)
        this.setOperationButton = this.setOperationButton.bind(this)
    }
    addDigitButton(n) {
        console.log(n)
    }
    setOperationButton(op){
        console.log(op)
    }
    clearMemory(){
        this.setState({...initialState})
    }
    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperationButton} operation/>
                <Button label="7" click={ this.addDigitButton}/>
                <Button label="8" click={this.addDigitButton}/>
                <Button label="9" click={this.addDigitButton}/>
                <Button label="*" click={this.setOperationButton} operation/>
                <Button label="4" click={this.addDigitButton}/>
                <Button label="5" click={this.addDigitButton}/>
                <Button label="6" click={this.addDigitButton}/>
                <Button label="-" click={this.setOperationButton} operation/>
                <Button label="1" click={this.addDigitButton}/>
                <Button label="2" click={this.addDigitButton}/>
                <Button label="3" click={this.addDigitButton}/>
                <Button label="+" click={this.setOperationButton} operation/>
                <Button label="0" click={this.addDigitButton} double/>
                <Button label="." click={this.addDigitButton} operation/>
                <Button label="=" click={this.setOperationButton} operation/>

            </div>
        )
    
    }
}