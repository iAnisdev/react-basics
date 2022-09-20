import { Component } from "react";

class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            switch: 0
        }
        // this.updateToggle = this.updateToggle.bind(this)
    }
    
    updateToggle() {
        this.setState((prevState) => {
            return {
                switch: !prevState.switch
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.updateToggle()}>{this.state.switch ? 'ON' : 'OFF'}</button>
            </div>
        )
    }

}

export default Toggle