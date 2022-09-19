import React from "react";


class Timer extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Time Component Class {this.props.instance}</h1>
                <p>Date is: {this.props.time}</p>
            </div>
        )
    }
}


export default Timer