import { Component } from "react";

class PreventRenderingSub extends Component {
    render(){
        return (
            <div>
                <p>Renderng is {this.props.status}</p>
            </div>
        )
    }
}

export default PreventRenderingSub