import { Component } from "react";
import UpdateComponent from "./Base";

class Hover extends Component {
    render() {
        const { counter, updateCounter } = this.props
        return <>
            <p onMouseOver={updateCounter}>Hovered {counter} times</p>
        </>
    }
}

export default UpdateComponent(Hover)