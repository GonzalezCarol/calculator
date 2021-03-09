import React, { Component } from "react";
import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: 0,
  values: [0, 0],
  current: 0,
};

export default class calculator extends Component {
  state = { ...initialState };
  constructor(props) {
    super(props);

    this.clearMemory = this.clearMemory.bind(this);
    this.addDigitButton = this.addDigitButton.bind(this);
    this.setOperationButton = this.setOperationButton.bind(this);
  }
  addDigitButton(n) {
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }
    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;

    const currentValue = clearDisplay ? "" : this.state.displayValue;

    const displayValue = currentValue + n;

    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[i] = newValue;
      this.setState({ values });
    }
  }
  setOperationButton(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1 });
    } else {
      const equals = (operation = operation === "=");
      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      } catch(e){
          values[0] = this.state.values[0]
      }
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  }
  clearMemory() {
    this.setState({ ...initialState });
  }
  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={this.clearMemory} triple />
        <Button label="/" click={this.setOperationButton} operation />
        <Button label="7" click={this.addDigitButton} />
        <Button label="8" click={this.addDigitButton} />
        <Button label="9" click={this.addDigitButton} />
        <Button label="*" click={this.setOperationButton} operation />
        <Button label="4" click={this.addDigitButton} />
        <Button label="5" click={this.addDigitButton} />
        <Button label="6" click={this.addDigitButton} />
        <Button label="-" click={this.setOperationButton} operation />
        <Button label="1" click={this.addDigitButton} />
        <Button label="2" click={this.addDigitButton} />
        <Button label="3" click={this.addDigitButton} />
        <Button label="+" click={this.setOperationButton} operation />
        <Button label="0" click={this.addDigitButton} double />
        <Button label="." click={this.addDigitButton} operation />
        <Button label="=" click={this.setOperationButton} operation />
      </div>
    );
  }
}
