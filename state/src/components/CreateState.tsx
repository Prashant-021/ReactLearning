import React, { Component } from 'react'

interface MyProps {
    name: string
}

interface MyState {
    brand: string,
    model: string,
    color: string,
    year: number
};

export default class CreateState extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props)
        // Creating State
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1965
        };
    }

    changeColor: () => void = () => this.state.color === "red"?this.setState({color: 'Blue'}):this.setState({color: 'red'})   

    render() {
        return (
            <div>
                {/* Using State Object` */}
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}
                </p>
                <button
                    type='button'
                    onClick={this.changeColor}
                >
                    Change Color
                </button>
            </div>
        )
    }
}