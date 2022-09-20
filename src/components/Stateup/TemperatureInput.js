import { Component } from "react";

class TemperatureInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            temprature: null,
            scaleNames: {
                c: 'Celsius',
                f: 'Fahrenheit'
            }
        }
    }

    async handleChange(e) {
        await this.setState({
            temprature: Number(e.target.value)
        })
        this.props.update({
            scale: this.props.scale,
            temprature: this.state.temprature
        })
    }

    render() {
        return (
            <fieldset>
                <legend>Enter temprature in {this.state.scaleNames[this.props.scale]}</legend>
                <label htmlFor="temprature"></label>
                <input type="number" value={this.props.temprature ?? ''} onChange={this.handleChange.bind(this)} />
            </fieldset>
        )
    }
}

export default TemperatureInput