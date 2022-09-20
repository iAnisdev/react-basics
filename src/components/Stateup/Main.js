import { Component } from "react";
import StateupSub from "./Sub";
import TemperatureInput from "./TemperatureInput";

class StateupMain extends Component {

    constructor(props) {
        super(props)

        this.state = {
            celsius: null,
            fahrenheit: null
        }

        this.handleUpdate = this.handleUpdate.bind(this)

    }

    async handleUpdate(data) {
        if(data.scale == 'f'){
            let temp = this.toCelsius(data.temprature)
            await this.setState({
                celsius: Number(temp.toFixed(0)),
                fahrenheit: data.temprature
            })
        }else{
            let temp = this.toFahrenheit(data.temprature)
            await this.setState({
                celsius: data.temprature,
                fahrenheit: Number(temp.toFixed(0))
            })
        }
    }

    toCelsius(temprature) {
        return (temprature - 32) * 5 / 9
    }

    toFahrenheit(temprature) {
        return (temprature * 9 / 5) + 32
    }

    render() {
        return (
            <div>
                <TemperatureInput scale="c" temprature={this.state.celsius} update={this.handleUpdate} />
                <TemperatureInput scale="f"  temprature={this.state.fahrenheit}  update={this.handleUpdate} />
                <p>Result</p>
                <StateupSub celsius={this.state.celsius} />
            </div>
        )
    }

}

export default StateupMain