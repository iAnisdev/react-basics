import { Component } from "react";
import UpdateComponent from "./Base";

class Click extends Component {
    render() {
        const { counter, updateCounter } = this.props
        return <>
            <button onClick={updateCounter}>Clicked {counter} times</button>
        </>
    }
}

export default UpdateComponent(Click)