import React from "react";


class Timer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: 'Timer',
            time: new Date().toLocaleString()
        }
    }
    tick(){
        this.setState({
            time: new Date().toLocaleString()
        })
    }
    componentDidMount(){
        this.timerId = setInterval(() => {
            this.tick()
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    render() {
        return (
            <div>
                <h1>{this.state.name} component class {this.props.instance}</h1>
                <p>Date is: {this.state.time}</p>
            </div>
        )
    }
}


export default Timer