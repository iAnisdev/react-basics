import { Component } from "react";

class Developer extends Component {
    render(){
        return (
            <li>
                <h3>I am <i>{this.props.info.name}</i> , <u>{this.props.info.age}</u> year's old and i prefer <b>{this.props.info.framework}</b></h3>
            </li>
        )
    }
}

export default Developer