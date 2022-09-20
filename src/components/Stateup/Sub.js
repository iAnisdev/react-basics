import { Component } from "react";

class StateupSub extends Component {

    render() {
        let p
        if (this.props.celsius >= 100) {
            p = <p>The water would boil..</p>
        } else {
            p = <p>The water wont boil..</p>
        }
        return (
            <div>
                {p}
            </div>
        )
    }
}

export default StateupSub