import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }


    render() {
        return (
            <div>
                <div>Count: {this.props.count}</div>
                <button onClick={this.props.increment}>increment</button>
                <button onClick={this.props.decrement}>decrement</button>

            </div>
        );
    }
}

